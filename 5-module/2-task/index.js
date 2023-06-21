function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  
  btn.addEventListener('click', textHider);
  function textHider() {
    text.hidden =!text.hidden;
  }
  
}
