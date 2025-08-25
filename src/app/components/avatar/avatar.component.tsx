import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
type AvatarProps = { name?: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Avatar = (props: AvatarProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const initial = hasMounted
    ? props.name?.slice(0, 1)?.toUpperCase() ?? "A"
    : "";
  return (
    <div
      className={[
        " flex flex-col items-center justify-center relative w-full max-w-[50px] h-[50px] rounded-[50%] bg-gray-400 ",
        props.className,
      ].join(" ")}
    >
      {initial}
    </div>
  );
};
