import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Johnson',
    review:
      "Go Car's service is unparalleled. They transformed my car right in my driveway!",
    rating: 5,
  },
  {
    name: 'Sarah Lee',
    review:
      'I love how convenient their service is. The detailing work was absolutely top-notch.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    review:
      'The ceramic coating they applied has kept my car looking new for months. Highly recommended!',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-[#112A12]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#9A7C3C]">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#1A3E1C] p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#9A7C3C] fill-current"
                  />
                ))}
              </div>
              <p className="mb-4">{review.review}</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
