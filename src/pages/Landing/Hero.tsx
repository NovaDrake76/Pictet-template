import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative mt-20">
            <div className='flex w-screen justify-center'>
                <div className="relative flex flex-col w-full max-w-[1920px] z-10">
                    <div className="max-w-screen-xl bg-white px-4 md:px-16">

                        <div className="flex flex-col mt-20 mb-40 gap-4">
                            <h1 className="text-3xl md:text-5xl ">We find exceptional talent.</h1>
                            <Link to="/our-approach" className='text-[#804940] underline'>Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[440px] ">
                <div
                    className="w-screen h-[440px] absolute top-0 left-0"
                    style={{
                        backgroundImage: 'url(hero-image.png)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        zIndex: -1,
                        transform: `translateY(${offsetY * 0.2}px)`
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;