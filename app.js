const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.opacity = "1";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
