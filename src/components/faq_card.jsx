import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const FaqCard = ({ heading, paragraph, ariaControls, aid }) => {
  return (
    <Accordion className="!bg-transparent !border-none !shadow-none !drop-shadow-none !text-white">
      <AccordionSummary
        expandIcon={<ExpandMore className="!text-primary-300" />}
        aria-controls={ariaControls}
        id={aid}
        className=""
      >
        <Typography>
          <h4 className="font-[500] text-lg xl:text-xl header-font text-primary-300">
            {heading}
          </h4>
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography className="font-[500] text-2xl header-font">
          <p className="text-white text-sm lg:pr-10">{paragraph}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
    // <div className="space-y-3">
    //   <h4 className="font-[500] text-2xl header-font">{heading}</h4>

    //   <p className="text-white text-sm lg:pr-10">{paragraph}</p>
    // </div>
  );
};

export default FaqCard;
