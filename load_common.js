// load_common.js

// Universal function to load HTML content
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.error(`Error loading ${elementId}: ${response.status}`);
                return `<p>Error loading content.</p>`;
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(elementId);
            if (container) {
                container.innerHTML = data;
                // Once header is loaded, attach events
                if (elementId === 'header-placeholder') {
                    attachEventListeners();
                }
            }
        })
        .catch(error => console.error('Fetch error:', error));
}

// Function to define and attach all common event listeners
function attachEventListeners() {
    // Get the dynamically loaded elements
    const searchOverlay = document.getElementById('searchOverlay');
    const sideMenu = document.getElementById('sideMenu');

    // Define the global functions used by the inline 'onclick' attributes (in common_header.html)
    window.toggleSearch = function() {
        if (searchOverlay) {
            searchOverlay.querySelector('input').placeholder = "Search our tutorials, e.g. HTML"; 
            searchOverlay.style.display = (searchOverlay.style.display === 'flex') ? 'none' : 'flex';
            if (searchOverlay.style.display === 'flex') {
                searchOverlay.querySelector('input').focus();
            }
        }
    }
    
    window.openFullMenu = function() {
        if (sideMenu) sideMenu.style.width = "250px"; 
    }
    
    window.closeFullMenu = function() {
        if (sideMenu) sideMenu.style.width = "0"; 
    }
}

// Start loading the elements when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // NOTE: Adjust the paths based on your file structure!
    // Assuming both common files are in the parent directory (or same level if the main page is also at root)
    loadHTML('common_header.html', 'header-placeholder'); 
    loadHTML('common_footer.html', 'footer-placeholder'); 
});
