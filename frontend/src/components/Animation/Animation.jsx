import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/svgs/Animation - 1700224007211.json';
import './animation.css'

const Animation = () => {
    const lottieRef = useRef(null);

    useEffect(() => {
     
        handleResize();
  
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        if (lottieRef.current) {
            lottieRef.current.parentContainer.style.width = '100%';
            lottieRef.current.resize();
        }
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
                isClickToPauseDisabled={true} 
                eventListeners={[
                    {
                        eventName: 'loaded',
                        callback: () => {
                        
                            lottieRef.current = window.lottie;
                        },
                    },
                ]}
            />
        </div>
    );
};

export default Animation;
