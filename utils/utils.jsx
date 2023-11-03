import nodemailer from "nodemailer";
// import Email from "../src/components/Email";

// export const mailer = ({ email, subject, message }) => {
//   const transporter = nodemailer.createTransport({
//     port: import.meta.env.VITE_SMTP_PORT,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: import.meta.env.VITE_SMTP_USER,
//       pass: import.meta.env.VITE_SMTP_PASSWORD,
//     },
//   });

//   // const emailHtml = render(<Email message={message} />);

//   const mailOptions = {
//     from: import.meta.env.VITE_SMTP_USER,
//     to: email,
//     subject: subject,
//     // message: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log("Error occurred:", error);
//     } else {
//       console.log("Email sent:", info.response);
//       return info.response;
//     }
//   });
// };
