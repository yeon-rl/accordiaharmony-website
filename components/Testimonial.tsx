import React from "react";
import Text from "./Text";
import test from "node:test";

const Testimonial = () => {
  const testimonials = [
    {
      title: "Youth Centered",
      quote: `“Before joining Accordia Harmony, I struggled with budgeting and staying organised. Now I can manage my bills, cook for myself, and I actually feel confident about my future.”`,
      name: "Lina M",
      age: 21,
    },
    {
      title: "Partners Review",
      quote: `“Before joining Accordia Harmony, I struggled with budgeting and staying organised. Now I can manage my bills, cook for myself, and I actually feel confident about my future.”`,
      name: "Lina M",
      age: 21,
    },
    {
      title: "Product Oriented",
      quote: `“Before joining Accordia Harmony, I struggled with budgeting and staying organised. Now I can manage my bills, cook for myself, and I actually feel confident about my future.”`,
      name: "Lina M",
      age: 21,
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
            className="rounded-[6px] p-5 flex flex-col space-y-20"
            style={{
              border: "0.74px solid #FFFFFF1C",
              backdropFilter: "blur(5.162500381469727px)",
            }}
          >
            <Text className="text-center md:text-left">
              {testimonial.quote}
            </Text>

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
