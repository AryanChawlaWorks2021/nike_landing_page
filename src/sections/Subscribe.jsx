import Button from "../components/Button";

const Subscribe = ({ label, fullWidth }) => {
  return (
    <section
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <div>
        <h3 className="font-palanquin leading-[68px] text-4xl lg:max-w-md justify-center font-bold">
          Sign Up for
          <span className="text-coral-red"> Updates </span>& Newsletter
        </h3>
      </div>
      <div className="lg:max-w-[40%] flex w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
