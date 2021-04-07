var firebaseConfig = {
    apiKey: "AIzaSyDu6qrIMmu-e_bBfFA0Dw7aWDgF4z9_knk",
    authDomain: "online-token-booking-system.firebaseapp.com",
    projectId: "online-token-booking-system",
    storageBucket: "online-token-booking-system.appspot.com",
    messagingSenderId: "562163637421",
    appId: "1:562163637421:web:04c9b2dd44612fe1fdfa24",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const auth = firebase.auth();
/*ui.start('#firebaseui-auth-container', {
    signInOptions: [
            firebase.auth.EmailAuthProvider.longclawcalendar
        ]
        // Other config options...
});
*/
function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    /*firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });*/
    var flag = 0;
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    /* if (promise.catch(e => alert(e.message))) {
         flag = 1;
     } else {
         alert("Signed Up Sucessfull!!!");
         window.open("signin.html");
     }*/
    promise.then(
        function(value) {
            alert("Signed Up Sucessfull!!!");
            window.open("signin page.html");
        },

        function(error) {
            alert(error);
        }
    )
}

function signIn() {

    var email = document.getElementById("email1");
    var password = document.getElementById("password1");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    promise.then(
        function(value) {

            window.open("homepage after signin.html");
        },
    )
}


function signOut() {

    auth.signOut();
    alert("Signed Out");
    window.open("homepaget.html");

}
var button = document.getElementById("sign-up-tab"),
    count = 0;

button.onclick = function() {
    firebase.database().ref('count').set(firebase.database.ServerValue.increment(1));
};

firebase.database().ref('count').on('value', function(snapshot) {
    var badge = document.getElementById("snp");
    badge.innerHTML = "Download: " + snapshot.val();
});

function withdrawl() {
    let click = 1;

}