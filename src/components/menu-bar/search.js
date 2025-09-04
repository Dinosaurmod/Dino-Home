$(document).ready(function(){
    function performSearch() {
        var searchQuery = $('#searchbar-searchInput').val();
        console.log('Search Query:', searchQuery);
        window.open(`https://penguinmod.com/search?q=${searchQuery}`)
    }

    $('#searchbar-searchIcon').click(function(){
        performSearch();
    });

    $('#searchbar-searchInput').keypress(function(e){
        if(e.which === 13){
            performSearch();
        }
    });
});