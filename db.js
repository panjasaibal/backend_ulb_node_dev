const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/ULbDatabse';

const connectToMoongoose = () => {
    mongoose.connect(url).then(() => {
        console.log("connected with database")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports = connectToMoongoose;
