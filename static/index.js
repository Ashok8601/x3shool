function toggleSearch() {
      const searchOverlay = document.getElementById('searchOverlay');
      // Change the text based on the language preference
      searchOverlay.querySelector('input').placeholder = "Search our courses..."; 
      searchOverlay.style.display = (searchOverlay.style.display === 'flex') ? 'none' : 'flex';
      if (searchOverlay.style.display === 'flex') {
        searchOverlay.querySelector('input').focus();
      }
    }
    
    // JAVASCRIPT FUNCTIONS TO OPEN/CLOSE THE SIDE MENU
    function openFullMenu() {
        document.getElementById("sideMenu").style.width = "250px"; // Open the side menu
    }
    
    function closeFullMenu() {
        document.getElementById("sideMenu").style.width = "0"; // Close the side menu
    }
   
