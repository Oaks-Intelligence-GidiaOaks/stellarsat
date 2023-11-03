import { useEffect, useState } from "react";
import { TestimonialCard } from "../components";
import Slider from "react-slick";
import { getTestimonials } from "../../sanity/sanity-utils";

const Testimonials = () => {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    const getTestQuery = async () => {
      const data = await getTestimonials();

      setTestData(data);
    };

    getTestQuery();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "30px",
          dots: true,
        },
      },
    ],
  };

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
          <div className="max-w-5xl mx-auto">
            <Slider {...settings}>
              {testData?.map((item, i) => (
                <TestimonialCard
                  data={item}
                  key={i}
                  name={item.name}
                  avatarImage={item.avatar}
                  position={item.position}
                  text={item.text}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
