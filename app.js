const express = require('express');
const bodyParser = require('body-parser');
const AnimalsController = require('./controllers/AnimalsController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Definicja punktów końcowych
app.get('/animals', AnimalsController.getAllAnimals);
app.get('/animals/:id', AnimalsController.getAnimalById);
app.get('/animals/endangered', AnimalsController.getEndangeredAnimals);
app.get('/animals/habitat/:habitat', AnimalsController.getAnimalsByHabitat);
app.get('/animals/species', AnimalsController.getAnimalsBySpecies);  // Nowy endpoint
app.post('/animals', AnimalsController.addAnimal);
app.put('/animals/:id', AnimalsController.updateAnimal);
app.delete('/animals/:id', AnimalsController.deleteAnimal);

// Uruchomienie serwera
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
