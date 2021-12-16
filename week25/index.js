import express from 'express';
import redis from 'redis';

const keys = ["header", "left", "article", "right", "footer"];
let client;

(async () => {
  client = redis.createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  // await client.set('key', 'value');
  // const data = await client.get('key');
  // console.log(data);

  // let test = await client.multi()
  //   .set('header', 0)
  //   .set('left', 0)
  //   .set('article', 0)
  //   .set('right', 0)
  //   .set('footer', 0)
  //   .exec();
  
  // console.log(test);

  const keysToSet = [...keys.map(x => [x, "0"])];
  await client.mSet(keysToSet)
})();

async function getData() {
  return new Promise((resolve, reject) => {
    let values = client.multi()
      .get('header')
      .get('left')
      .get('article')
      .get('right')
      .get('footer')
      .exec();
    values ? resolve(values) : reject(null);
  })
}

async function setData(key, value) {
  return new Promise((resolve, reject) => {
    let data = client.set(key, value);
    data ? resolve(data) : reject(null);
  })
}

var app = express();
app.use(express.static('public'));

// app.get('/', function(req, res) {
//   res.send('Hello World');
// })

app.get('/data', function(req, res) {
  getData().then(values => {
    let data = {
      'header': Number(values[0]),
      'left': Number(values[1]),
      'article': Number(values[2]),
      'right': Number(values[3]),
      'footer': Number(values[4])
    };
    res.json(data);
  })
})

app.get('/update/:key/:value', function(req, res) {
  let key = req.params.key;
  let value = Number(req.params.value);
  getData().then(values => {
    let data = {
      'header': Number(values[0]),
      'left': Number(values[1]),
      'article': Number(values[2]),
      'right': Number(values[3]),
      'footer': Number(values[4])
    };
    value += Number(data[key]);
    setData(key, value).then(result => {
      // console.log(result);
      res.json(result);
    })
  })
})

app.listen(3000, function() {
  console.log('Running on port 3000');
})
