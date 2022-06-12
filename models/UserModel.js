import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    
}, {timestamps: true});

export const UserModel = mongoose.model('User', schema);