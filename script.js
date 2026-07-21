document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".hero button");
  const input = document.querySelector(".hero input");

  button.addEventListener("click", function () {
    if (input.value.trim() === "") {
      alert("Please enter something to search.");
    } else {
      alert("You searched for: " + input.value);
    }
  });

});
const images = [
"https://picsum.photos/900/350?random=1",
"https://picsum.photos/900/350?random=2",
"https://picsum.photos/900/350?random=3",
"https://picsum.photos/900/350?random=4",
"https://picsum.photos/900/350?random=5"
];

let index = 0;
const slider = document.getElementById("sliderImage");

setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, 3000);