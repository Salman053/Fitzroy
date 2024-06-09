import { useState } from "react";

const images = [
  'https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1',
  'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2',
  'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[40vh] max-w-4xl mx-auto">
      <div className="overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;