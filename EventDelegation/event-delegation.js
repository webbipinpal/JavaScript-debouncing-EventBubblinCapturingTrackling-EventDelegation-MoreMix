
// document.querySelector('#category').addEventListener('click', (e) => {
//   console.log(e.target.id);
//   window.location.href = "/" + e.target.id
// });

document.querySelector('#form').addEventListener('keyup', (e) => {
  console.log(e.target.dataset);
  if(e.target.dataset.uppercase !== undefined){
     e.target.value = e.target.value.toUpperCase();
  }
});