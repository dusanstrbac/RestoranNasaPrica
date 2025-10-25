import HeroSection from "@/components/hero";
import Navigacija from "@/components/Navigacija";

export default function Home() {
  return (
    <div>
      <Navigacija />
      <HeroSection />
      
      <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold italic mb-6">
            Naša priča
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            U restoranu <span className="font-semibold">Naša Priča</span> verujemo da je svaki obrok prilika da se povežemo.
            Naši kuvari spajaju tradicionalne recepte sa modernim pristupom, stvarajući ukuse koji se pamte.
            Uživajte u prijatnom ambijentu, domaćoj hrani i toplini koja vas vraća iznova.
          </p>
        </div>
      </section>

    </div>
  );
}
