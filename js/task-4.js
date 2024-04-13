const form = document.querySelector('form');
const emailName = document.querySelector('input[name="email"]');
const passwordName = document.querySelector('input[name="password"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailName.value.trim() === '' || passwordName.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const user = {
      email: emailName.value.trim(),
      password: passwordName.value.trim(),
    };

    console.log(user);
    form.reset();
  }
});
