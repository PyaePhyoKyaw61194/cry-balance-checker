import React from "react";
import styles from "./button.module.scss";
import { ButtonIconDirection, ButtonSize, ButtonVariant } from "@/types/button";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  size?: ButtonSize;
  label: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconDirection?: ButtonIconDirection;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

/**
 * Button UI component
 */
export const Button = ({
  size = ButtonSize.MEDIUM,
  label,
  variant = ButtonVariant.PRIMARY,
  icon = undefined,
  fullWidth = false,
  className = "",
  iconDirection = ButtonIconDirection.LEFT,
  ...props
}: ButtonProps) => {
  const getSizeStyleClasses = (): string => {
    switch (size) {
      case ButtonSize.SMALL:
        return styles.small;
      case ButtonSize.MEDIUM:
        return styles.medium;
      case ButtonSize.LARGE:
        return styles.large;
      case ButtonSize.SMALL_MOBILE:
        return styles.small;
      case ButtonSize.MEDIUM_MOBILE:
        return styles.mediumMobile;
      case ButtonSize.LARGE_MOBILE:
        return styles.large;
    }
  };

  const getVariantStyleClasses = (): string => {
    switch (variant) {
      case ButtonVariant.OUTLINE:
        return styles.buttonOutline;
      case ButtonVariant.SECONDARY:
        return styles.buttonSecondary;
      case ButtonVariant.PRIMARY:
      default:
        return styles.buttonPrimary;
    }
  };

  const fullWithStyleClasses = fullWidth && "!w-full";

  return (
    <button
      autoFocus
      className={[
        styles.button,
        fullWithStyleClasses,
        getSizeStyleClasses(),
        getVariantStyleClasses(),
        className,
      ].join(" ")}
      {...props}
    >
      {icon && iconDirection === ButtonIconDirection.LEFT && icon}
      <span>{label}</span>
      {icon && iconDirection === ButtonIconDirection.RIGHT && icon}
    </button>
  );
};
