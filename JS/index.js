// Popup //

const modal= document.querySelector(".overlay");

setTimeout(function() { 
  modal.classList.add("show-modal");
}, 2000);

document.querySelector(".X").addEventListener("click", () => {
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
})

//

