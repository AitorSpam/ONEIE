document.addEventListener('DOMContentLoaded', () => {
    const repoResultsContainer = document.getElementById('repository-results');
    const blogPostsContainer = document.getElementById('blog-posts');
    const searchInput = document.getElementById('repo-search');
    const constructFilter = document.getElementById('repo-filter-construct');

    // --- RENDERIZADO DEL REPOSITORIO ---
    function renderRepository(items) {
        repoResultsContainer.innerHTML = ''; // Limpiar resultados anteriores
        if (items.length === 0) {
            repoResultsContainer.innerHTML = '<p>No se encontraron instrumentos con esos criterios.</p>';
            return;
        }
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card repo-item';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Autor/Validación:</strong> ${item.author}</p>
                <p><strong>Constructo:</strong> ${item.construct}</p>
                <p><strong>Población:</strong> ${item.population}</p>
                <a href="${item.link}" class="link" target="_blank">Ver Detalles</a>
            `;
            repoResultsContainer.appendChild(card);
        });
    }

    // --- RENDERIZADO DEL BLOG ---
    function renderBlog(posts) {
        blogPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${post.title}</h3>
                <p><small>${post.date}</small></p>
                <p>${post.summary}</p>
                <a href="${post.link}" class="link">Leer más</a>
            `;
            blogPostsContainer.appendChild(card);
        });
    }

    // --- LÓGICA DE FILTRADO DEL REPOSITORIO ---
    function filterRepository() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedConstruct = constructFilter.value;

        const filteredData = repositoryData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) || item.author.toLowerCase().includes(searchTerm);
            const matchesConstruct = selectedConstruct ? item.construct === selectedConstruct : true;
            return matchesSearch && matchesConstruct;
        });

        renderRepository(filteredData);
    }

    // --- INICIALIZACIÓN ---
    
    // Poblar el filtro de constructos dinámicamente
    const constructs = [...new Set(repositoryData.map(item => item.construct))];
    constructs.sort().forEach(construct => {
        const option = document.createElement('option');
        option.value = construct;
        option.textContent = construct;
        constructFilter.appendChild(option);
    });

    // Añadir listeners a los filtros
    searchInput.addEventListener('keyup', filterRepository);
    constructFilter.addEventListener('change', filterRepository);

    // Carga inicial de datos
    renderRepository(repositoryData);
    renderBlog(blogData);
});
