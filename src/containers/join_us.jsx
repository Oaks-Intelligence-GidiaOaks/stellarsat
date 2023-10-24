import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { FadeReveal } from "../components/animation";

const JoinUs = () => {
  return (
    <FadeReveal width="100%" delay={0.5}>
      <section id="join-us" className="py-24 bg-primary-100">
        <div className="">
          <div className="text-center w-fit mx-auto space-y-6">
            <div className="space-y-2">
              <h5 className="text-primary-300 uppercase header-font">
                join us
              </h5>
              <h2 className="text-4xl font-[500] header-font">
                Join us now and grow your business
              </h2>
            </div>

            <p>
              We continuously invest in developing core competencies in emerging
              tools and technology to make us better prepared <br /> in meeting
              our clients’ needs.
            </p>

            <div className="w-fit mx-auto">
              <Link to={`#`}>
                <Button text="GET STARTED" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeReveal>
  );
};

export default JoinUs;
