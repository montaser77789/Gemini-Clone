import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      className="rounded-2xl
         border-gray-300 shadow-lg  focus:outline-none    px-3 py-3
          text-md w-full bg-[#f0f4f9]"
      {...rest}
    />
  );
});

export default Input;
