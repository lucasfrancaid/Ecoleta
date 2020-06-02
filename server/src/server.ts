import express from 'express';
import cors from 'cors';

const routes = require('./routes');

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});