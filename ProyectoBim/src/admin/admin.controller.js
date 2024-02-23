'use strict'

import { generateJwt } from '../utils/jwt.js'
import { checkPassword, checkUpdate, encrypt } from '../utils/validator.js'
import Admin from './admin.model.js'

export const register = async (req, res) => {
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'ADMIN'
        let admin = new Admin(data)
        await admin.save()
        return res.send({ message: 'Admin registered' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering ' })
    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body
        let admin = await Admin.findOne({ email })
        if (admin && await checkPassword(password, admin.password)) {
            let loggedAdmin = {
                aid: admin._id,
                email: admin.email,
                name: admin.name,
                surname: admin.surname
            }
            let token = await generateJwt(loggedAdmin)
            return res.send(
                {
                    message: `Welcome ${admin.name}`,
                    loggedAdmin,
                    token
                }
            )
        }
        return res.status(404).send({ message: 'Invalid credentials' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Failed to login' })
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have sumbmitted some data that cannot be updated or missing data' })
        let updateAdmin = await Admin.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if(!updateAdmin) return res.status(401).send({message:'Admin not found'})
        return res.send({message: 'Updated admin', updateAdmin})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating account' })
    }
}

export const deleteAdmin = async(req,res)=>{
    try {
        let { id } = req.params
        let deletedAdmin = await Admin.findOneAndDelete({_id: id})
        if(!deletedAdmin) return res.status(404).send({message: 'Account not found and not deleted'})
        return res.send({message: `Account with username ${deletedAdmin.name} deleted successfully`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Erro deleting account'})
    }
}
