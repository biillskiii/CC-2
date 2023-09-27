import React from "react";

export default function About() {
  return (
    <div className="w-screen h-max bg-blue-900 flex justify-center item-center">
      <div className="me-auto">
        <img
          src="https://i.pinimg.com/564x/52/ae/8a/52ae8a9cd6694a5c8b76af6989df3f44.jpg"
          width={800}
          alt=""
          className="py-5 px-10 mx-auto"
        />
      </div>
      <div className="w-7/12  flex flex-col justify-center item-center px-5 mr-5  ">
        <div className="flex flex-col justify-center item-center h-48 bg-white shadow-md rounded-md">
          <h1 className="font-bold text-2xl text-center mb-2">
            <strong>ABOUT US</strong>
          </h1>
          <p className="font-semibold text-center px-5 mb-4">
            Selamat datang di Nabiel, mitra terpercaya Anda dalam mewujudkan
            visi digital Anda. Kami adalah tim berdedikasi yang berkomitmen
            untuk memberikan solusi pembuatan website yang inovatif dan
            berkualitas tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}
