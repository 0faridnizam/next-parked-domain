import Head from 'next/head';

function Headd({ host }) {
  return (
    <Head>
      <link rel="dns-prefetch" href="//cdn.statically.io" />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <meta name="description" content="Coming soon" />
      <title>{host}</title>
      <link rel="manifest" href="/manifest.json" />
      <link href="/favicon-16x16.ico" rel="icon" type="x-icon" sizes="16x16" />
      <link href="/favicon-32x32.ico" rel="icon" type="x-icon" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />
      <meta content={host} property="og:title" />
      <meta content={host} property="twitter:title" />
      <meta content="Coming soon" property="og:description" />
      <meta content="Coming soon" property="twitter:description" />
    </Head>
  );
}

export default Headd;
