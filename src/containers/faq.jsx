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
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque est eum ratione ex, quia enim exercitationem aut assumenda explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi excepturi minus tenetur consequuntur velit earum non libero, possimus, explicabo quasi ipsam eos? Sapiente ratione maxime, ipsam laborum recusandae beatae."
              />

              <FaqCard
                aid="panel2a-header"
                ariaControls="panel2a-content"
                heading="Where is Stellarsat Located?"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque est eum ratione ex, quia enim exercitationem aut assumenda explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi excepturi minus tenetur consequuntur velit earum non libero, possimus, explicabo quasi ipsam eos? Sapiente ratione maxime, ipsam laborum recusandae beatae."
              />

              <FaqCard
                heading="What is the refund policy?"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque est eum ratione ex, quia enim exercitationem aut assumenda explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi excepturi minus tenetur consequuntur velit earum non libero, possimus, explicabo quasi ipsam eos? Sapiente ratione maxime, ipsam laborum recusandae beatae."
              />

              <FaqCard
                heading="Will there be a discount for returning clients?"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque est eum ratione ex, quia enim exercitationem aut assumenda explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi excepturi minus tenetur consequuntur velit earum non libero, possimus, explicabo quasi ipsam eos? Sapiente ratione maxime, ipsam laborum recusandae beatae."
              />

              <FaqCard
                heading="Do I need to Pay Before My Project Starts?"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque est eum ratione ex, quia enim exercitationem aut assumenda explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi excepturi minus tenetur consequuntur velit earum non libero, possimus, explicabo quasi ipsam eos? Sapiente ratione maxime, ipsam laborum recusandae beatae."
              />

              <FaqCard
                heading="How Can I Be Updated on the Progress of my Project?"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque est eum ratione ex, quia enim exercitationem aut assumenda explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi excepturi minus tenetur consequuntur velit earum non libero, possimus, explicabo quasi ipsam eos? Sapiente ratione maxime, ipsam laborum recusandae beatae."
              />
            </div>
          </div>
        </div>
      </section>
    </SlideReveal>
  );
};

export default FAQ;
