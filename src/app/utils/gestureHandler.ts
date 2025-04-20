export function handleSwipeGesture(element: HTMLElement, callback: () => void) {
  let startX = 0;

  element.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  element.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      callback();
    }
  });
}