import Express from 'express';

const app = Express();

interface Teste {

}

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

export { app };
