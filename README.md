[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h1 align="center">NEXT LEVEL WEEK #1</h1>
  <p align="center">  
    🇧🇷  Aplicativo em desenvolvimento na NEXT LEVEL WEEK criada pela @Rocketseat <br/>
    🇺🇸  App under development on NEXT LEVEL WEEK (NLW) created by @Rocketseat
  </p>
</p>

<p align="center">
  <a href="#-português"><b>🇧🇷 Português</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-english"><b>🇺🇸 English</b></a>
</p>
<br/>

## 🇧🇷 Português

<p align="center">
  <a href="#-tecnologias">💻 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-sobre-o-projeto">🕵️ Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-inicie-com-docker">🚀 Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">🆙 Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato">📬 Contate-me</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">📝 Licença</a>
</p>


<br>


## 💻 Tecnologias
* [Docker](https://www.docker.com/)
* [Node.js](https://nodejs.org/)
* [ReactJS](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Knex.js](http://knexjs.org/)
* [Express](https://expressjs.com/)

<br>

## 🕵️ Sobre o projeto
Ecoleta é um projeto criado pela @Rockeatseat, onde um Posto de Coleta pode ser registrado, para que outras pessoas possam encontrar os Pontos de Coleta mais próximos de suas casas para descarte de residuos.

<br>

## 🐳 Inicie com Docker
Para iniciar o App com Docker (*Você precisa ter o Docker instalado para continuar. Caso contrário, você pode baixá-lo através deste link: https://www.docker.com/*), execute os seguintes comandos:

```bash
$ git clone https://github.com/lucasfrancaid/Ecoleta.git
$ cd Ecoleta
$ sudo docker-compose up
```
A partir desse momento, os contêineres Server, DB e Web serão iniciados, e o aplicativo estará disponível nas seguintes URLs:
<br>
- <b>Back-end:</b> http://localhost:3333/
- <b>Front-end:</b> http://localhost:3000/

E para concluír, abra um novo terminal *sem parar o docker* e execute o seguinte comando:
```bash
$ sudo docker exec -it ecoleta_server npm run knex:seed
```
*Verifique se tudo está ocorrendo bem no back-end:* http://localhost:3333/items 

<br>

## 📦 Inicie com NPM
Para iniciar o App com NPM, antes você deve clonar o repositório:
```bash
$ git clone https://github.com/lucasfrancaid/Ecoleta.git
```
*Você precisa ter o Postgres instalado para continuar. Caso contrário, você pode baixá-lo através deste link: https://www.postgresql.org/download/*, tendo o Postgres instalado acesse a pasta server, e execute npm install:
```bash
$ cd Ecoleta/server
$ npm install
$ npm run knex:migrate
$ npm run knex:seed
$ npm run dev
```
Abra um novo terminal e faça o mesmo para a web, acesse a pasta *Ecoleta/web* e execute:
```bash
$ npm install
$ npm start
```
Após rodar os comandos, os apps Server e Web estarão disponíveis nas seguintes URLs:
<br>
- <b>Back-end:</b> http://localhost:3333/
- <b>Front-end:</b> http://localhost:3000/

*Verifique se tudo está ocorrendo bem no back-end:* http://localhost:3333/items 

<br>

## 🆙 Como contribuir

- Faça um fork desse repositório;
- Crie uma branch com sua feature: $ git checkout -b nome-feature
- Faça o commit das alterações realizadas: $ git commit -m "feat: Minha nova feature"
- Faça push para a sua branch: $ git push origin minha-feature
- Depois que o merge da sua pull request for feito, você podera deletar a sua branch.

<br>

## 📬 Contato

<b>Lucas França</b> <br/>
Linkedin: https://www.linkedin.com/in/lucasfrancaid/

<br>

## 📝 Licença

Distribuido sob a licença MIT.

<br>
<br>
<br>

## 🇺🇸 English
<p align="center">
  <a href="#-stacks">💻 Stacks</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-about-the-project">🕵️ About the Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-start-with-docker">🚀 Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">🆙 How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contact">📬 Contact-me</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">📝 License</a>
</p>


<br>


## 💻 Stacks
* [Docker](https://www.docker.com/)
* [Node.js](https://nodejs.org/)
* [ReactJS](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Knex.js](http://knexjs.org/)
* [Express](https://expressjs.com/)

<br>

## 🕵️ About the project
Ecoleta is a project created by @Rockeatseat, where a Collection Station can be registered, so that other people can find the Collection Points closest to their homes for disposal.

<br>

## 🐳 Start with Docker
To start App with docker (*You need to have the Docker installed to proceed. If not, you can download it through this link: https://www.docker.com/*), run the following commands:

```bash
$ git clone https://github.com/lucasfrancaid/Ecoleta.git
$ cd Ecoleta
$ sudo docker-compose up
```
From that moment, the Server, DB and Web containers will start, and the application will be available at the following URLs: 
<br>
- <b>Back-end:</b> http://localhost:3333/
- <b>Front-end:</b> http://localhost:3000/

To finish, open a new terminal without finishing the docker and run the following command:
```bash
$ sudo docker exec -it ecoleta_server npm run knex:seed
```
*Check that everything is going well:* http://localhost:3333/items 

<br>

## 📦 Start with NPM
To start App with NPM, before, clone this repository:
```bash
$ git clone https://github.com/lucasfrancaid/Ecoleta.git
```
*You need to have Postgres installed to continue. Otherwise, you can download it via this link: https://www.postgresql.org/download/*, then go to the server folder, and run npm install:
```bash
$ cd Ecoleta/server
$ npm install
$ npm run knex:migrate
$ npm run knex:seed
$ npm run dev
```
Open a new terminal and do the same for the web, access path *Ecoleta/web* and run:
```bash
$ npm install
$ npm start
```
After running the commands, the Server and Web apps will be available at the following URLs:
<br>
- <b>Back-end:</b> http://localhost:3333/
- <b>Front-end:</b> http://localhost:3000/

*Check that everything is going well:* http://localhost:3333/items

<br>

## 🆙 How to contribute

- Fork this repository;
- Create a branch with your feature: $ git checkout -b my-feature
- Commit the changes: $ git commit -m "feat: My new feature"
- Push your branch: $ git push origin my-feature
- After the merge of your pull request is done, you can delete your branch.

<br>

## 📬 Contact

<b>Lucas França</b> <br/>
Linkedin: https://www.linkedin.com/in/lucasfrancaid/

<br>

## 📝 License

Distributed under the MIT License.

<br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lucasfrancaid
