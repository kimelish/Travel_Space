//This function is implemented in search_result page, primarily storing user's choice and redirecting the page to
//search_result page.
function search() {
    let stop_name = document.getElementById("stops").value;
    localStorage.setItem('selection', stop_name);
    setTimeout(function(){location.href = "search_result.html"},50);
}
//This function is implemented for search after user logged-in, primarily storing user's choice and redirecting the
//page to search_result page.
function login_search() {
    let stop_name = document.getElementById("stops").value;
    localStorage.setItem('selection', stop_name);
    setTimeout(function(){location.href = "logged_in.html"},50)
}

//This function is for the report sign to direct page to capacity_report page after click.
function report(){
    location.href = "capacity_report.html"
}

//Read the reported status image from firebase, store the path in localStorage, and source it.
function load_status() {
    let status_deRef = firebase.database().ref("report/" + searched_station).child("reportImage");
    let report_status = status_deRef.once(
        "value",                 // event to read static snapshot of db at initial call, and future chg
        function (snap) {        // event callback receives snapshot
            let image_path = "image/" + snap.val();
            localStorage.setItem("image", image_path);
            localStorage.setItem("status", image_path);
        });
}

//Use the image path as the reference of status, and convert to good, okay, or bad for retrieving data from firebase.
function status_to_message(path) {
    if (path == "image/status1.png") {
        return "good"
    } else if (path == "image/status2.png") {
        return "good"
    } else if (path == "image/status3.png") {
        return "okay"
    } else if (path == "image/status4.png"){
        return "okay"
    } else if (path == "image/status5.png"){
        return "bad"
    }
}

//Read message from firebase, and print it out in html.
function display_message(message) {
    var print_message = document.getElementById("message");
    var message_deRef = firebase.database().ref("message/").child(status_to_message(message));
    var message_to_print = message_deRef.once(
    "value",               //event to read static snapshot of db at initial call, and future chg
    function(snap){        // event callback receives snapshot
        print_message.innerText = snap.val();
    });
}

//Source image for report image and give it an action.
function report_pole() {
    document.getElementById("report").src = "image/report.png";
    document.getElementById("report").onclick = report;
}

//Once user select a station from the dropdown list, the value of that station was stored in localstorage. This part
// makes sure that the dropdown list in search_result page will get the result from localstorage.
let searched_station = localStorage.getItem("selection");
console.log(searched_station);
document.getElementById("stops").value = searched_station;

//Retrieve the reported time.
var output = document.getElementById("time");
var deRef = firebase.database().ref("report/"+searched_station).child("reportTime");
var time = deRef.once(
    "value",               //event to read static snapshot of db at initial call, and future chg
    function(snap){        // event callback receives snapshot
        output.innerText = "Last reported time: " + snap.val();
    });

//Read status from database and get it from localStorage, and then display search result.
setTimeout(load_status, 600);
setTimeout(function() {
    let image_path = localStorage.getItem("image");
    let message = localStorage.getItem("status");
    document.getElementById("bus").src = image_path;
    report_pole();
    display_message(message);
}, 910);



