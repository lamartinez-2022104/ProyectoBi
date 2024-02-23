'use strict'

import Category from '../category/category.model.js'

export const save = async(req, res)=>{
    try {
        let data= req.body
        let category = new Category(data)
        await category.save()
        return res.send({message: 'Category saved succesfully'})
    } catch (error) {
        console.error(err)
        return res.status(500).send({message: 'Error saving category', err})
    }
}

export const update = async(req, res)=>{
    try{
        let { id } = req.params
        let data = req.body
        let updateCategory = await Category.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        return res.send({message: 'Category updated successfully', updateCategory})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error updating category'})
    }
}

export const deleteC = async(req, res)=>{
    try{
        let { id } = req.params
        let deletedCategory = await Category.deleteOne({_id: id})
        if(deletedCategory.deletedCount == 0) return res.status(404).send({message: 'Category not found, not deleted'})
        return res.send({message: 'Deleted category successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting category'})
    }
}


export const get = async(req,res)=>{
    try {
        let categorias = await Category.find()
        return res.send({categorias})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error getting categorys'})
    }
}
