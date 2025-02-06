import { Testimonial } from "@/lib/interfaces";
import { Star } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kamau Mwangi",
    review: "Great products and fast shipping! I'm a happy customer.",
    rating: 5,
  },
  {
    id: 2,
    name: "Stella Musyoka",
    review: "Good quality items, but shipping took longer than expected.",
    rating: 4,
  },
  {
    id: 3,
    name: "Jacob Kyalo",
    review: "Excellent customer service. They quickly resolved my issue.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.review}</p>
            <p className="font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
