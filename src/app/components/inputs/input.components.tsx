import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; error?: boolean | string };
export const Input = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col gap-1 text-sm">
      {props.label && (
        <span className="text-sm font-semibold">{props.label}</span>
      )}
      <div
        className={classNames(
          "flex items-center outline-none border  px-4 py-2",
          props.className,
          { " border-slate-500": !props.error },
          { "border-red-400": props.error }
        )}
      >
        <input
          {...props}
          type={
            props.type === "password"
              ? isVisible
                ? "text"
                : "password"
              : props.type
          }
          className="w-full outline-none bg-transparent"
        />
        {props.type === "password" && (
          <span
            className="cursor-pointer ml-2"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      {props.error && <p className="text-xs text-red-300">{props.error}</p>}
    </div>
  );
};
