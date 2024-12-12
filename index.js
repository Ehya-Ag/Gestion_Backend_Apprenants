import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './src/routes/index.js';

const app = express();
const port = 3010;
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello Gestion apprenant!');
  });

app.listen(port, () => {
    console.log(`Application demarer sur le port ${port} `);
})