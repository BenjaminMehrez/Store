import {connectToMongoDB, disconnetToMongoDB} from '../config/config.js'

class ProductsModel{
    static async getAll(){
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                throw Error('Error al conectar con Mongo 2')
            }
            const result = await clientMongo.db('store').collection('products').find().toArray()
            await disconnetToMongoDB()
            if (!result) return {products:null, error:true}
            return {products:result, error:false}
        } catch (error) {
            return {products: null, error}
        }
    }

    static async getById(id){
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                throw Error('Error al conectar con MongoDb')
            }
            const result = await clientMongo.db('store').collection('products').findOne({id: Number(id)})
            await disconnetToMongoDB()
            if (!result) return {products:null, error:true}
            return {products:result, error:false}

        } catch (error) {
            return {products: null, error}
        }
    }
}



export default ProductsModel