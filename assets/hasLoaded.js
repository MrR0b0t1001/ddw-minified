document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll(".grid-container .box-container img");
  e.forEach((e) => {
    e.complete
      ? imageLoaded(e)
      : (e.addEventListener("load", function () {
          imageLoaded(e);
        }),
        e.addEventListener("error", function () {
          console.error("Image failed to load:", e.src);
        }));
  });
});
function imageLoaded(e) {
  let t = e.closest(".box");
  t.querySelectorAll(".skeleton-text").forEach((t) => {
    (t.style.display = "none"), e.classList.remove("skeleton");
  }),
    t.querySelectorAll(".actual-text").forEach((e) => {
      e.style.display = "block";
    });
}
