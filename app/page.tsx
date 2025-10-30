import HeroSection from "@/components/hero";
import Navigacija from "@/components/Navigacija";
import Testimonials from "@/components/testimonials";
import HranaKartica from "@/components/ui/HranaKartica";



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

      {/* SEKCIJA SA HRANOM - DODAJTE OVU SEKCIJU */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold italic mb-20 text-center">Naša preporuka</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Prvi red - 4 kartice */}
            <HranaKartica
              slikaUrl="/Hrana/Meso.png"
              naslov="Bareno meso sa povrćem"
              opis="Sočno bareno meso sa sezonskim povrćem i začinima koji bude sva čula."
            />
            <HranaKartica
              slikaUrl="/Hrana/PecenaRiba.png"
              naslov="Pečena riba"
              opis="Sveža riba pečena sa mediteranskim začinima i maslinovim uljem."
            />
            <HranaKartica
              slikaUrl="/Hrana/PiletinaRikkaMasala.png"
              naslov="Piletina tikka masala"
              opis="Pileći komadići u kremastom sosu od paradajza i indijskih začina."
            />
            <HranaKartica
              slikaUrl="/Hrana/VegeterijanskaLasanja.png"
              naslov="Vegeterijanska lasanja"
              opis="Lasanja punjena svežim povrćem i sirom sa arome."
            />
            
            {/* Drugi red - 4 kartice */}
            <HranaKartica
              slikaUrl="/Hrana/DomacaCorba.png"
              naslov="Domaća čorba"
              opis="Bogata čorba od povrća i mesa po starom receptu."
            />
            <HranaKartica
              slikaUrl="/Hrana/Pasta.png"
              naslov="Špagete carbonara"
              opis="Klasična italijanska pasta sa pančetom, jajima i parmezanom."
            />
            <HranaKartica
              slikaUrl="/Hrana/MeksičkiRostilj.png"
              naslov="Meksički rostilj"
              opis="Raznovrsno meso sa začinima i salsom od avokada."
            />
            <HranaKartica
              slikaUrl="/Hrana/SushiPloča.png"
              naslov="Sushi ploča"
              opis="Raznovrsni sushi rolovi sa svežom ribom i povrćem."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold italic mb-6">Naše usluge</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            
            {/* KETERING */}
            <div className="flex items-start bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="shrink-0 bg-yellow-100 text-yellow-600 rounded-full p-4 mr-5">
                🍽️
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ketering</h3>
                <p className="text-gray-700 leading-relaxed">
                  Donosimo ukuse našeg restorana na vaš događaj — elegantno, sveže i profesionalno.
                </p>
              </div>
            </div>

            {/* DOSTAVA */}
            <div className="flex items-start bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="shrink-0 bg-green-100 text-green-600 rounded-full p-4 mr-5">
                🛵
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dostava</h3>
                <p className="text-gray-700 leading-relaxed">
                  Uživajte u našim jelima kod kuće uz brzu, pouzdanu i toplu dostavu direktno do vas.
                </p>
              </div>
            </div>

            {/* PROSLAVE */}
            <div className="flex items-start bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="shrink-0 bg-blue-100 text-blue-600 rounded-full p-4 mr-5">
                🎉
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Organizacija proslava</h3>
                <p className="text-gray-700 leading-relaxed">
                  Od rođendana do svadbi — kreiramo nezaboravnu atmosferu i meni po vašoj meri.
                </p>
              </div>
            </div>

            {/* SPECIJALNI MENI */}
            <div className="flex items-start bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="shrink-0 bg-red-100 text-red-600 rounded-full p-4 mr-5">
                🥂
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Specijalni meni</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sezonski ukusi, pažljivo birani sastojci i kreativna jela koja oduševljavaju.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full h-[80vh] flex items-center overflow-hidden">
        {/* Pozadinska slika */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/123.jpg')" }}
        ></div>

        {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-10"></div>

        {/* Tekst */}
        <div className="relative z-20 text-white max-w-3xl px-6 md:px-20">
          <h2 className="text-3xl md:text-5xl font-bold italic mb-6">
            “Hrana nije samo obrok — to je priča, emocija i umetnost.”
          </h2>
          <p className="text-lg md:text-2xl font-light mb-4">
            — Marko Petrović, Glavni kuvar
          </p>
        </div>
      </section>

      <Testimonials />
      
    </div>
  );
}