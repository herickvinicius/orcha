//Iniciar aqui a instancia do banco de dados escolhido (noRel)
const database  // = require("database")  example

const UserSchema = new database.Schema({
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