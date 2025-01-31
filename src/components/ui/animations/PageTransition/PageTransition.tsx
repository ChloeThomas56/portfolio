import { useRouter } from 'next/router';
import { useTranslation } from '@/context/TranslationContext';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { useFirstLoad } from '@/context/FirstLoadContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/variants';
import Footer from '@/components/Footer/Footer';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const router                = useRouter();
    const locale                = router.locale;
    const { setVisibleLocale }  = useTranslation();
    const lenis                 = useSmoothScrollingControl();
    const { firstLoad }         = useFirstLoad();

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

    const disableScroll = () => {
        lenis?.stop();
        document.documentElement.style.overflowY = 'hidden';
    }

    const enableScroll = () => {
        lenis?.start();
        document.documentElement.style.overflowY = 'auto';
    }

    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={{ firstLoad }}
            onAnimationStart={(variant) => {
                disableScroll();

                if (variant === 'enter') {
                    window.scrollTo(0,0);
                    setVisibleLocale(locale);
                }            
            }}
            onAnimationComplete={(variant) => {
                if (variant === 'enter')
                    enableScroll();
            }}
        >
            {children}
            <Footer />
        </motion.div>
    );
}