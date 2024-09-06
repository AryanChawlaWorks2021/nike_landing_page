import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="justify-start mt-8 gap-2.5 flex">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl leading-normal font-semibold font-palanquin mt-2">
        {name}
      </h3>
      <p className="text-coral-red text-xl font-montserrat mt-2 font-semibold leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
