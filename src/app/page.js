import AboutUs from './components/AboutUs';
import { CarouselPlugin } from './components/CarouselPlugin';
import ServicesSection from './components/ServicesSection';
import Support from './components/Support';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto space-y-24">
      <section>
        <CarouselPlugin />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <ServicesSection />
      </section>

      <section>
        <Support />
      </section>
    </main>
  );
}
