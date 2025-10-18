import { CarouselPlugin } from './components/CarouselPlugin';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section>
        <CarouselPlugin />
      </section>

      <section>
        <ServicesSection />
      </section>
    </main>
  );
}
