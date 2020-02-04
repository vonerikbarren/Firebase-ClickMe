
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWB2YUAc4_7ttTKaYlG-QJdXnU13gbWF4",
  authDomain: "clickme-7ac0d.firebaseapp.com",
  databaseURL: "https://clickme-7ac0d.firebaseio.com",
  projectId: "clickme-7ac0d",
  storageBucket: "clickme-7ac0d.appspot.com",
  messagingSenderId: "707829312759",
  appId: "1:707829312759:web:3390c808a240e68cef37f2",
  measurementId: "G-WE0E5HNNPJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let count = 100;

firebase.database().ref().on("value", function (snapshot) {
  count = snapshot.val().clicks;
  $('#clickValue').html(count);
})

$('#clickButton').on("click", function () {
  count--;
  firebase.database().ref().set({
    clicks: count
  });
})


