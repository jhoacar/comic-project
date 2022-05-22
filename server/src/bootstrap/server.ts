import express, { application } from 'express';
import 'dotenv/config';

import api from '../routes/api';
import web from '../routes/web';

const app = express();

app.use(express.json());

app.use("/api/v1",api);
app.use("/",web);

export default app;