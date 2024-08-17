const mongoose = require("mongoose")


async function connectDB(){
    try{
        // await mongoose.connect(process.env.MONGODB_URI)
        await mongoose.connect('mongodb+srv://ecommercewebsiteaug12:Ecommerce_A1B2@mern.jlo0qjy.mongodb.net/MERN-Ecommerce?retryWrites=true&w=majority&appName=MERN')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB