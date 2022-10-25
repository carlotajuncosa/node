const express = require('express');
const { get } = require('http');
const Character = require('./characters.model');

const router = express.Router();

//GET all
router.get('/', async(req, res) => {
    try{
        const allCharacters = await Character.find();
        console.log(allCharacters);
        return res.status(200).json(allCharacters);
    } catch(error) {
        return res.status(500).json('Error en el servidor')
    }
});

//GET one
//obtener personajes por id
router.get('/:id', async (req, res) => {
    try { 
        const id = req.params.id;
        const characterToFind = await Character.findById(id);
        console.log(characterToFind);
        return res.status(200).json(characterToFind);
    } catch (error) {
        return res.status(500).json('No se encontró el personaje');
    }
});
//POST
router.post('/create', async (req, res) => {
    try{
        const character = req.body;
        const newCharacter = new Character(character);
        const created = await newCharacter.save();
        return res.status(201).json(created) ;
    } catch (error) {
        return res.status(500).json('Error al crear el personaje');
    }
});
//DELETE
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const charachterToDelete = await Character.findByIdAndDelete(id);
        return res.status(201).json("Se ha consiguido borrar el personaje");
    } catch (error) {
        return res.status(500).json('Error al borrar el personaje')
    }
});
//PUT
router.put ('/edit/id/:id', async (req, res) => {
    try{

        const id = req.params.id;
        const character = req.body; //elementod que actualicemos
        const characterModify = new Character(character); //creamos nuevo personaje
        characterModify._id = id;
        //que busque por id a los personajes y se cambie la info
        const characterUpdated = await Character.findByIdAndUpdate(id, characterModify);
        return res.status(200).json({
            mensaje: "Se ha conseguido editar el personaje", characterModificado:
    characterUpdated});
    }catch{
        return res.status(500).json('Error al editar el personaje')
 
    }
})

module.exports = router;

//desde que completo este archivo funciona y se imprime en pantalla "SERVIDOR OK, ROUTE INDEX PRINCIPAL"