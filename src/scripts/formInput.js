export default function formInput () {
  const input = document.querySelectorAll('.form__input');
  const filled = 'form__input--filled';

  input.forEach(item => {
    item.addEventListener('change', () => {
      if (item.value.length) {
        item.classList.add(filled);
      } else {
        item.classList.remove(filled);
      }
    });
  });
}