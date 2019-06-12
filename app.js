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

$("form").on("submit", function(event) {
    event.preventDefault();
    var name = $(".name").val().trim();
    var role = $(".role").val().trim();
    var startDate = $(".start-date").val().trim();
    var rate = $(".rate").val().trim();
    var formObject = {
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    }
    database.ref().push(formObject);
    $(".name").val("");
    $()
})

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    var tableRow = $("<tr>");
    var newName = $("<td>").text(snapshot.val().name);
    var newRole = $("<td>").text(snapshot.val().row);
    var startDate = $("<td>").text(snapshot.val().startDate);
    var rate = $("<td>").text(snapshot.val().rate);
    tableRow.append(newName).append(newRole).append(startDate).append(rate)
    //var tax = $("<tr>").text()
    $("table").append(tableRow);
})