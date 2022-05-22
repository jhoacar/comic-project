import express from 'express';
import 'dotenv/config';
import cors, { CorsOptions } from 'cors';

import api from '../routes/api';
import web from '../routes/web';

const app = express();

app.use(express.json());

const allowedOrigins = ['http://localhost:3000'];
const options:CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options));

app.use("/api/v1",api);
app.use("/",web);

export default app;