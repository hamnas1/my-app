"use client";

import React, { useState, FormEvent } from 'react';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('We promise we won’t spam you.');
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      if (validateEmail(email)) {
        setFeedback('Thanks for subscribing!');
        setEmail(''); // Clear the input
      } else {
        setFeedback('Please enter a valid email address.');
      }
    };
  
    const validateEmail = (email: string): boolean => {
      // Simple regex for email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

  return (
    <div className="bg-[#171717] text-white">
      <footer className="footer container pt-28 pb-10">
        <aside>
          <FooterHeading>100 days of Flutter</FooterHeading>
          <FooterSubHeading>
            <p>A product of hacking with flutter</p>
          </FooterSubHeading>
          <div className="flex flex-row justify-start items-start gap- ">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="36px"
  height="36px"
  viewBox="0 0 300 150"
  className="transition-colors duration-300 ease-in-out fill-current text-gray-600 hover:text-[#1774ff]"
>
  <g
    fill="currentColor"
    fill-rule="nonzero"
    stroke="none"
    stroke-width="1"
    stroke-linecap="butt"
    stroke-linejoin="miter"
    stroke-miterlimit="10"
    stroke-dasharray=""
    stroke-dashoffset="0"
    font-family="none"
    font-weight="none"
    font-size="none"
    text-anchor="none"
  >
    <g transform="scale(8.53333,8.53333)">
      <path
        d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.464,12.535c0.006,0.133 0.009,0.265 0.009,0.397c0,4.068 -3.095,8.756 -8.756,8.756c-1.739,0 -3.356,-0.509 -4.717,-1.383c0.241,0.029 0.486,0.042 0.735,0.042c1.443,0 2.769,-0.491 3.821,-1.318c-1.347,-0.025 -2.484,-0.915 -2.875,-2.137c0.188,0.036 0.381,0.055 0.579,0.055c0.281,0 0.554,-0.038 0.811,-0.108c-1.408,-0.282 -2.469,-1.526 -2.469,-3.017c0,-0.013 0,-0.026 0,-0.039c0.415,0.231 0.889,0.369 1.394,0.385c-0.825,-0.551 -1.369,-1.494 -1.369,-2.561c0,-0.565 0.151,-1.094 0.416,-1.547c1.518,1.862 3.786,3.088 6.343,3.216c-0.052,-0.225 -0.079,-0.46 -0.079,-0.701c0,-1.699 1.378,-3.078 3.077,-3.078c0.885,0 1.685,0.374 2.246,0.972c0.701,-0.139 1.36,-0.394 1.955,-0.747c-0.23,0.719 -0.718,1.321 -1.354,1.703c0.622,-0.074 1.215,-0.239 1.768,-0.484c-0.411,0.618 -0.932,1.159 -1.535,1.594z"
      ></path>
    </g>
  </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 300 150">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                <g transform="scale(5.33333,5.33333)">
                    <path className="transition-colors duration-300 ease-in-out fill-gray-600 hover:fill-[#1774ff]" d="M24,4c-11.04569,0 -20,8.95431 -20,20c0,11.04569 8.95431,20 20,20c11.04569,0 20,-8.95431 20,-20c0,-11.04569 -8.95431,-20 -20,-20z"></path>
                    <path d="M29.368,24h-3.368v12h-5v-12h-3v-4h3v-2.41c0.002,-3.508 1.459,-5.59 5.592,-5.59h3.408v4h-2.287c-1.609,0 -1.713,0.6 -1.713,1.723v2.277h4z" fill="#ffffff"></path>
                </g>
            </g>
        </svg>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="36px"
  height="36px"
  viewBox="0,0,300,150"
  className="transition-colors duration-300 ease-in-out fill-current text-gray-600 hover:text-pink-600"
>
  <g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
    <g transform="scale(8.53333,8.53333)">
      <path d="M15,2c-7.168,0 -13,5.832 -13,13c0,7.168 5.832,13 13,13c7.168,0 13,-5.832 13,-13c0,-7.168 -5.832,-13 -13,-13zM11.66602,6h6.66602c3.125,0 5.66797,2.54202 5.66797,5.66602v6.66602c0,3.125 -2.54202,5.66797 -5.66602,5.66797h-6.66602c-3.125,0 -5.66797,-2.54202 -5.66797,-5.66602v-6.66602c0,-3.125 2.54202,-5.66797 5.66602,-5.66797zM11.66602,8c-2.021,0 -3.66602,1.64597 -3.66602,3.66797v6.66602c0,2.021 1.64597,3.66602 3.66797,3.66602h6.66602c2.021,0 3.66602,-1.64597 3.66602,-3.66797v-6.66601c0,-2.021 -1.64597,-3.66602 -3.66797,-3.66602zM19.66797,9.66602c0.368,0 0.66602,0.29802 0.66602,0.66602c0,0.368 -0.29801,0.66797 -0.66602,0.66797c-0.368,0 -0.66797,-0.29997 -0.66797,-0.66797c0,-0.368 0.29997,-0.66602 0.66797,-0.66602zM15,10c2.757,0 5,2.243 5,5c0,2.757 -2.243,5 -5,5c-2.757,0 -5,-2.243 -5,-5c0,-2.757 2.243,-5 5,-5zM15,12c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
    </g>
  </g>
</svg>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="36px"
  height="36px"
  viewBox="0 0 300 150"
  className="transition-colors duration-300 ease-in-out fill-current text-gray-600 hover:text-black"
>
  <g
    fill="currentColor"
    fill-rule="nonzero"
    stroke="none"
    stroke-width="1"
    stroke-linecap="butt"
    stroke-linejoin="miter"
    stroke-miterlimit="10"
    stroke-dasharray=""
    stroke-dashoffset="0"
    font-family="none"
    font-weight="none"
    font-size="none"
    text-anchor="none"
  >
    <g transform="scale(10.66667,10.66667)">
      <path
        d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.6,5 2.5,9.3 6.9,10.7v-2.3c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v3.3c4.1,-1.3 7,-5.1 7,-9.5c0,-6 -5.1,-10.7 -11.1,-10z"
      ></path>
    </g>
  </g>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="36px"
  height="36px"
  viewBox="0 0 300 150"
  className="transition-colors duration-300 ease-in-out fill-current text-gray-600 hover:text-[#1774ff]"
>
  <g
    fill="currentColor"
    fill-rule="nonzero"
    stroke="none"
    stroke-width="1"
    stroke-linecap="butt"
    stroke-linejoin="miter"
    stroke-miterlimit="10"
    stroke-dasharray=""
    stroke-dashoffset="0"
    font-family="none"
    font-weight="none"
    font-size="none"
    text-anchor="none"
  >
    <g transform="scale(4,4)">
      <path
        d="M32,6c-14.359,0 -26,11.641 -26,26c0,14.359 11.641,26 26,26c14.359,0 26,-11.641 26,-26c0,-14.359 -11.641,-26 -26,-26zM25,44h-5v-18h5zM22.485,24h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM44,44h-5v-9c0,-3 -1.446,-4 -3,-4c-1.445,0 -3,1 -3,4v9h-5v-18h5v3c0.343,-0.981 1.984,-3 5,-3c4,0 6,3 6,8z"
      ></path>
    </g>
  </g>
</svg>


</div>
          {/* <div className="flex flex-row justify-start items-start gap-6">
            <img src="img-url" alt="Image 1" />
            <img src="img-url" alt="Image 2" />
            <img src="img-url" alt="Image 3" />
            <img src="img-url" alt="Image 4" />
            <img src="img-url" alt="Image 5" />
          </div> */}
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Get Started</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Community</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Refund Policy</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <form onSubmit={handleSubmit}>
          <h6 className="footer-title">Subscribe to Newsletter</h6>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email address "
                className="input input-bordered h-[55px] sm:w-[239px]  join-item text-black placeholder-gray-400"
                required
              />
              <button type="submit" className="btn h-[55px] sm:w-[139px] btn-primary join-item">Join</button>
            </div>
            {feedback && <p className="feedback-message">{feedback}</p>}
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center py-6 border-[#8f8f8f] border-t">
        <p>
          &copy; Copyright {new Date().getFullYear()} All Rights Reserved by stract
        </p>
      </footer>
    </div>
  );
};

type HeadingProps = {
  color?: "text-[#171717]" | "text-[#5f5f5f]" | "text-white";
  children: string | JSX.Element 
};

export const FooterHeading = ({ children }: HeadingProps) => {
  return (
    <span className="text-base font-bold">
      {children}
    </span>
  );
};

export const FooterSubHeading = ({ children }: HeadingProps) => {
  return (
    <span className="text-sm font-normal">
      {children}
    </span>
  );
}