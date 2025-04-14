import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('../components/client/Contact'), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Professional portfolio of Your Name - Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Your Name - Portfolio" />
        <meta property="og:description" content="Professional portfolio of Your Name - Full Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Name - Portfolio" />
        <meta name="twitter:description" content="Professional portfolio of Your Name - Full Stack Developer" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-dark text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}