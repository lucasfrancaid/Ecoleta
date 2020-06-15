import { Request, Response } from 'express';
import knex from '../database/connection';

export default class PointsController {
    async index (request: Request, response: Response) {
        const { uf, city, items } = request.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('uf', String(uf))
            .where('city', String(city))
            .distinct()
            .select('points.*');

        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `http://192.168.0.87:3333/uploads/${point.image}`
            };
        });

        return response.json(serializedPoints);
    };

    async show (request: Request, response: Response) {
        const { id } = request.params;
        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({message: 'Point not found!'})
        };

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.0.87:3333/uploads/${point.image}`
        };

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point: serializedPoint, items });
    };

    async create (request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        const point = {
            image: request.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };

        const trx = await knex.transaction();

        const insertedId = await trx('points')
            .insert(point)
            .returning('id')
            .then((id: any) =>  id[0]);

        const point_id = insertedId;

        const pointItems = items
        .split(',')
        .map((item: string) => Number(item.trim()))
        .map((item_id: number) => {
            return {
                item_id,
                point_id,
            }
        });

        await trx('point_items').insert(pointItems);

        await trx.commit();

        return response.json({
            id: point_id,
            ...point,
        });
    };

    async update (request: Request, response: Response) {
        const { id } = request.params;

        const {
            image,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        const point = {
            image: request.file ? request.file.filename : image,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        };

        const pointItems = await knex('point_items').where({point_id: id});

        const trx = await knex.transaction();
        await trx('points').update(point).where({id});
        const insertNewPointItem = async (newItem: object) => await knex('point_items').insert(newItem);
        const deletePointItem = async (id: number) => await knex('point_items').delete().where({id});

        const arrayItems = items.split(',').map((item: string) => Number(item.trim()))
        arrayItems.map((item_id: number) => {
            if (!pointItems.find(item => item.item_id === item_id)) {
                return insertNewPointItem({
                    item_id,
                    point_id: Number(id),
                });
            };
        });

        pointItems.map(item => {
            if (!arrayItems.find((item_id: number) => item_id == item.item_id)) {
                return deletePointItem(item.id);
            };
        });
        
        await trx.commit();

        return response.status(200).json({ id, point })
    };

    async delete (request: Request, response: Response) {
        const { id } = request.params;

        await knex('points').delete().where({id})
        .then((res) => {
            return response.status(200).json({message: 'The Point was deleted.'})
        })
        .catch((err) => {
            return response.status(400).json({message: err})
        });
    };

};