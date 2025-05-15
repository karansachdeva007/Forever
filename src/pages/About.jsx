import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we are driven by innovation and a vision to transform
            online shopping. Our journey began with a simple goal: to create a
            seamless platform where customers can effortlessly discover,
            explore, and shop for a diverse range of products—all from the
            comfort of their homes.
          </p>
          <p>
            From day one, we’ve been committed to curating a high-quality
            selection that meets every style and preference. Whether it’s
            fashion, beauty, electronics, or home essentials, we bring you an
            extensive collection from trusted brands and suppliers, ensuring
            quality and convenience at every step.
          </p>
          <p>
            We believe shopping should be more than just a transaction—it should
            be an experience. That’s why we focus on delivering exceptional
            customer service, easy navigation, and a secure shopping
            environment. Our platform is designed to make every purchase smooth,
            enjoyable, and hassle-free.
          </p>
          {/* <p>As we continue to grow, we remain dedicated to bringing the latest trends, innovative products, and unbeatable deals to our customers. At Forever, we don’t just sell products; we create a shopping destination where quality meets convenience, and customer satisfaction is at the heart of everything we do.</p> */}
          <b className="text-gray-800 text-xl">Our Mission</b>
          <p>
            At Forever, our mission is to provide customers with unparalleled
            choice, convenience, and confidence. We are committed to delivering
            a seamless shopping experience that goes beyond expectations—from
            discovery and ordering to fast, reliable delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
