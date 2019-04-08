// Initialize Firebase
var config = {
apiKey: "AIzaSyBRhEm0WFOVmSqcRx80650G7KhE1q58o5A",
authDomain: "travel-space-9f0a2.firebaseapp.com",
databaseURL: "https://travel-space-9f0a2.firebaseio.com",
projectId: "travel-space-9f0a2",
storageBucket: "travel-space-9f0a2.appspot.com",
messagingSenderId: "738064646445"
};
firebase.initializeApp(config);
//Code for handling rewards point distribution upon completing a report
localStorage.setItem("isReported", false);
//Five functions for managing the changing of the search results page image result
    function changeToVeryCrowdedImage(){
        let reportTime = new Date()  //Take time of report
        var station = document.getElementById("stops").value;  //Take value of station name for updating database
        localStorage.setItem('isReported', 'true');  //Set for the logged in user that they have reported,
                                                     //therefore should get points
        var promise = firebase.database().ref("report/" + station).set({    //Block of code updates database with image name and time
            reportImage: "status5.png", reportTime: reportTime.toString()
        });
        promise.then(function() {                        //Changes page upon completing report
            window.location.href="search_result.html";
        })
    }
    function changeToCrowdedImage(){
        let reportTime = new Date()
        var station = document.getElementById("stops").value;
        localStorage.setItem("isReported", "true");
        var promise = firebase.database().ref("report/" + station).set({
            reportImage: "status4.png", reportTime: reportTime.toString()
        });
        promise.then(function() {
            window.location.href="search_result.html";
        })
    }
    function changeToOkayImage(){
        let reportTime = new Date()
        var station = document.getElementById("stops").value;
        localStorage.setItem("isReported", "true");
        var promise = firebase.database().ref("report/" + station).set({
            reportImage: "status3.png", reportTime: reportTime.toString()
        });
        promise.then(function() {
            window.location.href="search_result.html";
        })
    }
    function changeToRoomyImage(){
        let reportTime = new Date()
        var station = document.getElementById("stops").value;
        localStorage.setItem("isReported", "true");
        var promise = firebase.database().ref("report/" + station).set({
            reportImage: "status2.png", reportTime: reportTime.toString()
        });
        promise.then(function() {
            window.location.href="search_result.html";
        })
    }
    function changeToVeryRoomyImage(){
        let reportTime = new Date()
        var station = document.getElementById("stops").value;
        localStorage.setItem("isReported", "true");
        var promise = firebase.database().ref("report/" + station).set({
            reportImage: "status1.png", reportTime: reportTime.toString()
        });
        promise.then(function() {
            window.location.href="search_result.html";
        })
    }