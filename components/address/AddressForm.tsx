"use client";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./addressForm.module.scss";
import { Field, Form, Formik, FormikProps } from "formik";
import FormControl from "../forms/FormControl";
import { FormControlVariant } from "@/enums/form";
import Input from "../forms/Input";
import { Button } from "../buttons/Button";
import { object, string } from "yup";
import useBalance from "@/hooks/useBalance";
import useAddress from "@/hooks/useAddress";

const AddressForm = () => {
  const handleButtonValue = (isLoading: boolean) => {
    if (isLoading) {
      return "Loading...";
    }
    return "Add";
  };

  const [isLoading, setIsLoading] = useState(false);
  const { balance } = useBalance();
  const { addAddress } = useAddress();

  const handleSubmit = async (username: string, address: string) => {
    try {
      setIsLoading(true);
      await addAddress(username, address);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const validationsSchema = object({
    username: string().required("username is required"),
    address: string().required("address is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          address: "",
        }}
        validationSchema={validationsSchema}
        validateOnChange
        isInitialValid={false}
        onSubmit={(values) => {
          handleSubmit(values.username, values.address);
        }}
        validateOnMount={false}
      >
        {(props) => {
          const {
            handleSubmit,
            errors,
            setFieldValue,
            values,
            isValid,
            touched,
            setFieldTouched,
          } = props;

          const usernameError =
            ((touched.username || values.username) && errors.username) || "";
          const addressError =
            ((touched.address || values.address) && errors.address) || "";
          return (
            <Form onSubmit={handleSubmit} autoFocus className={styles.form}>
              <FormControl
                label="username"
                error={usernameError}
                align={FormControlVariant.COLUMN}
                isMobile
              >
                <Input
                  name="username"
                  maxLength={50}
                  autoFocus={false}
                  value={values.username}
                  autoComplete="current-address"
                  placeholder="Please input username"
                  onChange={(e) => setFieldValue("username", e.target.value)}
                  onBlur={() => setFieldTouched("username")}
                  isMobile={true}
                  error={Boolean(usernameError)}
                />
              </FormControl>

              <FormControl
                label="address"
                error={addressError}
                align={FormControlVariant.COLUMN}
                isMobile
              >
                <Input
                  name="address"
                  maxLength={50}
                  autoFocus={false}
                  value={values.address}
                  autoComplete="current-address"
                  placeholder="Please input address"
                  onChange={(e) => setFieldValue("address", e.target.value)}
                  onBlur={() => setFieldTouched("address")}
                  isMobile={true}
                  error={Boolean(addressError)}
                />
              </FormControl>

              <div className={styles.containerButtons}>
                <Button
                  type="submit"
                  disabled={!isValid || isLoading}
                  label={handleButtonValue(isLoading)}
                  className={`${styles.button} ${styles.buttonRight}`}
                  fullWidth
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddressForm;
