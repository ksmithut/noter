const STORAGE_KEY = "data";
const content = document.getElementById("content");

function debounce(fn, wait = 0) {
  let timer;
  function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, args);
    }, wait);
  }
  return debounced;
}

const saveData = debounce(data => {
  window.localStorage.setItem(STORAGE_KEY, data);
}, 300);

content.value = window.localStorage.getItem(STORAGE_KEY);

content.addEventListener("input", event => {
  saveData(event.target.value);
});

window.addEventListener("storage", event => {
  if (event.key === STORAGE_KEY) {
    content.value = event.newValue;
  }
});
