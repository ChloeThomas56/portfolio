import '../styles/globals.scss';
import { inter } from '@/lib/font';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Cursor } from '@/components/ui/cursor/Cursor';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
import { CursorProvider } from '@/components/ui/cursor/CursorContext';
import { Metadata } from 'next';
import PageTransition from '@/components/ui/animations/PageTransition';
import { LoaderProvider } from '@/components/ui/animations/loader/LoaderContext';
import Loader from '@/components/ui/animations/loader/Loader';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: 'Chloé Thomas',
    description: 'Développeuse web freelance passionnée par la création et le design. Je conçois des sites et applications web sur-mesure.',
    keywords: "développement web, front-end, création de sites, react, freelance"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={inter.className}>
                <SmoothScrolling>
                    <CursorProvider>
                        <LoaderProvider>
                            <Loader />
                            <Header />
                            <main>
                                <PageTransition>
                                    {children}
                                </PageTransition>
                            </main>
                            <Footer />
                            <Cursor />
                        </LoaderProvider>
                    </CursorProvider>
                </SmoothScrolling>
                <SpeedInsights />
            </body>
        </html>
    );
}