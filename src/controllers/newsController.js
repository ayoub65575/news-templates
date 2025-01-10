const axios = require('axios');

const DUMMY_JSON_URL = 'https://dummyjson.com/products';

const newsController = {
    // TODO: Question 5 - Implémenter les méthodes du contrôleur
    async fetchDummyJsonData(req, res, next) {
        try {
            const response = await axios.get(DUMMY_JSON_URL);
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des données' });
        }
    },
    async getAllNews(req, res) {
        try {
            const response = await axios.get(DUMMY_JSON_URL);
            res.status(200).json(response.data.products);
            
            // Utiliser axios pour faire une requête à DummyJSON
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur' });
        }
    },

    async getNewsById(req, res) {
        // TODO: Implémenter la récupération d'un article par son ID
        const { id } = req.params;
        try {
            const response = await axios.get(`${DUMMY_JSON_URL}/${id}`);
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur' });
        }
    },

    async createNews(req, res) {
        // TODO: Implémenter la création d'un article
        
    }
};

module.exports = newsController;