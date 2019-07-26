const express = require('express');
const app = express();

const port  = 3000;

app.get('/', (req, res, next) => {
    res.send('test...');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});