// load_common.js

function loadHTML(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.error(`Error loading ${url}: ${response.status}`);
                document.getElementById(elementId).innerHTML = `<p>Error loading ${elementId}</p>`;
                return "";
            }
            return response.text();
        })
        .then(data => {
            if (data) {
                document.getElementById(elementId).innerHTML = data;
            }
        })
        .catch(error => console.error("Fetch error:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    // Detect whether page is inside /html/ folder or root
    const pathPrefix = window.location.pathname.includes("/html/") ? "../" : "./";

    // ✅ Load the correct header/footer file names
    loadHTML(`${pathPrefix}common_header.html`, "header-placeholder");
    loadHTML(`${pathPrefix}common_footer.html`, "footer-placeholder");

    console.log("Detected prefix:", pathPrefix);
});
