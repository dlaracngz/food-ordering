import React from "react";

const Reservation = () => {
  return (
    <div className="container mx-auto py-10 px-2">
      <h2 className="font-dancing text-[2.5rem] mb-5">Book A Table</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="flex flex-col gap-6">
          <li>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#999] outline-none h-[50px] w-full pl-6 rounded-[5px]"
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-[#999] outline-none h-[50px] w-full pl-6 rounded-[5px]"
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Your Email"
              className="border border-[#999] outline-none h-[50px] w-full pl-6 rounded-[5px]"
            />
          </li>
          <li>
            <input
              type="date"
              name=""
              id=""
              className="border border-[#999] outline-none h-[50px] w-full pl-6 rounded-[5px] pr-3"
            />
          </li>
        </ul>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.313598043175!2d2.291906376866813!3d48.858373600707175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEyfel%20Kulesi!5e1!3m2!1str!2str!4v1728315495038!5m2!1str!2str"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-[5px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
