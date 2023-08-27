import Express from "express";

const app = Express();

app.get('/', (req, res) => {
    return res.send("Hello World!");
});

export { app };
