import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { MainProvider } from 'components/provider/MainProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </RecoilRoot>
  );
}

export default MyApp;
