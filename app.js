const config = {
    apiKey: "AIzaSyAhjAbxOiJRI78CkPf9_5byVWTYJnFa0eU",
    authDomain: "test-c8c24.firebaseapp.com",
    databaseURL: "https://test-c8c24.firebaseio.com",
    projectId: "test-c8c24",
    storageBucket: "test-c8c24.appspot.com",
    messagingSenderId: "374203114105",
    appId: "1:374203114105:web:4226cba8e86d3641"
};

firebase.initializeApp(config);
var database = firebase.database();

var monthsWorked;

$("form").on("submit", function(event) {
    //prevent page from refreshing
    event.preventDefault();
    //get the values from form input
    var name = $(".name").val().trim();
    var role = $(".role").val().trim();
    var startDate = $(".start-date").val().trim();
    var rate = $(".rate").val().trim();
    //place the values obtained in an object
    var formObject = {
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    }
    //push the object into the database
    database.ref().push(formObject);
    //clear value from forms
    $(".name").val("");
    $(".role").val("");
    $(".start-date").val("");
    $(".rate").val("");
})

//update every time an object is added
database.ref().on("child_added", function(snapshot) {
    //difference between current time and start date
    monthsWorked = moment().diff(moment(snapshot.val().startDate), "months");
    //create row elements with the data from the form, pulling the info
    //from the database
    var tableRow = $("<tr>");
    var newName = $("<td>").text(snapshot.val().name);
    var newRole = $("<td>").text(snapshot.val().role);
    var startDate = $("<td>").text(snapshot.val().startDate);
    var months = $("<td>").text(monthsWorked);
    var rate = $("<td>").text(snapshot.val().rate);
    //snapshot.val().rate is a string, so need to parse it into a number
    var billedNumber = monthsWorked * parseInt(snapshot.val().rate);
    var totalBilled = $("<td>").text(billedNumber);
    //append to html
    tableRow.append(newName).append(newRole).append(startDate).append(months).append(rate).append(totalBilled);
    $("table").append(tableRow);
})