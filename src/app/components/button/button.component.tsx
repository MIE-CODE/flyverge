import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Spinner } from "../spinner/spinner.component";
import classNames from "classnames";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  spinner?: boolean;
};

export const Button = ({ spinner = false, children, ...rest }: ButtonProps) => {
  const className = rest.className;
  return (
    <button
      {...rest}
      className={classNames(
        "flex justify-center items-center border  rounded mt-4 cursor-default h-[42px] w-full max-w-[100px] text-sm font-bold",
        { "border-slate-500": !className },
        {
          "opacity-50 select-none": rest.disabled,
          "hover:text-slate-50/75 active:text-white transition-colors duration-150 cursor-pointer":
            !rest.disabled,
        },
        className
      )}
    >
      {spinner ? <Spinner /> : children}
    </button>
  );
};
