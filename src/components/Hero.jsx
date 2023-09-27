import { React, useState } from "react";
import Swal from "sweetalert2";
import "./Hero.css";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, inquiry } = formData;
    const successMessage = `
    <div style="text-align: left;">
      <p><strong>Success! Form submitted successfully.</strong></p>
      <p><strong>Details:</strong></p>
      <ul>
        <li><strong>First Name:</strong> ${firstName}</li>
        <li><strong>Last Name:</strong> ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Description:</strong> ${inquiry}</li>
      </ul>
    </div>
  `;
    Swal.fire({
      icon: "success",
      title: "Success!",
      html: successMessage,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      inquiry: "",
    });
  };

  return (
    <>
      <section>
        <div className="hero w-screen h-screen">
          <div className="text-center py-20 items-center">
            <h1 className="text-3xl font-bold pt-5">Hello Everyone</h1>
            <h3 className="text-xl font-semibold pt-3">
              Enjoy My Commercial Website
            </h3>
            <button className="hover:text-black hover:opacity-60 bg-blue-500 rounded-md my-5 px-3 py-2 text-white font-medium text-xs">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    
    </>
  );
}
