function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', btnHider);
  function btnHider() {
    btn.hidden = true;
  }
}
