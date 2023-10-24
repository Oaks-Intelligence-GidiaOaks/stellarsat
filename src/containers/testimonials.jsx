import { useEffect } from "react";
import { TestimonialCard } from "../components";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import { useRef } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const totalPages = 3;
  let resetTimeout;

  const items = [
    {
      name: "Sophia Whisky",
      avatarImage: "",
      position: "CEO o2designs",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus maxime quae amet corporis quaerat fugit pariatur temporibus tempora",
    },
    {
      name: "Sophia Whisky",
      avatarImage: "",
      position: "CEO o2designs",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus maxime quae amet corporis quaerat fugit pariatur temporibus tempora",
    },
    {
      name: "Sophia Whisky",
      avatarImage: "",
      position: "CEO o2designs",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus maxime quae amet corporis quaerat fugit pariatur temporibus tempora",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <div className="mx-auto  space-y-10">
          <div className="space-y-3 text-center">
            <h5 className="text-primary-300 header-font ">Testimonials</h5>

            <h3 className="text-3xl font-[500] header-font">
              What people say about us
            </h3>
          </div>

          {/* slider */}
          <div className="flex items-center  flex-wrap justify-center gap-3">
            <Carousel
              ref={carouselRef}
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={5000}
              isInfinite={true}
              initialActiveIndex={1}
            >
              {items.map((item, i) => (
                <TestimonialCard
                  id={i}
                  name={item.name}
                  avatarImage={item.avatar}
                  position={item.position}
                  text={item.text}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
