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
// Declaring variables for function to send feedback to database
let theFeedback = ""
var database = firebase.database();
var feedbackRef = database.ref('feedback');
function addFeedback(){  //Code that sends the users feedback to the database
    theFeedback = document.getElementById("usersFeedback").value;
    var theirFeedback = {
        userFeedback: theFeedback
    }
    feedbackRef.push(theirFeedback);
}
function showThankYou(){  //Code which will let users know the feedback was received
    alert("Thank you for your feedback!")
}
function clickSubmit(){  //Function that calls the functions to send feedback and show a thank you
    addFeedback();
    showThankYou();
}