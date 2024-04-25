import { IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
  return (
    <section class="flex flex-col md:flex-row bg-[#3f3f3f] text-[#fff]">
      <div className="flex flex-col justify-between px-4 py-12 mx-auto">
        <h2 className="text-center underline underline-offset-4 decoration-2">
          Theem College of Engineering
        </h2>
        <p class="text-base w-fit text-center mt-4 md:mt-0 leading-6 text-[#fff]">
          © 2021 Theem, Inc. All rights reserved.
        </p>
      </div>
      <div class=" px-4 py-[4rem] mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          
   
          <div class="px-5 py-2">
            <a
              href="#"
              class="text-base leading-6 text-[#b8b8b8] hover:text-[#fff]"
            >
              Contact Us: +91 7506830077
            </a>
          </div>
        </nav>
        <div class="flex justify-center mt-[2rem] space-x-6 md:space-x-10">
          <a href="https://www.facebook.com/Theem-College-Of-Engineering-Boisar-1976258729259079/" class="text-[#b8b8b8] hover:text-[#fff]">
            <span class="sr-only">Facebook</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/Theem-College-Of-Engineering-Boisar-1976258729259079/" class="text-[#b8b8b8] hover:text-[#fff]">
          <span class="sr-only">LinkedIn</span>
          <IoLogoLinkedin  class="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
