// Firebase configuration
const firebaseConfig = {
  apiKey: "1:346817626388:web:4392536d75afabad728201",
  authDomain: "gvideo-e3622.firebaseapp.com",
  projectId: "gvideo-e3622",
  storageBucket: "gvideo-e3622.appspot.com",
  messagingSenderId: "346817626388",
  appId: "1:346817626388:web:4392536d75afabad728201"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginError = document.getElementById('loginError');
const loginSuccess = document.getElementById('loginSuccess');

loginBtn.addEventListener('click', () => {
  loginError.textContent = '';
  loginSuccess.textContent = '';
  auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then((userCredential) => {
      loginSuccess.textContent = 'Zalogowano pomyślnie!';
    })
    .catch((error) => {
      loginError.textContent = 'Błąd logowania: ' + error.message;
    });
});

registerBtn.addEventListener('click', () => {
  loginError.textContent = '';
  loginSuccess.textContent = '';
  auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then((userCredential) => {
      loginSuccess.textContent = 'Rejestracja zakończona sukcesem!';
    })
    .catch((error) => {
      loginError.textContent = 'Błąd rejestracji: ' + error.message;
    });
})
