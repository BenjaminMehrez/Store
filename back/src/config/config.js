import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient(process.env.MONGO_URL)

export async function connectToMongoDB() {
    try {
        await client.connect()
        console.log('Conectado a MongoDb')
        return client
    } catch (error) {
        console.log('Error al conectar con MONGODB 1');
        return null
    }
}

export async function disconnetToMongoDB() {
    try {
        await client.close()
        console.log('Desconectado de MONGODB')
    } catch (error) {
        console.log('Error al desconenctar con MONGODB', error);
    }
}
