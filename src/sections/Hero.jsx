import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 mt-10">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collections
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[84] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
          </h1>
          <p className="font-montserrat sm:max-w-sm text-slate-gray text-lg leading-8 mt-6 mb-14">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="shop now" iconURL={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="font-montserrat leading-7 text-slate-gray ">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center xl:min-h-screen items-center max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="relative z-10 object-contain"
          />

          <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imageURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
