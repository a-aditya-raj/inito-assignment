interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="flex flex-col justify-center text-sm tracking-wide text-white z-[2]">
      <div className="justify-center py-2 px-9 md:py-3 bg-cyan-600 rounded-3xl max-md:px-5">
        {text}
      </div>
    </button>
  );
};

export default Button;