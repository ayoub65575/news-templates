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
            

            <div class=" max-w-sm bg-white  border border-sky-950 shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${product.thumbnail}" alt="product" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.title.slice(0,15)}...</h5>
        </a>
        <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">${product.description.slice(0, 50)}...</p>
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
      
    body.innerHTML=`
    <div class=" flex flex-col items-center justify-center h-screen space-y-4 ">
            <h3>404</h3>
            <h1>Not found</h1>

        </div>`;
    
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);