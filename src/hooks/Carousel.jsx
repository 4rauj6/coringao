import { useState } from "react";

function useCarousel(itemsLength) {
  const [currentItem, setCurrentItem] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prevItem = () => {
    setCurrentItem((changeIndex) =>
      changeIndex === 0 ? itemsLength - 1 : changeIndex - 1,
    );
  };

  const nextItem = () => {
    setCurrentItem((changeIndex) => (changeIndex + 1) % itemsLength);
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleMoves = (event) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStart - touchEnd;
    const minSwiperDist = 50;

    if (distance > minSwiperDist) {
      nextItem();
    } else if (distance < -minSwiperDist) {
      prevItem();
    }
  };

  return {
    currentItem,
    prevItem,
    nextItem,
    handleTouchStart,
    handleMoves,
    handleTouchEnd,
  };
}

export default useCarousel;
