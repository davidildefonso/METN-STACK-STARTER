
import config from '../config/config';
import { MongoClient } from  "mongodb";

const { username, password, database } = config;

const uri =
  `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const connection = async () =>  {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    return "Connected successfully to server";
  } finally {
    await client.close();
  }
};

export default connection;