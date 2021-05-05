//Iniciar aqui a instancia do banco de dados escolhido (noRel)
const mongoose = require('../config/database')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    lastToken: {
        type: String,
        select: false,
    },
})

UserSchema.pre("save", async (next) => {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

const User = mongoose.model("User", UserSchema)

module.exports = User