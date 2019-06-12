const config = {
    apiKey: "AIzaSyAhjAbxOiJRI78CkPf9_5byVWTYJnFa0eU",
    authDomain: "test-c8c24.firebaseapp.com",
    databaseURL: "https://test-c8c24.firebaseio.com",
    projectId: "test-c8c24",
    storageBucket: "test-c8c24.appspot.com",
    messagingSenderId: "374203114105",
    appId: "1:374203114105:web:4226cba8e86d3641"
};

firebase.initialize(config);
var database = firebase.database();

$(".employer-info").on("submit", function(event) {
    event.preventDefault();
    var name = $(".name").val().trim();
    var role = $(".role").val().trim();
    var startDate = $(".start-date").val().trim();
    var rate = $(".role").val().trim();
    var formObject = {
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    }
    database.ref().push(formObject);
    return false;
})