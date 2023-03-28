const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader")

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.toggle("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})

