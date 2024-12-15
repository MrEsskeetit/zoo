const animalsService = require('../services/AnimalsService');

const getAllAnimals = (req, res) => {
    const animals = animalsService.getAllAnimals();
    res.json(animals);
};

const getAnimalById = (req, res) => {
    const animal = animalsService.getAnimalById(req.params.id);
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send('Animal not found');
    }
};

const getEndangeredAnimals = (req, res) => {
    const endangered = animalsService.getEndangeredAnimals();
    res.json(endangered);
};

const getAnimalsByHabitat = (req, res) => {
    const habitat = req.params.habitat;
    const animals = animalsService.getAnimalsByHabitat(habitat);
    res.json(animals);
};

const getAnimalsBySpecies = (req, res) => {
    const species = req.query.species;
    if (!species) {
        return res.status(400).send('Species query parameter is required');
    }
    const animals = animalsService.getAnimalsBySpecies(species);
    res.json(animals);
};

const addAnimal = (req, res) => {
    const newAnimal = req.body;
    const addedAnimal = animalsService.addAnimal(newAnimal);
    res.status(201).json(addedAnimal);
};

const updateAnimal = (req, res) => {
    const updatedAnimal = req.body;
    const animal = animalsService.updateAnimal(req.params.id, updatedAnimal);
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send('Animal not found');
    }
};

const deleteAnimal = (req, res) => {
    const success = animalsService.deleteAnimal(req.params.id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).send('Animal not found');
    }
};

module.exports = {
    getAllAnimals,
    getAnimalById,
    getEndangeredAnimals,
    getAnimalsByHabitat,
    getAnimalsBySpecies,
    addAnimal,
    updateAnimal,
    deleteAnimal
};
