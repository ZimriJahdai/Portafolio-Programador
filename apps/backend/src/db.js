import { MongoClient, ServerApiVersion } from 'mongodb';

const rawUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'portafolio';

function buildMongoUri(uri) {
  if (!uri) return uri;
  const hasQuery = uri.includes('?');
  const params = [];

  if (!/tls=/i.test(uri)) params.push('tls=true');
  if (!/retryWrites=/i.test(uri)) params.push('retryWrites=true');
  if (!/w=/i.test(uri)) params.push('w=majority');

  if (params.length === 0) return uri;
  return `${uri}${hasQuery ? '&' : '?'}${params.join('&')}`;
}

let client;
let database;

export async function connectToDatabase() {
  if (!rawUri) {
    console.warn('[db] MONGODB_URI no esta configurada. Se continuara sin persistencia en MongoDB.');
    return null;
  }

  const uri = buildMongoUri(rawUri);

  if (database) return database;

  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  database = client.db(dbName);
  console.log(`[db] Conectado a MongoDB Atlas (db: ${dbName}).`);
  return database;
}

export async function logContactRecord(payload) {
  try {
    const db = await connectToDatabase();
    if (!db) return;
    await db.collection('contact_requests').insertOne({
      ...payload,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('[db] No se pudo registrar contact_request:', error.message);
  }
}

export async function logCvRecord(payload) {
  try {
    const db = await connectToDatabase();
    if (!db) return;
    await db.collection('cv_requests').insertOne({
      ...payload,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('[db] No se pudo registrar cv_request:', error.message);
  }
}
