import {
  Car,
  Sparkles,
  Shield,
  Wrench,
  Droplet,
  PaintBucket,
} from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Mobile Detailing',
    description:
      "Comprehensive cleaning and polishing of your vehicle's exterior and interior.",
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description:
      "Long-lasting protection for your car's paint with a high-gloss finish.",
  },
  {
    icon: Sparkles,
    title: 'Paint Correction',
    description:
      'Remove swirls, scratches, and imperfections for a flawless finish.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description: 'Regular upkeep to keep your luxury car in top condition.',
  },
  {
    icon: Droplet,
    title: 'Interior Detailing',
    description:
      "Deep cleaning and conditioning of your car's interior surfaces.",
  },
  {
    icon: PaintBucket,
    title: 'Paint Protection Film',
    description:
      "Invisible shield to protect your car's paint from chips and scratches.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#112A12]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#9A7C3C]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A3E1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-[#9A7C3C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
