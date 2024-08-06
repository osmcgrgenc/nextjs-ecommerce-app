import { useState } from 'react';
import Image from 'next/image';

const sliderImages = [
    { id: 1, src: '/images/slider1.jpg', alt: 'Slider 1' },
    { id: 2, src: '/images/slider2.jpg', alt: 'Slider 2' },
    { id: 3, src: '/images/slider3.jpg', alt: 'Slider 3' },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent(current === 0 ? sliderImages.length - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent(current === sliderImages.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="slider">
            <div className="slider-images">
                <Image
                    src={sliderImages[current].src}
                    alt={sliderImages[current].alt}
                    layout="responsive"
                    width={1000}
                    height={400}
                />
            </div>
            <button onClick={handlePrev} className="slider-button prev">Prev</button>
            <button onClick={handleNext} className="slider-button next">Next</button>
        </div>
    );
}
