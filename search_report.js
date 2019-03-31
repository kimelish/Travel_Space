function search() {
    let stop_name = document.getElementById("stops").value;
    localStorage.setItem('selection', stop_name);
    console.log(stop_name);
    setTimeout(function(){location.href = "search_result.html"},50)
}

function login_search() {
    let stop_name = document.getElementById("stops").value;
    localStorage.setItem('selection', stop_name);
    console.log(stop_name);
    setTimeout(function(){location.href = "logged_in.html"},50)
}

function report(){
    location.href = "capacity_report.html"
}

let searched_station = localStorage.getItem("selection");
console.log(searched_station);
document.getElementById("stops").value = searched_station;