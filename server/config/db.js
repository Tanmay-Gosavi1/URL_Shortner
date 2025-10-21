const mongoose = require('mongoose')

const connectDB = async (req,res)=>{
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('DB conected successfully!!')
    })
    .catch((err)=>{
        console.log(err)
        console.log('Issue in DB connection !')
    })
}

module.exports = connectDB