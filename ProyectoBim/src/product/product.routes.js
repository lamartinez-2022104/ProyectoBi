'use stric'

import { Router } from "express"
import { save } from "./product.controller.js"

const api = Router()

api.post('/save', save)

export default api