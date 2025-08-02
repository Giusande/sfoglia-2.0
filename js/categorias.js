const container = document.querySelector(".dishes-list");
const pratos = container.querySelectorAll(".menu-item");

if (pratos.length === 1) {
  container.classList.add("dishes-list-um");
} else if (pratos.length === 2) {
  container.classList.add("dishes-list-dois");
} else if (pratos.length === 3) {
  container.classList.add("dishes-list");
} else if (pratos.length > 3) {
  container.classList.add("dishes-list-tree");
}
