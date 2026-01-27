import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_MONITOR_URI;

if (!uri) {
    console.warn("MONGODB_MONITOR_URI not set");
}

let clientPromise;

function getClientPromise() {
    if (!clientPromise) {
        const client = new MongoClient(uri, {
            maxPoolSize: 10,
        });
        clientPromise = client.connect();
    }

    return clientPromise;
}

let indexesPromise;

async function ensureIndexes(db) {
    if (!indexesPromise) {
        indexesPromise = Promise.all([
            db.collection("events").createIndex({ timestamp: -1 }),
            db.collection("events").createIndex({ type: 1, level: 1, timestamp: -1 }),
            db.collection("events").createIndex({ correlationId: 1 }),
        ]).catch((err) => {
            console.error("Failed to create monitor indexes", err);
        });
    }

    await indexesPromise;
}

export async function getMonitorDb() {
    const client = await getClientPromise();
    const db = client.db();
    await ensureIndexes(db);
    return db;
}

export async function getMonitorCollection(name) {
    const db = await getMonitorDb();
    return db.collection(name);
}
