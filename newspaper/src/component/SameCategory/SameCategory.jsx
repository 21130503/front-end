import { useEffect, useRef, useState } from 'react';
import ContentItem from '../content/contentItem.jsx'
import './same.scss'
const SameCategory = ({ array }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [arr,setArr] = useState(array)
    const slideRef = useRef();

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % array?.length);
        }, 1000);

        return () => clearInterval(slideInterval);
    }, [array.length]);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = ` translateX(-${slideIndex *293}px )`
            slideRef.current.style.transition = 'transform 0.5s ease-in-out';
            

        }
        
    }, [slideIndex]);

    return (
        <div className="same-category mt-8 px-4 py-8 w-full overflow-hidden">
            <div className='top flex w-full'>
                <h1 className='uppercase text-white text-2xl font-semibold'>Cùng chuyên mục</h1>
                <div className='swiper-pagination flex-1 flex gap-2 justify-end'>
                    {array.map((_, index) => (
                        <div
                            key={index}
                            className={`bullet cursor-pointer ${index === slideIndex ? 'active' : ''}`}
                            onClick={() => setSlideIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
            <div ref={slideRef} className="body flex gap-1">
                {array.length > 0 ? (
                    arr.map((item, index) => (
                        <ContentItem dependence= {true} key={index} item={item}  display='block' w='245px' h='170px' showDescription={false} />
                    ))
                ) : (
                    <p className='text-white'>No items available</p>
                )}
            </div>
        </div>
    );
};

export default SameCategory;