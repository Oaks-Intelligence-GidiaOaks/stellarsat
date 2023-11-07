import { Button, FormInput } from "../components";
import pressComputer from "../assets/pressComputer.svg";
import { FadeReveal } from "../components/animation";
import { ToastContainer, toast } from "react-toastify";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { addFormData } from "../../sanity/sanity-utils";
import axios from "axios";
import { email_url } from "../../utils/constants";
// import { mailer } from "../../utils/utils.js";

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
      name: "",
      email: "",
      companyName: "",
      companyWebsite: "",
      message: "",
    },
  });

  if (errors) {
    console.log(errors);
  }

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
    try {
      axios.post(`${email_url}send_email`, data);

      toast("Successful");
      reset();
    } catch (err) {
      toast("Try again, error occured", err.message);
      console.log(err.message);
    }
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
                  formProps={{
                    register: register("name", {
                      required: true,
                      message: "name is required",
                    }),
                  }}
                  label="Name"
                  placeholder="First and last name"
                  type="text"
                  error={errors.name}
                />

                <FormInput
                  formProps={{
                    register: register("email", {
                      required: true,
                      message: "Email is required",
                    }),
                  }}
                  label="Email"
                  placeholder="Email Address"
                  type="email"
                  error={errors.email}
                />
              </div>

              <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                <FormInput
                  formProps={{ register: register("companyName") }}
                  label="Company Name"
                  placeholder="Company name"
                  type="text"
                />

                <FormInput
                  formProps={{ register: register("companyWebsite") }}
                  label="Company website"
                  placeholder="Website Address"
                  type="text"
                />
              </div>

              <textarea
                rows={8}
                {...register("message", {
                  required: true,
                  message: "This is required",
                })}
                className="p-3 rounded bg-blue outline-none text-gray-200 w-full "
              ></textarea>

              <button
                className=" w-fit cursor-pointer "
                // onClick={handleSubmit(submitHandler)}
              >
                <Button text="SEND" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </FadeReveal>
  );
};

export default ContactUs;
