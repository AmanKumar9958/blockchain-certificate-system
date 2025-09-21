import { useState, useEffect, useRef } from 'react';

// Yeh hook batata hai ki koi component screen par dikh raha hai ya nahi.
export const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Agar element screen par hai, toh isVisible ko true set karein
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Animation ko har baar scroll karne par trigger karne ke liye, isse false set karein
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Jab 10% element dikhe tab trigger ho
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isVisible];
};
