"use client";

import React from "react";
import Styles from "./formcontrol.module.scss";
import { FormControlVariant } from "@/enums/form";

interface BaseFormProps {
  label?: string;
  error?: string;
  hint?: string;
  align?: FormControlVariant;
  childrenWrapperClass?: string;
  isRequired?: boolean;
  infoElement?: JSX.Element;
  isMobile?: boolean;
  isKeyboardActive?: boolean;
}

export interface FormProps extends BaseFormProps {
  children: JSX.Element;
}

const getVariantClass = (
  variant: FormControlVariant = FormControlVariant.INLINE
): string => {
  switch (variant) {
    case FormControlVariant.COLUMN:
      return "Column";
    case FormControlVariant.INLINE:
      return "";
  }
};

const shouldAddText = (text?: string, classes?: string) => {
  if (text) {
    return <span className={classes}>{text}</span>;
  }
  return;
};

const FormControl = ({
  label,
  children,
  error,
  hint,
  align,
  childrenWrapperClass,
  isRequired,
  infoElement,
  isMobile = false,
  isKeyboardActive = false,
}: FormProps) => {
  let hintText;
  if (hint && align === FormControlVariant.COLUMN) {
    hintText = hint;
  }

  let errorClasses = `${Styles.formControlError}`;
  if (isMobile) {
    errorClasses = `${errorClasses} ${Styles.mobile}`;
  }
  let classes = `${Styles.childrenWrapperClass}`;
  if (isKeyboardActive) {
    classes = `${classes} ${Styles.keyboardActive}`;
  }

  return (
    <label className={Styles[`formControl${getVariantClass(align)}`]}>
      {label && (
        <span className={Styles[`formControlLabel${getVariantClass(align)}`]}>
          {label}
          {isRequired && <span className="text-red-200">*</span>}
        </span>
      )}
      {shouldAddText(hintText, Styles.formControlHint)}
      <div className={`${classes} ${childrenWrapperClass || ""}`}>
        {children}
        {infoElement}
        {shouldAddText(error, errorClasses)}
      </div>
    </label>
  );
};

export default FormControl;
