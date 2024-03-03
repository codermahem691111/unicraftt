import React from "react";
import PrivacyPolicyImg from "../../assets/Footer/privacy-policy.png";
const PrivacyPolicy = () => {
  return (
    <>
      <section className="px-10">
      <div className="flex justify-center pb-20">
        <img
            className=" bg-cover"
            src={PrivacyPolicyImg}
            alt="Privacy Policy Logo"
          />
        </div>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk py-3">
          Introduction
        </h3>
        <p className=" text-[32px] font-[500] leading-[50px] font-Groteskt  py-3">
          Welcome to Unicraft IT Ltd ! This Privacy Policy explains how we
          collect, use, share, and protect your personal information when you
          use our services.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Information We Collect
        </h3>
        <p className=" text-[28px] font-[400] leading-[40px] font-Groteskt  py-3">
          We may collect personal information such as your name, email address,
          and contact details when you sign up for our services.We may collect
          information that your browser sends whenever you visit our website.
          This may include your IP address, browser type, and other usage
          details.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk py-3">
          How We Use Your Information
        </h3>
        <p className=" text-[32px] font-[500] leading-[50px] font-Groteskt  py-3">
          We use your personal information to provide and improve our services,
          communicate with you, and send you important updates.We may use
          aggregated and anonymized data for statistical analysis and to enhance
          the performance and functionality of our services.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Information Sharing
        </h3>
        <p className=" text-[28px] font-[400] leading-[40px] font-Groteskt  py-3">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as described in this
          Privacy Policy.We may share your information with trusted third-party
          service providers who assist us in delivering our services.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk py-3">
          Security
        </h3>
        <p className=" text-[32px] font-[500] leading-[50px] font-Groteskt  py-3">
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, and
          destruction.However, no method of transmission over the internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Your Choices
        </h3>
        <p className=" text-[28px] font-[400] leading-[40px] font-Groteskt  py-3">
          You can review and update your personal information by logging into
          your account.You may opt-out of receiving promotional emails from us
          by following the instructions in those emails.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk py-3">
          Cookies and Similar Technologies
        </h3>
        <p className=" text-[32px] font-[500] leading-[50px] font-Groteskt  py-3">
          We use cookies and similar technologies to collect information about
          your interactions with our website and services.You can control
          cookies through your browser settings.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Changes to this Privacy Policy
        </h3>
        <p className=" text-[28px] font-[400] leading-[40px] font-Groteskt  py-3">
          We may update this Privacy Policy from time to time. The latest
          version will be posted on our website. Continued use of our services
          after any changes to the Privacy Policy constitutes your consent to
          the changes.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Contact Us
        </h3>
        <p className=" text-[28px] font-[400] leading-[40px] font-Groteskt  py-3">
          If you have any questions or concerns about this Privacy Policy,
          please contact us.Thank You!!
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
