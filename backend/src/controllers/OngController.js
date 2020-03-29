const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);

    },


    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id });
    }
}


// for(var contage = 1; contage <=10; contage++){
//     var line = '';
//     for (var j = 0; j < contage; j++){              triangulo
//         line += "*";
//     }
//     console.log(line);
// };


// for (var i = 1; i <= 10; i++){
//     console.log("4 x", i, "=", 4 * i);              tabuada
// }



// function isPrimo(num){
   
//     if(num % num === 0){
//         return true;
//     }
//     if(num % 1 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
   
// }


function isPrime(num){
    for (var i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
        else{
            return num !== 1;
        }
    }
}