const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
    
    var transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "07dfe418959ebb",
          pass: "1d2cb62bf015f4"
        }
      });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
