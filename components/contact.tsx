import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const contactInfo = [
    { name: "Phone", icon: <Phone fill="white" />, href: "/" },
    { name: "Email", icon: <Mail fill="white" />, href: "/" },
    { name: "Facebook", icon: <Facebook fill="white" />, href: "/" },
    { name: "Instagram", icon: <Instagram fill="white" />, href: "/" },
    { name: "Linkedin", icon: <Linkedin fill="white" />, href: "/" },
  ];

  return (
    <div className="  rounded-md flex flex-col items-center fixed top-1/4 left-0 gap-y-2">
      {contactInfo.map((contact, index) => (
        <Link
          key={index}
          href={contact.href}
          className=" p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-md"
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};

export default Contact;
