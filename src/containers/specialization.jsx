import dataImage from "../assets/dataImage.svg";
import dataAnalysis from "../assets/dataAnalysis.svg";
import networking from "../assets/networking.svg";
import { FadeReveal, SlideReveal } from "../components/animation";

const Specialization = () => {
  return (
    <section id="specialty" className="py-16">
      <div className="container space-y-12 md:space-y-24">
        <div className="">
          <SlideReveal flow="y">
            <h5 className="py-2 text-primary-300 header-font">FOCUS AREA</h5>
          </SlideReveal>

          <SlideReveal flow="x">
            <h4 className="xs:text-2xl header-font md:text-3xl capitalize">
              Here are some areas we thrive in
            </h4>
          </SlideReveal>
        </div>

        <div className=" space-y-28 md:space-y-52">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 ">
            <div className="md:flex-[0.45]">
              <FadeReveal delay={1.5}>
                <img src={dataImage} alt="data image" />
              </FadeReveal>
            </div>

            <div className="md:flex-[0.45]  space-y-3">
              <SlideReveal flow="y">
                <h5 className="text-primary-300 uppercase header-font">
                  Knowledge
                </h5>
              </SlideReveal>
              <SlideReveal flow="y" delay={0.67}>
                <h3 className=" text-2xl md:text-3xl uppercase header-font">
                  BIG DATA
                </h3>
              </SlideReveal>

              <SlideReveal flow="y" delay={1.34}>
                <p className="text-sm">
                  In helping our clients make more data-driven decisions, we
                  assist them in creating a secure and informative
                  knowledge-base from which useful and deep insights can be
                  gleaned. Through the use of smart surveys, intelligent forms
                  and other non-invasive data gathering techniques involving
                  hardware and software components, we ensure that our clients
                  remain up to date with real-time data and other behavioral
                  changes from their own customer base.
                </p>
              </SlideReveal>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row-reverse justify-between items-center">
            <div className="flex-[0.45]">
              <SlideReveal flow="x" delay={1.1}>
                <img src={dataAnalysis} alt="data analysis" />
              </SlideReveal>
            </div>

            <div className="flex-[0.45] space-y-3 ">
              <SlideReveal flow="y">
                <h5 className="text-primary-300 uppercase header-font">
                  INNOVATION
                </h5>
              </SlideReveal>

              <SlideReveal flow="y">
                <h3 className="text-2xl md:text-3xl uppercase header-font">
                  DATA ANALYSIS
                </h3>
              </SlideReveal>

              <SlideReveal flow="y">
                <p className="text-sm">
                  Beyond the traditional analysis of data, we provide our
                  clients advanced big data analytics and other business
                  intelligence services through the use of artificial
                  intelligence and machine learning tools. This means that we
                  are able to provide deep relationships and accurate
                  projections in real-time based on our novel tools and access
                  to high performance computing (HPC) for multiple scenario
                  analysis.
                </p>
              </SlideReveal>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10  lg:justify-between  items-center">
            <div className="flex-[0.4]">
              <FadeReveal delay={1.5}>
                <img src={networking} alt="networking" />
              </FadeReveal>
            </div>

            <div className=" flex-[0.45] space-y-3 ">
              <SlideReveal flow="y">
                <h5 className="text-primary-300 uppercase header-font">
                  TECHNOLOGY
                </h5>
              </SlideReveal>

              <SlideReveal flow="y" delay={0.6}>
                <h3 className="text-[22px] md:text-3xl uppercase header-font">
                  RAPID DESIGN/DEPLOYMENT
                </h3>
              </SlideReveal>

              <SlideReveal flow="y" delay={1.3}>
                <p className="text-sm">
                  Understanding the need for speed in today’s world, we have
                  built capacity in advanced design and rapid solution
                  deployment. Ranging from software solutions to hardware
                  prototypes, we have a pandemic-tested network across the world
                  that is capable of scaling up production and deployment while
                  satisfying the highest standards with respect to quality and
                  performance.
                </p>
              </SlideReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
