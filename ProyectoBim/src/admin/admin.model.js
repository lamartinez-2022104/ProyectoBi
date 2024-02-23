import {Schema, model} from 'mongoose'

const adminSchema = Schema({
    name:{
        type: String,
        required: true,
    },

    surname:{
        type: String,
        required: true
    },

    email:{
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    role:{
        type: String,
        enum: ['ADMIN', 'CLIENT'],
        required: true,
        uppercase: true,
    
    }
})

export default model('admin', adminSchema)