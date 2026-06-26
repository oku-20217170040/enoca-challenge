import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import Pricing from './sections/Pricing/Pricing';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <>
      {/* Skip link — klavye kullanıcıları nav'ı atlayıp direkt içeriğe gidebilir */}
      <a href="#main-content" className="sr-only">
        Ana içeriğe geç
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--color-border)',
        color: 'var(--color-text-muted)',
        fontSize: 'var(--font-size-sm)'
      }}>
        <p>© 2026 Enoca Bilgi Teknolojileri. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;
