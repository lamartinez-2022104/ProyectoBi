
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import categoryRoutes from '../src/category/category.routes.js'
import adminRoutes from '../src/admin/admin.routes.js'
import userRoutes from '../src/user/user.routes.js'
import productRoutes from '../src/product/product.routes.js'

const app = express() 
config()
const port = process.env.PORT || 3200


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/category', categoryRoutes)
app.use('/admin', adminRoutes)
app.use('/user', userRoutes)
app.use('/product', productRoutes)

export const initServer = ()=>{
    app.listen(port)
    console.log(`SERVER HTTP RUNNING IN PORT ${port}`)
}
