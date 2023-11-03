import { Button, FormInput } from "../components";
import pressComputer from "../assets/pressComputer.svg";
import { FadeReveal } from "../components/animation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { addFormData } from "../../sanity/sanity-utils";
// import { mailer } from "../../utils/utils";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["submit"],
    mutationFn: (formData) => addFormData(formData),
    onSuccess: (data, context) => {
      // toast.success(data.message);
      console.log("submitted", data);
      // toast.success(data.message);
      reset();
    },
    onError: () => {
      console.error(err.message);
    },
  });

  const submitHandler = async (data) => {
    // e.preventDefault();

    const mailData = {
      email: "emmaotuonye1@gmail.com",
      subject: "Testing mail server",
      message: "This is a test message",
    };
    console.log(data);

    // const res = await mailer(mailData);

    console.log(res);

    // console.log(data);

    // mutate(data);
  };

  return (
    <FadeReveal width="100%" delay={0.4}>
      <section id="contact-us" className="py-24">
        <div className=" container space-y-16">
          <div className="space-y-3">
            <h5 className="text-primary-300 header-font">Contact us</h5>
            <h3 className="text-white text-3xl font-[500] header-font">
              Get in touch with us
            </h3>
          </div>

          <div className="flex flex-col-reverse gap-16 lg:flex-row items-start justify-between ">
            <div className=" xs:flex-1 lg:flex-[0.4]">
              <img src={pressComputer} alt="cozntact us" />
            </div>

            <form
              action=""
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-6 xs:flex-1  md:flex-[0.5] pl-2 w-full"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                <FormInput
                  formProps={register("name")}
                  label="Name"
                  placeholder="First and last name"
                  type="text"
                />

                <FormInput
                  formProps={register("email")}
                  label="Email"
                  placeholder="Email Address"
                  type="email"
                />
              </div>

              <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                <FormInput
                  formProps={register("companyName")}
                  label="Company Name"
                  placeholder="First and last name"
                  type="text"
                />

                <FormInput
                  formProps={register("companyWebsite")}
                  label="Company website"
                  placeholder="Website Address"
                  type="text"
                />
              </div>

              <textarea
                rows={8}
                {...register("content")}
                className="p-3 rounded bg-blue outline-none text-gray-200 w-full "
              ></textarea>

              <Button text="SEND" />
            </form>
          </div>
        </div>
      </section>
    </FadeReveal>
  );
};

export default ContactUs;
