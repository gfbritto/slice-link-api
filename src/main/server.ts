import Express from 'express';
import 'dotenv/config';
const app = Express();

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

export { app };
