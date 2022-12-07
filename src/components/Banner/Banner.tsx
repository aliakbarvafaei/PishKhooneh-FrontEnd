import React from 'react';

const Banner:React.FC = () => {
    return (
    <div className="bg-navy h-[280px] w-full text-center">
        <h2 className="font-bold pt-[50px] mdmin:text-[40px] md:text-[30px] sm:text-[16px] text-lightGray">دقیق‌ترین پیش‌بینی قیمت خانه شما</h2>
        <button
          type="button"
          className="h-[50px] min-w-fit mt-[40px] smmin:px-[40px] sm:px-[20px] py-[15px] sm:py-[5px] smmin:pb-[30px] rounded-none bg-lightGray text-black font-extrabold text-[16px] sm:text-[12px] hover:bg-white hover:outline-red hover:outline-[2px] hover:outline-solid hover:text-red"
        >
          شروع پیش‌بینی
        </button>
      </div>
    );
}

export default Banner;