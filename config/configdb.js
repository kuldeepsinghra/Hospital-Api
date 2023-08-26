const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://kuldeep123:Kuldeep9929@cluster22.ttfwpnl.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
