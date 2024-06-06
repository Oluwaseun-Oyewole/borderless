import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type IProps = { isLoading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: IProps) {
  return (
    <button
      {...rest}
      className={classNames(
        `rounded-[5px]
        `,
        className
      )}
    >
      {children}
    </button>
  );
}
