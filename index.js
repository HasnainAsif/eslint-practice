const restify = require('restify');

const a = 5;

const PORT = 5000;
const app = restify.createServer();

const asd = () => {};

asd();
app.get('/', (req, res) => res.send({ hello: 'World' }));
app.listen(PORT);
