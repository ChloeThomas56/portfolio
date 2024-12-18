import { useRouter } from 'next/router';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling';
import { usePageTransition } from './PageTransitionContext';
import { useLoader } from '../Loader/LoaderContext';
import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const router                        = useRouter();
    const lenis                         = useSmoothScrollingControl();
    const { setIsTransitionCompleted }  = usePageTransition();
    const { isLoading }                 = useLoader();

    useEffect(() => {
        if ('scrollRestoration' in window.history)
            window.history.scrollRestoration = 'manual';

        const handlePopState = (state: any) => {
            state.options.scroll = false;
            return true;
        };

        router.beforePopState(handlePopState);

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    const transition: Variants = {
        initial: {
            opacity: 0, 
            y: 100
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.66, 1] }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <motion.div
            variants={transition}
            initial="initial"
            animate="enter"
            exit="exit"
            onAnimationStart={(variant) => {
                if (variant === 'enter') {
                    setIsTransitionCompleted(false);
                    lenis?.scrollTo(0, { immediate: true });

                    if (!isLoading) {
                        lenis?.stop();
                        document.documentElement.style.overflowY = 'hidden';
                    }
                }
            }}
            onAnimationComplete={(variant) => {
                if (variant === 'enter')
                    setIsTransitionCompleted(true);

                    if (!isLoading) {
                        lenis?.start();
                        document.documentElement.style.overflowY = 'auto';
                    }
            }}
        >
            {children}
        </motion.div>
    );
}