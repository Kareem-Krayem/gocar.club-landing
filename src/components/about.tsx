import Image from 'next/image';
import AboutImage from '@/assets/aboutImage.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0D220E]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Image
            src={AboutImage}
            alt="Luxury car service"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold mb-6 text-[#9A7C3C]">
            About Go Car
          </h2>
          <p className="text-lg mb-6">
            Go Car is revolutionizing the luxury car service industry by
            bringing premium care right to your doorstep. We connect you with
            top-tier service providers, ensuring your prized vehicle receives
            the attention it deserves, all from the comfort of your home.
          </p>
          <p className="text-lg">
            Our upcoming mobile app will make scheduling and managing your car's
            care easier than ever. From detailing to ceramic coating, we're here
            to keep your luxury vehicle in pristine condition.
          </p>
        </div>
      </div>
    </section>
  );
}
