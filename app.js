const express = require("express");
const app = express();
var nodemailer = require("nodemailer");
const port = 3000;

app.get("/", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: ""
    }
  });

  const mailOptions = {
    from: "", // sender address
    to: "", // list of receivers
    subject: "Subject of your email", // Subject line
    html: "<p>Your html here</p>" // plain text body
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
