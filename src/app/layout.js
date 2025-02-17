import './globals.css';
import MainHeader from 'modecraft/components/main-header/main-header';

export const metadata = {
    title: 'ModeCraft | KCG',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
