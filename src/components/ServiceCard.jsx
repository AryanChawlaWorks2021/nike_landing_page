const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[30px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg break-words leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
