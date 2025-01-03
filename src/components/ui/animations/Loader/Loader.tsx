import { useLoader } from './LoaderContext';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LineReveal from '../LineReveal/LineReveal';

export default function Loader() {
    const { isLoading, setIsLoading, setIsLoadingCompleted }    = useLoader();
    const lenis                                                 = useSmoothScrollingControl();
    const timerRef                                              = useRef<number | null>(null);

    useEffect(() => {
        timerRef.current = window.setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // Nettoyage lors du démontage ou si l'effet est réexécuté
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null; // Réinitialiser la référence
            }
        };
    }, [setIsLoading]);

    useEffect(() => {
        lenis?.stop();
        document.documentElement.style.overflowY = 'hidden';
    }, [lenis]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onAnimationComplete={() => {
                        setIsLoadingCompleted(true);
                        lenis?.start();
                        document.documentElement.style.overflowY = 'auto';
                    }}
                >
                    <LineReveal delay={0.1}>
                        <span>CT.</span>
                    </LineReveal>
                </motion.div>
            )}
        </AnimatePresence>
    )
}