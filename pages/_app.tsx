// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../pages/globals.css'; // Import your global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
