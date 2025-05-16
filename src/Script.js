const dot = document.querySelector(".cursor-dot");
const tail = document.querySelector(".cursor-tail");

document.addEventListener("mousemove", (e) => {
  dot.style.top = `${e.clientY}px`;
  dot.style.left = `${e.clientX}px`;

  tail.style.top = `${e.clientY}px`;
  tail.style.left = `${e.clientX}px`;
});
