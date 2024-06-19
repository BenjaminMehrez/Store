import ProductsModel from "../models/productsModel.js"

class Products{
    static async getAll(req,res){
        const {products, error} = await ProductsModel.getAll()
        error ? res.status(400).json({error: 'No hay productos'})
              : res.status(200).json(products) 
    }
}


export default Products