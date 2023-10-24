import quote from '../assets/quote.svg'

const TestimonialCard = ({ name, position, text }) => {
  return (
    <div className="rounded-md w-[300px] h-[278px] flex flex-col px-4 py-4 bg-green4 text-white">
        <img src={quote} alt="" className="h-6 w-6" />
      <p className="py-2 text-sm">{text}</p>

      <div className="flex gap-2 mt-auto items-start">
        <img src="https://media.licdn.com/dms/image/C5603AQGPuMl57nd_4Q/profile-displayphoto-shrink_800_800/0/1641757539844?e=2147483647&v=beta&t=9BpXAPOj3ASBbGdU5XhO7muUqvni3k1MNPl3d9lERZA" alt="" className="rounded-full h-16 w-16 bg-white" />

        <div className="space-y-1">
          <p className="font-[500]">{name}</p>

          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
