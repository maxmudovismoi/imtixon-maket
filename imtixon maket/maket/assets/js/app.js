const inputEl1 = document.querySelector("#food-name");
const inputEl2 = document.querySelector("#food-cost");
const inputEl3 = document.querySelector("#food-photo");
const inputEl4 = document.querySelector("#food-cook");
const inputEl5 = document.querySelector("#food-cafe");
const formEl = document.querySelector("#form");
const resultDiv = document.querySelector("#result-div");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  
  let newEl = document.createElement("div");
  let photoSection = document.createElement("div");
  let infoSection = document.createElement("div");
  let btnSection = document.createElement("div");
  let removeBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let endBtn = document.createElement("button");

  let imgElDiv = document.createElement("img");
  imgElDiv.src = inputEl3.value;
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  

  newEl.classList.add("example");
  photoSection.classList.add("photo-div");
  infoSection.classList.add("info-div", "info-style");
  btnSection.classList.add("btn-divv");
  removeBtn.classList.add("btn", "btn-danger", "removeButton");
  editBtn.classList.add("btn", "btn-warning");
  endBtn.classList.add("btn", "btn-success");

  
  resultDiv.prepend(newEl);
  newEl.appendChild(photoSection);
  newEl.appendChild(infoSection);
  newEl.appendChild(btnSection);
  photoSection.appendChild(imgElDiv);
  infoSection.appendChild(p1);
  infoSection.appendChild(p2);
  infoSection.appendChild(p3);
  infoSection.appendChild(p4);
  imgElDiv.classList.add("photo-style");
  btnSection.appendChild(removeBtn);
  btnSection.appendChild(editBtn);
  btnSection.appendChild(endBtn);

  
  p1.innerHTML = `Taom nomi: ${inputEl1.value}.`;
  p2.innerHTML = `Taom narxi: $${inputEl2.value}.`;
  p3.innerHTML = `Taom oshpaz: ${inputEl4.value}.`;
  p4.innerHTML = `Taom restorani: ${inputEl5.value}.`;
  removeBtn.textContent = "Taomni o'chirish";
  editBtn.textContent = new Date().toLocaleDateString();
  endBtn.textContent = "Taom tugadi";

  
  inputEl1.value = "";
  inputEl2.value = "";
  inputEl3.value = "";
  inputEl4.value = "";
  inputEl5.value = "";
});


resultDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    e.target.parentElement.parentElement.remove();
  }
});


resultDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-success")) {
    e.target.parentElement.parentElement.classList.toggle("example2");
  }
});
