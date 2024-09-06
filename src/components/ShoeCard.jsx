const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
        ${
          bigShoeImg === imageURL.bigShoe ? `border-coral-red` : `border-transparent`
        } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        <img
          src={imageURL.thumbnail}
          alt="show collection"
          width={127}
          height={103}
          className="object-contain bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
