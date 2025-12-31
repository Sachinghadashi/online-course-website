function signup() {
  auth.createUserWithEmailAndPassword(
    email.value, password.value
  ).then(() => {
    window.location.href = "courses.html";
  });
}

function login() {
  auth.signInWithEmailAndPassword(
    email.value, password.value
  ).then(() => {
    window.location.href = "courses.html";
  });
}
