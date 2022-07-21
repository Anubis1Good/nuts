let interval
function slider() {
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");

  let slides = document.querySelector(".slides");
  let segment = document.querySelector(".segment");
  let line = document.querySelector('.line').clientWidth
  let slidesWidth = slides.offsetWidth;
  let maxCount = (300 * 24) / slidesWidth;
  let segmentStep = line/maxCount;
  let count = 0;
  let delta = 0;
  let deltaSeg = 0;

  function left() {
    if (count === maxCount - 1) {
      count = -1;
    }
    count++;
    delta = count * (-slidesWidth * 2);
    deltaSeg = count * segmentStep;
    segment.style.marginLeft = deltaSeg + "px";
    slides.style.marginLeft = delta + "px";
  }
  function rigth() {
    if (count === 0) {
      count = maxCount;
      delta = count * (-slidesWidth * 2);
      deltaSeg = count * segmentStep;
    }
    count--;
    delta = count * (-slidesWidth * 2);
    deltaSeg = count * segmentStep;
    segment.style.marginLeft = deltaSeg + "px";
    slides.style.marginLeft = delta + "px";
  }

  btn1.addEventListener("click", rigth);
  btn2.addEventListener("click", left);

  interval = setInterval(left, 4000)
  
}
window.addEventListener('resize', () => {
clearInterval(interval)
slider()} )
slider()
