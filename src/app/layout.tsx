import { ReduxProvider } from '@/store/provider';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
}
