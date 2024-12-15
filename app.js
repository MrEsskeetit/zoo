const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const animalsController = require('./controllers/AnimalsController');

app.use(bodyParser.json());  // Umożliwia odczytanie JSON w ciele requestu

// Endpointy
app.get('/animals', animalsController.getAllAnimals);
app.get('/animals/:id', animalsController.getAnimalById);
app.get('/animals/endangered', animalsController.getEndangeredAnimals);
app.get('/animals/habitat/:habitat', animalsController.getAnimalsByHabitat);
app.get('/animals/species', animalsController.getAnimalsBySpecies); // Query parameter
app.post('/animals', animalsController.addAnimal);
app.put('/animals/:id', animalsController.updateAnimal);
app.delete('/animals/:id', animalsController.deleteAnimal);

// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
