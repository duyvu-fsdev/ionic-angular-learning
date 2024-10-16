import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
let app = express();
let port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options: cors.CorsOptions = {
 origin: true,
};
app.use(cors(options));
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
 return res.status(200).send({ response: 'duyvu-fsdev' });
});

app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
 console.log('_________________________________');
});
