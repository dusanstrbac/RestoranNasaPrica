import Image from "next/image";

interface HranaKarticaProps {
  slikaUrl: string;
  naslov: string;
  opis: string;
}

const HranaKartica = ({ slikaUrl, naslov, opis }: HranaKarticaProps) => {
  return (
    <div className="mt-5 relative max-w-md bg-white rounded-2xl shadow-lg p-6 pt-24 md:p-8 md:pt-32 overflow-visible hover:shadow-2xl transition mb-16 mx-auto">
      {/* Slika koja izlazi iz okvira - responzivna verzija */}
      <div className="absolute -top-12 -left-4 md:-top-16 md:-left-8 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full shadow-xl border-4 border-white bg-white flex items-center justify-center overflow-hidden">
        <Image
          src={slikaUrl}
          alt={naslov}
          width={200}
          height={200}
          className="object-cover w-full h-full scale-110"
          priority
        />
      </div>

      {/* Tekstualni sadržaj */}
      <div className="md:ml-8">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{naslov}</h1>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {opis}
        </p>
      </div>
    </div>
  );
};

export default HranaKartica;