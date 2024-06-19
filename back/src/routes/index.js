import express from 'express'
import Products from '../controllers/productsController.js'

const router = express.Router()


router.get('/products', Products.getAll)



export default router