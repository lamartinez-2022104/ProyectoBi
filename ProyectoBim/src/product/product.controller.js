'use stric'

import Product from './product.model.js'

export const save = async(req,res)=>{
    try {
        let data = req.body
        let product = new Product(data)
        await product.save()
        return res.send({message: 'Product saved successfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error saving Product', err})
    }
}

export const update = async(req, res)=>{
    try {
        let {id} = req.params
        let data = req.body
        let updateProduct = await Product.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        return res.send({message : 'Product update successfully', updateProduct})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating'})
    }
}

export const deleteP = async(req,res)=>{
    try {
        let {id} = req.params
        let deletedProduct = await Product.deleteOne({_id: id})
        if(deletedProduct.deletedCount == 0)return res.status(404).send({message: 'Product not found, not deleted'})
        return res.send({message: 'Deleted Product Successfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting product'})
    }
}

export const get = async(req, res)=>{
    try {
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error getting products'})
    }
}

