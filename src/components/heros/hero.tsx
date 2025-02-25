import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#112A12] to-[#1A3E1C]">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Luxury Car Services <br /> At Your Doorstep
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Experience premium car care without leaving your home. Our mobile app
          is coming soon!
        </p>
        <button className="bg-[#9A7C3C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#B59548] transition-colors flex items-center mx-auto">
          Get Notified
          <ArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}
