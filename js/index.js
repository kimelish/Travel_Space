//This function is implemented in index, primarily storing user's choice and redirecting the page to
//search_result page.
function index_search() {
    let stop_name = document.getElementById("stops").value;
    localStorage.setItem('selection', stop_name);
    setTimeout(function () {
        location.href = "search_result.html"
    }, 50);
}