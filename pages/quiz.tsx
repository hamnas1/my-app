import React, { useState } from 'react';

const QuizComponent: React.FC = () => {
  // State for managing the selected option
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Handle change in selection
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className="
        self-stretch
        flex-grow-0
        flex
        flex-col
        justify-start
        items-stretch
        w-[795px]
        p-[32px_64px]
        rounded-[12px]
        bg-[#f1f2f6]
      "
    >
      <div
        className="
          h-[100px]
          self-stretch
          flex-grow-0
          flex
          flex-col
          justify-start
          items-center
          gap-[16px]
          p-0
        "
      >
        <div
          className="
            w-[32px]
            h-[32px]
            flex-grow-0
            flex
            flex-col
            justify-center
            items-center
            gap-[10px]
            p-[8px]
            rounded-full
            bg-[#1774ff]
          "
        >
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.96094 8.79688H2.50781C2.51302 8.29688 2.55729 7.88802 2.64062 7.57031C2.72917 7.2474 2.8724 6.95312 3.07031 6.6875C3.26823 6.42188 3.53125 6.11979 3.85938 5.78125C4.09896 5.53646 4.31771 5.30729 4.51562 5.09375C4.71875 4.875 4.88281 4.64062 5.00781 4.39062C5.13281 4.13542 5.19531 3.83073 5.19531 3.47656C5.19531 3.11719 5.13021 2.80729 5 2.54688C4.875 2.28646 4.6875 2.08594 4.4375 1.94531C4.19271 1.80469 3.88802 1.73438 3.52344 1.73438C3.22135 1.73438 2.9349 1.78906 2.66406 1.89844C2.39323 2.00781 2.17448 2.17708 2.00781 2.40625C1.84115 2.63021 1.75521 2.92448 1.75 3.28906H0.304688C0.315104 2.70052 0.460938 2.19531 0.742188 1.77344C1.02865 1.35156 1.41406 1.02865 1.89844 0.804688C2.38281 0.580729 2.92448 0.46875 3.52344 0.46875C4.1849 0.46875 4.7474 0.588542 5.21094 0.828125C5.67969 1.06771 6.03646 1.41146 6.28125 1.85938C6.52604 2.30208 6.64844 2.82812 6.64844 3.4375C6.64844 3.90625 6.55208 4.33854 6.35938 4.73438C6.17188 5.125 5.92969 5.49219 5.63281 5.83594C5.33594 6.17969 5.02083 6.50781 4.6875 6.82031C4.40104 7.08594 4.20833 7.38542 4.10938 7.71875C4.01042 8.05208 3.96094 8.41146 3.96094 8.79688ZM2.44531 11.2734C2.44531 11.0391 2.51823 10.8411 2.66406 10.6797C2.8099 10.5182 3.02083 10.4375 3.29688 10.4375C3.57812 10.4375 3.79167 10.5182 3.9375 10.6797C4.08333 10.8411 4.15625 11.0391 4.15625 11.2734C4.15625 11.4974 4.08333 11.6901 3.9375 11.8516C3.79167 12.013 3.57812 12.0938 3.29688 12.0938C3.02083 12.0938 2.8099 12.013 2.66406 11.8516C2.51823 11.6901 2.44531 11.4974 2.44531 11.2734Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className="
            self-stretch
            flex-grow-0
            text-[20px]
            font-medium
            leading-[1.4]
            text-center
            text-[#2d2d2d]
          "
        >
          It's time to take a Quiz
        </div>
        <div
          className="
            self-stretch
            flex-grow-0
            text-[14px]
            text-center
            text-[#2d2d2d]
          "
        >
          Test your knowledge and see what you’ve just learned.
        </div>
      </div>
      <div
        className="
          self-stretch
          flex-grow-0
          flex
          flex-col
          justify-start
          items-end
          mt-[24px]
          p-[24px]
          rounded-[8px]
          border
          border-[#eee]
          bg-white
        "
      >
        <div
          className="
            h-[56px]
            self-stretch
            flex-grow-0
            text-[16px]
            leading-[1.75]
            text-center
            text-[#171717]
          "
        >
          Search for ‘clsx’ in your code editor, what components use it to conditionally apply class names?
        </div>
        <div
          className="
            h-[56px]
            self-stretch
            flex-grow-0
            flex
            flex-col
            justify-center
            items-start
            gap-[8px]
            p-[12px_16px]
            border
            border-[#eee]
          "
        >
          <label className="block mb-[8px]">
            <input
              type="radio"
              name="quiz-option"
              value="‘status.tsx’ and ‘pagination.tsx’"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
              className="mr-[8px]"
            />
    
          </label>
          <label className="block mb-[8px]">
            <input
              type="radio"
              name="quiz-option"
              value="‘table.tsx’ and ‘status.tsx’"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              className="mr-[8px]"
            />
          </label>
          <label className="block mb-[8px]">
            <input
              type="radio"
              name="quiz-option"
              value="‘nav-links.tsx’ and ‘table.tsx’"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              className="mr-[8px]"
            />
            
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
