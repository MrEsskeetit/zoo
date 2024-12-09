const AnimalsService = require('../services/AnimalsService');

class AnimalsController {
    static getAllAnimals(req, res) {
        const animals = AnimalsService.getAllAnimals();
        res.json(animals);
    }

    static getAnimalById(req, res) {
        const { id } = req.params;
        const animal = AnimalsService.getAnimalById(id);
        if (animal) {
            res.json(animal);
        } else {
            res.status(404).json({ message: 'Animal not found' });
        }
    }

    static getEndangeredAnimals(req, res) {
        const endangeredAnimals = AnimalsService.getEndangeredAnimals();
        res.json(endangeredAnimals);
    }

    static getAnimalsByHabitat(req, res) {
        const { habitat } = req.params;
        const animals = AnimalsService.getAnimalsByHabitat(habitat);
        res.json(animals);
    }

    static getAnimalsBySpecies(req, res) {
        const { species } = req.query;
        const animals = AnimalsService.getAnimalsBySpecies(species);
        res.json(animals);
    }

    static addAnimal(req, res) {
        const newAnimal = req.body;
        const addedAnimal = AnimalsService.addAnimal(newAnimal);
        res.status(201).json(addedAnimal);
    }

    static updateAnimal(req, res) {
        const { id } = req.params;
        const updatedAnimal = req.body;
        const animal = AnimalsService.updateAnimal(id, updatedAnimal);
        if (animal) {
            res.json(animal);
        } else {
            res.status(404).json({ message: 'Animal not found' });
        }
    }

    static deleteAnimal(req, res) {
        const { id } = req.params;
        const isDeleted = AnimalsService.deleteAnimal(id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Animal not found' });
        }
    }
}

module.exports = AnimalsController;
