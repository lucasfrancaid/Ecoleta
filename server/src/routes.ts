import { Router } from 'express';

const routes = Router();

routes.get('/welcome', (req, res) => {
    res.json({
        English: "Welcome to the first day of Next Level Week made by @rocketseat_oficial !",
        Portuguese: "Bem-vindo ao primeiro dia da Semana Next Level feita pela @rocketseat_oficial !"
    });
});

module.exports = routes;