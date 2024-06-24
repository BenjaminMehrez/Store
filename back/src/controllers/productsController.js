import ProductsModel from "../models/productsModel.js"
import Product from "../models/schemaProduct.js"

class Products{
    static async getAll(req,res){
        const {products, error} = await ProductsModel.getAll()
        error ? res.status(400).json({error: 'No hay productos'})
              : res.status(200).json(products) 
    }

    static async getById(req,res){
        const {id} = req.params
        if(!id || !Number(id)) return res.status(400).json({error: 'No se proporsiono un ID valido'})
        const {products,error} = await ProductsModel.getById(id)
        error ? res.status(400).json({error: 'No existe el producto'})
              : res.status(200).json(products) 
    }

    static async createOne(req,res){
        const body = req.body
        try {
            const product = Product.parse(body)
            const {products,error} = await ProductsModel.createOne(product)
            if (products) return res.status(202).json(products)
            
        } catch (error) {
            res.status(400).json({error: 'El producto no se agrego correctamente'})
        }
    }
}


export default Products