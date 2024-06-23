import express from 'express'
import Products from '../controllers/productsController.js'

const router = express.Router()


router.get('/products', Products.getAll)
router.get('/products/:id', Products.getById)
router.post('/products', Products.createOne)



export default router