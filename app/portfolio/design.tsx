const DesignPage = () => {
  return (
    <>
      <h3 className="  pl-80 text-5xl w-945px h-54px pb-4  font-roboto pr-415 pt-32 text-48px font-medium tracking-0.4px text-[#171717] text-left align-middle leading-1.13 flex-grow-0">
        {" "}
        A{" "}
        <b className="text-5xl text-blue-600  w-945px h-54px  font-roboto pb-4 text-48px font-medium tracking-0.4px text-left align-middle pt-32 leading-1.13 flex-grow-0">
          community
        </b>{" "}
        of passionate Flutter learners{" "}
      </h3>
      <p className=" pl-80 pr-80 pt-1280 h-120px text-left self-stretch flex-grow-0 opacity-85 text-xl font-roboto font-normal not-italic leading-6 tracking-normal text-[#5f5f5f] ">
        {" "}
        Our mission is to make learning Flutter accessible and fun for everyone.
        Comprehensive, interactive, and practical learning experience. Join a
        community of passionate learners, help each other grow, and build
        amazing applications together. Our mission is to make learning Flutter
        accessible and fun for everyone. Comprehensive, interactive, and
        practical learning experience. Join a community of passionate learners,
        help each other grow, and build amazing applications together.
      </p>

      <div className="flex flex-row gap-8 p-[101.8px]">
        <div className=" w-96 h-96 flex flex-col justify-start items-center gap-10 p-6 rounded-lg border border-gray-300 bg-gray-50">
          <div className=" w-26 h-8 flex flex-row justify-start items-center gap-2 p-2">
            <span className="w-8 h-4 font-[roboto] text-xs font-medium leading-4 tracking-wide text-center text-gray-700">
              {" "}
              FREE
            </span>
          </div>
          <span className="w-[101.9px] h-20 font-[roboto] text-[58px] font-bold leading-[1.38] tracking-[1.16px] text-center text-gray-700">
            $0
          </span>
          <div className="w-[342.8px] h-18 font-[roboto] text-base font-normal leading-[2.19] tracking-normal text-center text-gray-600">
            Learn for free
            <br />
            Track your progress
          </div>
          <button className="h-12 w-full flex flex-row justify-center items-center gap-2 p-3 rounded-lg bg-blue-100">
            <span className="w-30 h-6 font-[roboto] text-base font-medium leading-6 text-center text-blue-500">
              {" "}
              Get Started Now
            </span>
          </button>
        </div>
        <div className="w-96 h-117 flex flex-col justify-start items-center gap-10 p-6 rounded-lg border border-gray-700 bg-gray-900">
          <div className="w-26 h-8 flex flex-row justify-start items-center gap-2 p-2">
            <span className="w-16 h-4 flex-grow-0 font-[roboto] text-xs font-medium leading-4 tracking-wider text-center text-white">
              Monthly
            </span>
          </div>

          <span className="h-20 self-stretch flex-grow-0 font-[roboto] text-5xl font-bold leading-7 tracking-wide text-center text-white">
            $24.99
          </span>

          <div className="w-86 h-35 flex-grow-0 font-[roboto] text-base font-normal leading-6 text-center text-white">
            Track your progress <br />
            Get access to supportive community
            <br />
            Weekly group QnAs
            <br />
            Test assessments & certificates
            <br />
          </div>

          <button className="h-12 self-stretch flex flex-row justify-center items-center gap-2 p-3 rounded-lg bg-blue-500">
            <span className="w-30 h-6 flex-grow-0 font-[roboto] text-base font-medium leading-6 text-left text-white">
              Get Started Now
            </span>
          </button>
        </div>

        <div className="w-96 h-117 flex flex-col justify-start items-center gap-10 p-6 rounded-lg border border-gray-300 bg-gray-100">
          <div className="w-26 h-8 flex flex-row justify-start items-center gap-2 p-2">
            <span className="w-12 h-4 flex-grow-0 font-[roboto] text-xs font-medium leading-4 tracking-wide text-center text-gray-800">
              YEARLY
            </span>
          </div>

          <div className="h-20 self-stretch flex-grow-0 font-[roboto] text-lg font-medium leading-20 tracking-tight text-center text-gray-700">
            <span className="text-4xl font-bold tracking-wide">$50.99</span>
          </div>

          <div className="w-85 h-35 flex-grow-0 font-[roboto] text-base font-normal leading-7 text-center text-gray-600">
            Track your progress <br />
            Get access to supportive community
            <br />
            Weekly group QnAs
            <br />
            Test assessments & certificates
            <br />
          </div>

          <button className="h-12 self-stretch flex flex-row justify-center items-center gap-2 p-3 rounded-lg bg-blue-100">
            <span className="w-30 h-6 flex-grow-0 font-[roboto] text-base font-medium leading-6 text-center text-blue-500">
              Get Started Now
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default DesignPage;
