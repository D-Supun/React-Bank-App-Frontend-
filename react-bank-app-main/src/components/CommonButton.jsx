const CommonButton = ({ btnText }) => {
  return (
    <button
      type="button"
      className="py-4 px-8 rounded-full w-fit capitalize bg-blue-gradient text-primary font-bold text-lg neon-hover transition-all duration-300"
    >
      <a href="#">
        {btnText}
      </a>
    </button>
  );
};

export default CommonButton;
