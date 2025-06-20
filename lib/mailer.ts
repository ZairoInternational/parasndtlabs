"use server";

import nodemailer from "nodemailer";

interface contactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message?: string;
}

export const sendEmail = async ({
  name,
  email,
  company,
  phone,
  service,
  message,
}: contactFormData) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zairo.developer@gmail.com",
        pass: "gwlz rnrv gpio uzcp",
      },
    });

    // Set up email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: "Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    // return NextResponse.json(
    //   { message: "Your query has been delievered to the company" },
    //   { status: 200 }
    // );
  } catch (error) {
    console.error("Error sending no-reply email:", error);
    // return NextResponse.json(
    //   { error: "Could not send no-reply email" },
    //   { status: 500 }
    // );
  }
};
