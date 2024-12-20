const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/zoo.json');

const readData = () => {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

const getAllAnimals = () => {
    return readData();
};

const getAnimalById = (id) => {
    const animals = readData();
    return animals.find(animal => animal.id === parseInt(id));
};

const getEndangeredAnimals = () => {
    const animals = readData();
    return animals.filter(animal => animal.isEndangered === true);
};

const getAnimalsByHabitat = (habitat) => {
    const animals = readData();
    return animals.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase());
};

const getAnimalsBySpecies = (species) => {
    const animals = readData();
    return animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase());
};

const addAnimal = (newAnimal) => {
    const animals = readData();
    const id = animals.length > 0 ? Math.max(animals.map(a => a.id)) + 1 : 1;
    newAnimal.id = id;
    animals.push(newAnimal);
    writeData(animals);
    return newAnimal;
};

const updateAnimal = (id, updatedAnimal) => {
    const animals = readData();
    const index = animals.findIndex(animal => animal.id === parseInt(id));
    if (index === -1) return null;
    animals[index] = { ...animals[index], ...updatedAnimal };
    writeData(animals);
    return animals[index];
};

const deleteAnimal = (id) => {
    const animals = readData();
    const index = animals.findIndex(animal => animal.id === parseInt(id));
    if (index === -1) return false;
    animals.splice(index, 1);
    writeData(animals);
    return true;
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
