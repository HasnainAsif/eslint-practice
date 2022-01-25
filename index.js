const restify = require('restify');

// const a = 5;
// console.log(a);

const PORT = 5000;
const app = restify.createServer();

const asd = () => {};

asd();

app.get('/', (req, res) => res.send({ hello: 'World' }));

app.get('/test', (req, res) => {
  const a = req.url;
  return res.send({ msg: a });
});

const obj = {
  hello() {
    console.log('hello');
  },
};

app.listen(PORT);
