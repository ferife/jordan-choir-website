import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    // CarouselCaption,
} from 'reactstrap';
import { useGetCarouselItemsQuery } from './carouselSlice';

// const items = [
//     {
//         id: 1,
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         src: 'http://localhost:3002/image-1.jpg',
//     },
//     {
//         id: 2,
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         src: 'http://localhost:3002/image-2.jpg',
//     },
//     {
//         id: 3,
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         src: 'http://localhost:3002/image-3.jpg',
//     },
// ];

const PicCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === data.length - 1 
            ? 0 
            : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 
            ? data.length - 1 
            : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // };

    const {
        data,
        isLoading,
        isError,
    } = useGetCarouselItemsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <p>Server error. Try again later.</p>

    const slides = data.map((item) => {
        return (
            <CarouselItem
                className="custom-tag flex justify-content-center"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img className='frf-center-carousel-item' src={item.image} alt={item.name} />
                {/* <CarouselCaption
                    className="text-danger"
                    captionText={item.caption}
                    captionHeader={item.caption}
                /> */}
            </CarouselItem>
        );
    });

    return (
        <>
            <style>
                {`.custom-tag {
                    max-width: 100%;
                    height: 500px;
                    background: black;
                }`}
            </style>
            <Carousel activeIndex={activeIndex} next={next} previous={previous} slide={false}>
                {/* <CarouselIndicators
                    items={data}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                /> */}
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </>
    );
}

export default PicCarousel;