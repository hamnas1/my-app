import React from "react";

export default function ComingSoonPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background Blur Elements */}
        <div className="absolute -left-[150px] top-[-100px] w-[351.8px] h-[281.1px] bg-[#2279fc] -z-10 filter blur-[250px] md:-left-[120px] md:top-[-70px] md:w-[300px] md:h-[271.1px]"></div>
        <div className="absolute bottom-0 right-0 w-[351.8px] h-[281.1px] bg-[#e88b00] -z-10 filter blur-[250px] md:right-0 md:bottom-0 md:w-[300px] md:h-[271.1px]"></div>

        {/* Existing Square SVG */}
        <div className="absolute top-[694px] left-[120px] w-[40px] h-[40px] flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="#D9DBE9"/>
          </svg>
        </div>

        {/* New SVG with Orange Stroke */}
        <div className="absolute top-[690px] right-[183.3px] w-[71px] h-[24px]">
          <svg width="71" height="24" viewBox="0 0 71 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.94141 20.7802C7.52414 15.6532 12.3021 11.4763 17.8619 8.61083C23.4217 5.74536 29.5959 4.27763 35.8504 4.33461C42.1049 4.39159 48.2514 5.97156 53.7581 8.93785C59.2647 11.9041 63.9658 16.1674 67.4545 21.3588" stroke="#E2A21F" strokeWidth="8"/>
          </svg>
        </div>

        {/* Existing Triangle SVG */}
        <div className="absolute top-[69.6px] left-[101.2px] w-[42px] h-[37px] flex items-center justify-center">
          <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0004 0.333008L41.785 36.333H0.21582L21.0004 0.333008Z" fill="#00CC67"/>
          </svg>
        </div>

        {/* Existing Circle SVG with Red Stroke */}
        <div className="absolute top-[60.3px] right-[220px] w-[56px] h-[56px] flex items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52 27.8359C52 40.753 41.3219 51.3447 28 51.3447C14.6781 51.3447 4 40.753 4 27.8359C4 14.9188 14.6781 4.32715 28 4.32715C41.3219 4.32715 52 14.9188 52 27.8359Z" stroke="#E40173" strokeWidth="8"/>
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6">
          <span className="font-roboto text-xl md:text-base lg:text-base font-medium text-black text-center mb-4">
            COMING SOON
          </span>

          <div className="max-w-4xl mx-auto px-4 lg:px-0 mb-4">
            <span className="font-roboto text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center text-[#181a1e] block">
              We're bringing something exciting for you soon!
              
            </span>
            
          </div>

          <span className="font-roboto text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wide text-center text-[#5f5f5f] w-full max-w-4xl mb-4">
            Get ready to master Flutter and build stunning apps. Enter your email to be notified about our launch and stay tuned for more details!
          </span>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 w-full max-w-2xl">
            <div className="relative flex-1">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-[#d0cfd2] bg-white pl-10 focus:outline-none"
                placeholder="olivia123@gmail.com"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              >
                <path
                  d="M18.3327 5.00016C18.3327 4.0835 17.5827 3.3335 16.666 3.3335H3.33268C2.41602 3.3335 1.66602 4.0835 1.66602 5.00016M18.3327 5.00016V15.0002C18.3327 15.9168 17.5827 16.6668 16.666 16.6668H3.33268C2.41602 16.6668 1.66602 15.9168 1.66602 15.0002V5.00016M18.3327 5.00016L9.99935 10.8335L1.66602 5.00016"
                  stroke="#6A6A70"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute left-3 bottom-[-1.5rem] font-roboto text-[14px] font-normal text-[#00081a] text-left">
                *Don't worry we won’t spam you.
              </span>
            </div>
            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#1774ff] text-white">
              Notify Me
            </button>
          </div>

          <div className="w-full max-w-2xl mb-6 flex items-center justify-center">
            <div className="relative w-full flex items-center">
              <div className="flex-grow h-px bg-[#eee]"></div>
              <span className="mx-4 font-roboto text-sm text-[#8f8f8f]">OR</span>
              <div className="flex-grow h-px bg-[#eee]"></div>
            </div>
          </div>

          <div className="w-full max-w-2xl flex flex-col items-center justify-center">
            <div className="relative w-full flex items-start justify-start mb-4">
              <span className="font-roboto text-[14px] font-normal leading-[1.43] text-[#00081a]">
                Join our Discord channel
              </span>
            </div>
            <span className="h-[36px] self-stretch flex flex-row justify-start items-start gap-[10px] p-[8px] px-[12px] rounded-[8px] bg-[#f5f9ff] mb-4">
              <span className="w-[20px] h-[20px] mr-[10px] object-contain">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.4922 14.5832H13.7505C16.2672 14.5832 18.3339 12.5248 18.3339 9.99984C18.3339 7.48317 16.2755 5.4165 13.7505 5.4165H12.4922" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.49935 5.4165H6.24935C3.72435 5.4165 1.66602 7.47484 1.66602 9.99984C1.66602 12.5165 3.72435 14.5832 6.24935 14.5832H7.49935" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.66602 10H13.3327" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="w-[258px] h-[20px] flex-grow-0 font-roboto text-[14px] font-normal leading-[1.43] text-left text-[#00081a]">
                https://www.100dayofflutter/discord.com
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
