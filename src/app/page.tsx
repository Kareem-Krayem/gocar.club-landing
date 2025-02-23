import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import FAQ from '@/components/faq';
import Reviews from '@/components/reviews';
import Footer from '@/components/footer';

//TODO: Add this project to github and upload to vercel under a new subdomain called preview.gocar.club

export default function Home() {
  return (
    <main className="min-h-screen bg-[#112A12] text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Reviews />
      <Footer />
    </main>
  );
}
