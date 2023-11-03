import quote from "../assets/quote.svg";

const TestimonialCard = ({ name, position, text, data }) => {
  return (
    <div className="rounded-md mx-2 w-[300px] h-[278px] flex flex-col px-4 py-4 bg-green4 text-white">
      <img src={quote} alt="" className="h-6 w-6" />
      <p className="py-2 text-sm max-h-32 line-clamp-6 ">{data?.content}</p>

      <div className="flex gap-2 mt-auto items-start">
        <img
          src={data?.userImage}
          alt=""
          className="rounded-full h-16 w-16 bg-white"
        />

        <div className="space-y-1">
          <p className="font-[500]">{data?.name}</p>

          <p>{data?.testPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
