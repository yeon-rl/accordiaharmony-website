import React from "react";
import Text from "./Text";
import { Star } from "iconsax-reactjs";

const Testimonial = () => {
  const testimonials = [
    {
      title: "Youth Centered",
      quote: `Accordia Harmony helped me find confidence and purpose, they truly support young people to grow and make an impact.`,
      name: "Priscilla J. Thompson",
      age: 19,
      rating: 5,
    },
    {
      title: "Partners Review",
      quote: `Partnering with Accordia Harmony has been inspiring. Their commitment to empowering young people and creating real community impact is genuine, focused and deeply effective.`,
      name: "John F. Mitchell",
      age: 23,
      rating: 4,
    },
    {
      title: "Product Oriented",
      quote: `Before joining Accordia Harmony, I struggled with budgeting and staying organised. Now I can manage my bills, cook for myself, and I actually feel confident about my future.`,
      name: "Lina Marie Collins",
      age: 21,
      rating: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {testimonials.map((testimonial, index) => (
        <div className="flex flex-col space-y-5" key={index}>
          <div
            className="rounded-[6px] p-3 flex items-center justify-center"
            style={{
              border: "0.74px solid #FFFFFF24",
              backdropFilter: "blur(58.85250473022461px)",
            }}
          >
            <Text type="body" className="text-xl! font-bold!">
              {testimonial.title}
            </Text>
          </div>
          <div
            className="rounded-[6px] p-5 flex flex-col space-y-5"
            style={{
              border: "0.74px solid #FFFFFF1C",
              backdropFilter: "blur(5.162500381469727px)",
            }}
          >
            <Text className="text-center md:text-left">
              {testimonial.quote}
            </Text>

            {/* Rating stars (Iconsax) */}
            <div className="flex items-center justify-center md:justify-start gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const score = testimonial.rating ?? 0;
                const filled = i < score;
                return (
                  <Star
                    key={i}
                    size={16}
                    color={filled ? "#F59E0B" : "#9CA3AF"}
                    variant={filled ? "Bulk" : "Linear"}
                    className="opacity-90"
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <Text className="font-bold!">{testimonial.name}</Text>
              <Text>Age {testimonial.age}</Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
