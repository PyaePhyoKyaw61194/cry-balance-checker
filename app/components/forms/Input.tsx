import React from "react";
import Styles from "./input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  iconOnLeft?: boolean;
  isMobile?: boolean;
  error?: boolean;
  extraClasses?: string[];
  allowOnlyNumbers?: boolean;
}

const shouldAddIcon = (onLeft: boolean = false, icon?: JSX.Element) => {
  if (icon) {
    let iconClassName = `${Styles.inputIcon} right-[8px]`;
    if (onLeft) {
      iconClassName = `${Styles.inputIcon} left-[8px]`;
    }
    return <span className={iconClassName}>{icon}</span>;
  }
  return;
};

const Input = ({
  icon,
  iconOnLeft,
  error,
  isMobile,
  extraClasses,
  allowOnlyNumbers,
  ...rest
}: Props) => {
  let inputPadding = "px-[8px] py-[7.5px]";
  if (icon) {
    if (iconOnLeft) {
      inputPadding = "py-[7.5px] pr-[8px] pl-[28px]";
    } else {
      inputPadding = "py-[7.5px] pl-[8px] pr-[28px]";
    }
  }

  let inputClasses = `${Styles.input} ${inputPadding}`;

  if (extraClasses) {
    extraClasses.map((item) => {
      return (inputClasses = `${inputClasses} ${Styles[item]}`);
    });
  }

  if (isMobile) {
    inputClasses = `${inputClasses} ${Styles.mobile}`;
  }

  if (error) {
    inputClasses = `${inputClasses} ${Styles.error}`;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (allowOnlyNumbers) {
      event.preventDefault();
    }
  };

  return (
    <div className={Styles.inputWrapper}>
      <input className={inputClasses} {...rest} onKeyDown={handleKeyDown} />
      {shouldAddIcon(!!iconOnLeft, icon)}
    </div>
  );
};

export default Input;
