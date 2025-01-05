// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        displayNews(data.products);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

// TODO: Question 1 - Compléter la fonction displayNews
function displayNews(news) {
    const container = document.getElementById('news-container');
    // Utilisez Bootstrap pour créer des cards pour chaque article
    news.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
                <img src="${article.images}" alt="${article.title}" class="w-full h-32 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg truncate">${article.title}</h3>
                   
                    <a href="#" class="inline-block mt-4 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                        Read more
                    </a>
                </div>
            </div>
        `;
        container.insertAdjacentElement('beforeend', card);
    });

}

// TODO: Question 2 - Créer une fonction pour gérer les erreurs
function showError(message) {
    // Afficher un message d'erreur avec Bootstrap
    const container = document.getElementById('news-container');
    container.innerHTML = `
        <div class="col-span-5 text-center">
            <div class="bg-red-100 text-red-600 py-4 px-6 rounded">
                ${message}
            </div>
        </div>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);