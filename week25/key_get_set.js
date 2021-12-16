import redis from 'redis';
const client = redis.createClient();

const setData = async () => {

  client.connect();

  // set and get test key
  await client.set("my_key", "Hello World");
  const myKey = await client.get("my_key");
  console.log(myKey);

  // set multiple values
  const keys = ["header", "left", "article", "right", "footer"];
  const keysToSet = [...keys.map(x => [x, "0"])];
  await client.mSet(keysToSet)

  // get multiple values and log them to the console
  const getMultipleKeys = await client.mGet(keys);
  console.log(getMultipleKeys);

  client.quit();
};

setData();
