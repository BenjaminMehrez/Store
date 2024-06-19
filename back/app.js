import express from 'express'
import dotenv from 'dotenv'
import routerProducts from './src/routes/index.js'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT,() =>{
    console.log(`Servidor Run en http://localhost:${PORT}`);
})

app.get('/',(req,res) =>{
    res.send('<h1>Api tienda<h1/>')
})

app.use('/api', routerProducts)