import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src="/HeroImage.png"
        alt="HeroImage"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Tekstualni overlay */}
      <div
        className="
          absolute inset-0 
          flex flex-col items-center justify-center
          text-center 
          px-4 sm:px-6 md:px-12
        "
      >
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold 
            leading-tight 
            text-white 
            drop-shadow-lg
          "
        >
          Restoran Naša Priča
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white opacity-90 max-w-2xl">
          „Ukusi koji pričaju svoju priču.“
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
