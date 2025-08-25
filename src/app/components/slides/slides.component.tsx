"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { Button } from "../button/button.component";
type SlideProps = {
  children: ReactElement;
  url?: StaticImport | string;
  position?: string;
};
export const Slide = (props: SlideProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full p-10">
      {props.url && (
        <Image
          src={props?.url}
          alt="slide image"
          fill
          style={{ objectFit: "cover" }}
          sizes="x1"
        />
      )}

      <div
        className="w-full relative z-[1]"
        style={{
          alignItems: props.position,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export const Slides = ({ children }: { children: ReactElement[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % children.length),
      60 * 200
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-full">
      {children.map((child, i) => (
        <div
          className={[
            "w-full transition duration-300 ease-in-out ",
            i === index ? "opacity-100 z-10" : "opacity-0 z-0",
          ].join(" ")}
          key={i}
        >
          {child}
        </div>
      ))}
      <div className="flex justify-center items-center gap-6 w-full absolute bottom-3 ">
        {children.map((_, i) => (
          <div
            key={i}
            className={[
              "z-10 w-3 h-3 border-2 border-slate-500 rounded-[50%]",
              i === index ? "bg-background" : "bg-transparent",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
};
