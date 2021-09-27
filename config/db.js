const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        //Note the object passed is to prevent warnings
        const conn = await mongoose.connect(process.env.MONGO_URI,{
                    //     useNewUrlParser:true,
                    //    useCreateIndex:true,
                    //     useUnifiedTopology:true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    }catch(err){
        console.log(`Error ${err.message}`.red);
        process.exit(1);
        }
}

module.exports = connectDB;