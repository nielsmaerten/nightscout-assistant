initializeFirebase();

var userEmail = null;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        userEmail = user.email;
        showNightscoutSettings();
    } else {
        initializeFirebaseUI();
    }
});

function showNightscoutSettings() {
    document.getElementById("nightscout-settings").classList.remove("hidden");
    firebase.firestore().collection("users").doc(userEmail).get().then(function (snapshot) {
        if (snapshot.exists) {
            var data = snapshot.data()
            document.getElementById("nightscout-url").value = data.nsUrl;
        }
    })
}

function updateNightscoutSettings(e) {
    e.preventDefault();
    firebase.firestore().collection("users").doc(userEmail).set({
        nsUrl: document.getElementById("nightscout-url").value
    })
        .then(function (e) {
            document.getElementById("status").innerText =
                "Done! Now ask your Google Assistant: 'Hey Google, ask Unofficial Nightscout what my glucose is'"
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
        signInSuccessUrl: 'https://localhost:3000',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: 'https://nielsmaerten.github.io/nightscout-assistant/',
        // Privacy policy url/callback.
        privacyPolicyUrl: function () {
            window.location.assign('https://nielsmaerten.github.io/nightscout-assistant/');
        }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
}