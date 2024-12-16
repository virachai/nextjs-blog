import '@/styles/global.css';
import '@/styles/globalicons.css';
import { AppProps } from 'next/app';
// https://m3.material.io/foundations/customization
// https://material-foundation.github.io/material-theme-builder/
// https://m3.material.io/foundations/layout/applying-layout/window-size-classes
// https://mui.com/material-ui/customization/theming/
// npm install @mui/material @emotion/react
// https://mui.com/material-ui/getting-started/installation/

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
