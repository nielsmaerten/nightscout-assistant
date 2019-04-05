initializeFirebase();

var userEmail = null;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        userEmail = user.email;
        showNightscoutSettings();
    } else {
        document.getElementById("authentication").classList.remove("is-hidden");
        initializeFirebaseUI();
    }
});

function showNightscoutSettings() {
    document.getElementById("nightscout-settings").classList.remove("is-hidden");
    firebase.firestore().collection("users").doc(userEmail).get().then(function (snapshot) {
        if (snapshot.exists) {
            var data = snapshot.data()
            document.getElementById("nightscout-url").value = data.nsUrl;
            document.getElementById("nightscout-unit").value = data.unit;
        }
    })
}

function updateNightscoutSettings(e) {
    e.preventDefault();
    firebase.firestore().collection("users").doc(userEmail).set({
        nsUrl: document.getElementById("nightscout-url").value,
        unit: document.getElementById("nightscout-unit").value
    })
        .then(function (e) {
            document.getElementById("success").classList.remove("is-hidden")
        })
    return false;
}

function initializeFirebase() {
    var config = {
        apiKey: "AIzaSyArdp0nQPWy--mMYCNIuR5WfAiaJBylAOk",
        authDomain: "nightscout-974f6.firebaseapp.com",
        databaseURL: "https://nightscout-974f6.firebaseio.com",
        projectId: "nightscout-974f6",
        storageBucket: "nightscout-974f6.appspot.com",
        messagingSenderId: "348868123018"
    };
    firebase.initializeApp(config);
}

function initializeFirebaseUI() {
    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: 'https://nielsmaerten.github.io/nightscout-assistant',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: "https://nielsmaerten.github.io/nightscout-assistant/terms.html",
        // Privacy policy url/callback.
        privacyPolicyUrl: "https://nielsmaerten.github.io/nightscout-assistant/terms.html"
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
}

function signOut() {
    firebase.auth().signOut().then(function() {
        window.location.reload();
    });
}