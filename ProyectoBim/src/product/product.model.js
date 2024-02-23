import { Schema, model } from 'mongoose'

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
    },

    category: {
        type: Schema.ObjectId,
        required: true
    },

    stock:{
        type: Number,
        required: true
    }
}
) 

export default model('product', productSchema)