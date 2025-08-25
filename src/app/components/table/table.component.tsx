import classNames from "classnames";
import { table } from "console";
import {
  DetailedHTMLProps,
  PropsWithChildren,
  TableHTMLAttributes,
} from "react";

export const TableData = ({ children }: { children: PropsWithChildren }) => {
  return children;
};

type TableProps = {
  head: string[];
  headerStyle?: string;
  selected?: string;
} & DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
export const Table = (props: TableProps) => {
  const className = props.className;
  return (
    <table
      className={classNames("w-full min-w-[10%]", className)}
      cellPadding={0}
    >
      <thead>
        <tr>
          {props.head.map((val, i) => (
            <th
              key={i}
              className={classNames(
                "text-md text-secondary text-start px-2",
                props.selected === val && props.headerStyle
              )}
            >
              {val}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};
