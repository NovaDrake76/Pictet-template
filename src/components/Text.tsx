import React, { useState, useEffect, useRef } from 'react';

interface Props {
    title: string;
    content: any;
}

const MainTextComponent: React.FC<Props> = ({ title, content }) => {
    const [isSticky, setSticky] = useState(false);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [originalTitleTop, setOriginalTitleTop] = useState<number | null>(null);

    const handleScroll = () => {
        if (window.innerWidth <= 768) {
            setSticky(false);
            return; // Exit early if it's a mobile view
        }

        if (titleRef.current && containerRef.current) {
            const titleTop = titleRef.current.getBoundingClientRect().top;
            const containerBottom = containerRef.current.getBoundingClientRect().bottom;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (!originalTitleTop && titleTop > 0) {
                setOriginalTitleTop(scrollTop + titleTop);
            }
            if (originalTitleTop && scrollTop + 100 >= originalTitleTop && containerBottom >= 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [originalTitleTop]);

    return (
        <div ref={containerRef} className="w-full flex justify-center bg-white">
            <div className="w-full max-w-[1920px] border-t border-gray-400">
                <div className="flex p-4 md:p-16 flex-col xl:flex-row">
                    <div className="relative md:w-[25%]" style={isSticky ? { minHeight: '100px' } : {}}>
                        <div
                            ref={titleRef}
                            className={`text-3xl pr-4 ${isSticky ? 'absolute top-0' : ''}`}
                            style={isSticky ? { zIndex: 10, width: window.innerWidth < 768 ? '100%' : '25%', position: 'fixed', top: '100px' } : {}}
                        >
                            {title}
                        </div>
                    </div>

                    <div className="w-[8.33%]" />
                    <div className="flex-1">
                        {typeof content === 'function' ? content() : content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTextComponent;
