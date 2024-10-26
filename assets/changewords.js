const words = ["Union", "Event", "Special Day", "Wedding"];
let currentIndex = 0;
const textElement = document.querySelector(".text-4");
function changeWord() {
  (textElement.textContent = words[currentIndex]),
    (currentIndex = (currentIndex + 1) % words.length),
    setTimeout(() => {}, 3500);
}
setInterval(changeWord, 5e3);
