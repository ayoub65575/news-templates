// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
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
    news.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            

            <div class=" max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700" style="border= 1px solid #e5e7eb; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);padding: 1rem; height: 100%;">
    <a href="#">
        <img class="rounded-t-lg" src="${product.thumbnail}" alt="product" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.title.slice(0, 15)}...</h5>
        </a>
        <p class="mb-4 font-normal text-gray-700 dark:text-gray-400" >${product.description.slice(0, 50)}...</p>
        <div class=" flex items-center justify-between">
            <button style="
            background-color: #3b82f6; 
            color: white; 
            border-radius: 1rem; 
            padding: 0.5rem 0.5rem; 
            border: none; 
            cursor: pointer; 
            outline: none; 
            transition: background-color 0.3s ease, transform 0.2s ease;"
        onmouseover="this.style.backgroundColor='#1e40af'; this.style.transform='scale(1.05)';" 
        onmouseout="this.style.backgroundColor='#3b82f6'; this.style.transform='scale(1)';" 
        onfocus="this.style.backgroundColor='#1e40af';" 
        onblur="this.style.backgroundColor='#3b82f6';" > 
                lire la suite
            </button>
            <span class="text-gray-900 font-bold">${product.price}$</span>
    </div>
</div>
        `;
        container.insertAdjacentElement('beforeend', card);
    });

}

// TODO: Question 2 - Créer une fonction pour gérer les erreurs
function showError(message) {
    const body = document.querySelector('body');

    body.innerHTML = `
    <body style="margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #f8fafc;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;">
        <div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <p style="font-size: 6rem; font-weight: bold; letter-spacing: 0.05em; color: #d1d5db; margin: 0;">404</p>
            <p style="font-size: 3rem; font-weight: bold; letter-spacing: 0.05em; color: #d1d5db; margin-top: 0.5rem;">Page Not Found</p>
            <p style="font-size: 1.25rem; color: #6b7280; margin: 2rem 0;">Sorry, the page you are looking for could not be found.</p>
        </div>
    </div>
</body>`;

}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);