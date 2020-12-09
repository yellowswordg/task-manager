const sgMail = require("@sendgrid/mail");



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    //if you serious register custom domain
    from: "yellowswordg@gmail.com",
    subject: "Thx for joining  in",
    text: `Welcome to the app ${name}. `,
    // can specify html
  });
  // .then(() => {
  //   console.log("Email sent");
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
};
const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    //if you serious register custom domain
    from: "yellowswordg@gmail.com",
    subject: "Why are you leaving us",
    text: `So long ${name}, if it's not a big hustle please send us a reason why are you leaving us. `,
    // can specify html
  });
  // .then(() => {
  //   console.log("Email sent");
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
