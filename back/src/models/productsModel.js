// import products from '../../product.json' assert {type: 'json'}
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
            console.log(result);
            if (!result) return {products:null, error:true}
            return {products:result, error:false}
        } catch (error) {
            return error
        }
    }
}



export default ProductsModel