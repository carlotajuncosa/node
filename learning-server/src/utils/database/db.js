const mongoose = require('mongoose'); //para enlazar ocn la base de datos

//ruta de la base de datos. Es local, puedo hacerla con mongo atlas
//la copio tal cual a ver si funciona
const DB_URL = 'mongodb://localhost:27017/dragon-ball';

if (!DB_URL) throw new Error('No se encuentra la URL a la base de datos');

const connectDb = async () => {
    try { 
        const db = await mongoose.connect(DB_URL);
        const { name, host } = db.connection;
        console.log(`Conectando con éxito a la db ${name} en ${host}`);
    } catch(error) {
        console.log('Error conectando a la base de datos', error);
    }
};

module.exports = {
    connectDb,
    DB_URL,
}