import Head from '../components/head';
import Particles from 'react-tsparticles';

// Disable client side JS
export const config = { unstable_runtimeJS: false };

// Pass host as prop
export async function getServerSideProps(context) {
  return { props: { host: context.req.headers.host } };
}

export default function Home({ host }) {
  return (
    <main className="mouse">
      <Head />
      <Particles id="tsparticles" url="particles.json" />
      <div className="host text-center">
        <h1>{host}</h1>
        <p className="mono">Coming soon</p>
      </div>
    </main>
  );
}
