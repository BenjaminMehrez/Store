import express from 'express'
import dotenv from 'dotenv'
import routerProducts from './src/routes/index.js'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT,() =>{
    console.log(`Servidor Run en http://localhost:${PORT}`);
})


app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE,PATCH')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.get('/',(req,res) =>{
    res.send('<h1>Api tienda<h1/>')
})

app.use('/api', routerProducts)