import { FaqCard } from "../components";
import { SlideReveal } from "../components/animation";

const FAQ = () => {
  return (
    <SlideReveal width="100%" flow="x" delay={0.5}>
      <section id="faq" className="py-24">
        <div className="container">
          <div className="text-center">
            <h5 className="text-primary-300 header-font">
              SOME COMMON QUESTIONS
            </h5>
            <h5 className="font-[500] text-3xl header-font">
              Frequently Asked Questions
            </h5>
          </div>

          <div className="flex">
            <div className="grid content-between xs:grid-cols-1 lg:grid-cols-2 gap-y-8 mt-16  lg:gap-x-16 xs:gap-y-10">
              <FaqCard
                aid="panel1a-header"
                ariaControls="panel1a-content"
                heading="How Long Does it Take to Complete a Project?"
                paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              />

              <FaqCard
                aid="panel2a-header"
                ariaControls="panel2a-content"
                heading="Where is Stellarsat Located?"
                paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              />

              <FaqCard
                heading="What is the refund policy?"
                paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              />

              <FaqCard
                heading="Will there be a discount for returning clients?"
                paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              />

              <FaqCard
                heading="Do I need to Pay Before My Project Starts?"
                paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              />

              <FaqCard
                heading="How Can I Be Updated on the Progress of my Project?"
                paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              />
            </div>
          </div>
        </div>
      </section>
    </SlideReveal>
  );
};

export default FAQ;
