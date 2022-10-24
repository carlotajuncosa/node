//cargar paquetes 
const mongoose = require('mongoose');
require('dotenv').config();

//procesa el .env parametros que no quieres poner en el github (cntraseñas, etc), se usa en la funcion
const DB_URL = process.env.DB_URL;


//función conecta nuestra base de datos

const connectDb = async () => {
    try{
        const db = await mongoose.connect(DB_URL, {

            useNewUrlParser: true,
            useUnifiedTopology: true

            });

            const { name, host } = db.connection;
            console.log(`Estás conectado a la base de datos ${name} en el host ${host}`);
    
        } catch (error) {
        console.log(`No se ha podido conectar la base de datos ${error}`)
    }   
};

module.exports =  connectDb;