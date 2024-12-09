const fs = require('fs');
const path = require('path');

const zooFilePath = path.join(__dirname, '../data/zoo.json');

// Pomocnicza funkcja do wczytywania danych z pliku
const readZooData = () => {
    const data = fs.readFileSync(zooFilePath);
    return JSON.parse(data);
};

// Pomocnicza funkcja do zapisywania danych do pliku
const writeZooData = (data) => {
    fs.writeFileSync(zooFilePath, JSON.stringify(data, null, 2));
};

class AnimalsService {
    static getAllAnimals() {
        return readZooData();
    }

    static getAnimalById(id) {
        const animals = readZooData();
        return animals.find(animal => animal.id == id);
    }

    static getEndangeredAnimals() {
        const animals = readZooData();
        return animals.filter(animal => animal.isEndangered);
    }

    static getAnimalsByHabitat(habitat) {
        const animals = readZooData();
        return animals.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase());
    }

    static getAnimalsBySpecies(species) {
        const animals = readZooData();
        return animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase());
    }

    static addAnimal(newAnimal) {
        const animals = readZooData();
        const id = animals.length ? Math.max(...animals.map(animal => animal.id)) + 1 : 1;
        const animalToAdd = { id, ...newAnimal };
        animals.push(animalToAdd);
        writeZooData(animals);
        return animalToAdd;
    }

    static updateAnimal(id, updatedAnimal) {
        const animals = readZooData();
        const index = animals.findIndex(animal => animal.id == id);
        if (index !== -1) {
            animals[index] = { id, ...updatedAnimal };
            writeZooData(animals);
            return animals[index];
        }
        return null;
    }

    static deleteAnimal(id) {
        const animals = readZooData();
        const index = animals.findIndex(animal => animal.id == id);
        if (index !== -1) {
            animals.splice(index, 1);
            writeZooData(animals);
            return true;
        }
        return false;
    }
}

module.exports = AnimalsService;
