// KONFIGURACJA FIREBASE - wstaw swoje dane
const firebaseConfig = {
  apiKey: "1:346817626388:web:4392536d75afabad728201",
  authDomain: "gvideo-e3622.firebaseapp.com",
  projectId: "gvideo-e3622",
  storageBucket: "gvideo-e3622.appspot.com",
  messagingSenderId: "346817626388",
  appId: "1:346817626388:web:4392536d75afabad728201"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginError = document.getElementById('loginError');
const loginSuccess = document.getElementById('loginSuccess');

// LOGOWANIE
function login() {
  loginError.textContent = '';
  loginSuccess.textContent = '';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    loginError.textContent = 'Wpisz email i hasło!';
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      loginSuccess.textContent = 'Zalogowano pomyślnie!';
      loginError.textContent = '';
    })
    .catch(err => {
      loginError.textContent = 'Błąd logowania: ' + err.message;
      loginSuccess.textContent = '';
    });
}

// REJESTRACJA
function register() {
  loginError.textContent = '';
  loginSuccess.textContent = '';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    loginError.textContent = 'Wpisz email i hasło!';
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      loginSuccess.textContent = 'Konto zostało utworzone! Możesz teraz się zalogować.';
      loginError.textContent = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    })
    .catch(err => {
      loginError.textContent = 'Błąd rejestracji: ' + err.message;
      loginSuccess.textContent = '';
    });
}

// PODGLĄD AKTUALNEGO UŻYTKOWNIKA
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('Zalogowany użytkownik:', user.email);
  } else {
    console.log('Brak zalogowanego użytkownika.');
  }
});
