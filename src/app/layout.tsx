import Navbar from '../components/Navbar/Navbar';
import './globals.scss';

export const metadata = {
    title: 'RC Control',
    description: 'Application to remotely execute commands',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
