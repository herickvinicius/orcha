const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const authConfig = require('../config/auth.json')
const { request, response } = require('express')

const router = express.Router()

function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret, {
        expiresIn: 86400,
    })
}

//Registrar user
router.post('/register', async (request, response) => {
    const { email } = request.body

    try{
        if (await User.findOne({ email }))
            return response.status(400).send({ error: "User already exists" })
        
        const user = await User.create(request.body)
        user.password = undefined

        return response.status(200).send({
            user,
            token: generateToken({ id: user.id })
        })
    } catch (error) {
        console.log(error)
        return response.status(400).send({ error: "Registration failed"})
    }
})

module.exports = (app) => app.use('/user', router)