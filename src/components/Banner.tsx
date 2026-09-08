// import React from 'react';

import BannerImg from "../assets/banner-main.png";
import BgImg from "../assets/bg-shadow.png";

const Banner = () => {
    return (
        <div
            className="container mt-7 mx-auto bg-[#121212] rounded-3xl bg-cover bg-center bg-no-repeat py-16 text-center"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            <img
                src={BannerImg}
                alt="Cricket"
                className="mx-auto w-48"
            />

            <h1 className="mt-8 text-4xl font-bold text-white">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="mt-4 text-xl text-gray-400">
                Beyond Boundaries Beyond Limits
            </p>

            <button className="mt-7 rounded-xl border border-lime-400 bg-lime-300 px-6 py-4 font-bold text-black">
                Claim Free Credit
            </button>
        </div>
    );
};

export default Banner;