'use client';
import { motion, useMotionValue, useAnimation, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Review {
    text: string;
    name: string;
}

const Testimonials: React.FC = () => {
    const reviews: Review[] = [
        { text: "Najbolja hrana u gradu! Osoblje ljubazno, ambijent topao.", name: "Ana M." },
        { text: "Ketering su nam radili za venčanje – sve je bilo savršeno!", name: "Milan i Jelena" },
        { text: "Brza dostava i hrana topla! Preporuka svima.", name: "Stefan R." },
        { text: "Porcije su obilne, a kvalitet besprekoran.", name: "Marija L." },
        { text: "Uvek sveže i ukusno, poručujemo redovno!", name: "Petar T." },
        { text: "Predivan enterijer i usluga za svaku pohvalu!", name: "Ivana G." },
    ];

    const carouselRef = useRef<HTMLDivElement>(null);
    const innerCarouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0); 
    const [width, setWidth] = useState(0); 
    const isHovering = useRef(false);

    useEffect(() => {
        const calculateWidth = () => {
            if (carouselRef.current && innerCarouselRef.current) {
                const totalContentWidth = innerCarouselRef.current.scrollWidth;
                const viewportWidth = carouselRef.current.offsetWidth;
                setWidth(totalContentWidth - viewportWidth);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, []); 

    useEffect(() => {
        let animation: ReturnType<typeof animate> | null = null;
        const startAutoScroll = () => {
            if (width > 0 && innerCarouselRef.current) {
                const totalScrollDistance = innerCarouselRef.current.scrollWidth / 2; 
                const duration = totalScrollDistance * 0.01; 

                if (animation) animation.stop(); 
                animation = animate(x, -totalScrollDistance, { 
                type: "tween",
                duration: duration, 
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                });
            }
        };

        startAutoScroll();
        return () => {
            if (animation) animation.stop();
        };
    }, [width, x]); 

    const handleMouseEnter = () => {
        isHovering.current = true;
        x.stop(); // Zaustavi automatsko pomeranje
    };

    const handleMouseLeave = () => {
        isHovering.current = false;
        if (width > 0 && innerCarouselRef.current) {
            const totalScrollDistance = innerCarouselRef.current.scrollWidth / 2; 
            const duration = totalScrollDistance * 0.01; 
            animate(x, -totalScrollDistance, { 
                type: "tween",
                duration: duration, 
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            });
        }
    };


    return (
        <section className="bg-white max-w-screen overflow-hidden py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold italic">
                    Utisci naših gostiju
                </h2>
                <p className="text-sm text-gray-500 mb-4">Prevucite mišem ili prstom da vidite više!</p>
            </div>

            <motion.div
                ref={carouselRef}
                className="overflow-hidden" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <motion.div
                    ref={innerCarouselRef}
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }} 
                    style={{ x }} 
                    className="flex space-x-6 w-fit cursor-grab active:cursor-grabbing px-6" 
                    whileTap={{ cursor: "grabbing" }}
                >
                    {/* Dupliramo listu recenzija za beskonačno pomeranje */}
                    {[...reviews, ...reviews].map((review, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[300px] md:min-w-[350px] bg-gray-50 p-6 rounded-xl shadow text-left shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <p className="italic text-gray-700">"{review.text}"</p>
                        <h4 className="mt-4 font-semibold">— {review.name}</h4>
                    </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
export default Testimonials;