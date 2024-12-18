import '@/styles/globals.scss';
import { inter } from '@/lib/font';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { CursorProvider } from '@/components/ui/Cursor/CursorContext';
import { Cursor } from '@/components/ui/Cursor/Cursor';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
import Head from 'next/head';
import Loader from '@/components/ui/animations/Loader/Loader';
import { LoaderProvider } from '@/components/ui/animations/Loader/LoaderContext';
import { PageTransitionProvider } from '@/components/ui/animations/PageTransition/PageTransitionContext';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            <div className={inter.className}>
                <SmoothScrolling>
                    <CursorProvider>
                        <LoaderProvider>
                            <PageTransitionProvider>
                                <Loader />
                                <Header />
                                <main className="page">
                                    <AnimatePresence mode='wait'>
                                        <Component key={router.asPath} {...pageProps} />
                                    </AnimatePresence> 
                                </main>
                                <Footer />
                                <Cursor />
                            </PageTransitionProvider>
                        </LoaderProvider>
                    </CursorProvider>
                </SmoothScrolling>
            </div>
        </>
    )
}