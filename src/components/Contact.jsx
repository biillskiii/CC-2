import { React, useState } from "react";
import Swal from "sweetalert2";

export default function () {
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
    <section>
      <div className=" flex justify-between px-6">
        <div className="flex-cols w-1/3 mx-auto mt-5">
          <h1 className="text-2xl mt-5 mb-4 ml-5 text-blue-900 font-bold">
            Contact Us
          </h1>
          <p className="ml-5 mt-5 justify-center">
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you'd like to contact below
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
            <div className="mb-4">
              <label
                htmlFor="inputFrontName"
                className="focus:outlise text-gray-600"
              >
                First name
              </label>
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full"
                id="inputFrontName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="inputBackName" className="text-gray-600">
                Last name
              </label>
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full"
                id="inputBackName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="inputEmail" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="border rounded-md px-3 py-2 w-full"
              id="inputEmail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="inputAddress2" className="block text-gray-600">
              What can we help you with?
            </label>
            <textarea
              className="border rounded-md px-3 py-2 w-full h-36"
              id="inputAddress2"
              name="inquiry"
              placeholder="Type your message here..."
              value={formData.inquiry}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-start">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
