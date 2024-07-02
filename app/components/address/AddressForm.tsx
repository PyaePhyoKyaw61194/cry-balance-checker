"use client";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./addressForm.module.scss";
import { Field, Form, Formik, FormikProps } from "formik";
import FormControl from "../forms/FormControl";
import { FormControlVariant } from "@/enums/form";
import Input from "../forms/Input";
import { Button } from "../buttons/Button";
import { object, string } from "yup";

const AddressForm = () => {
  const formikRef = useRef<FormikProps<{
    username: string;
    password: string;
  }> | null>();

  const handleButtonValue = (isLoading: boolean) => {
    if (isLoading) {
      return "Loading...";
    }
    return "Add";
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (username: string, password: string) => {
    console.log({ username, password });
    /*  try {
      setIsLoading(true);
      await login(username, password);
      showToastSuccess("Success");
      router.push(mobileRoute(Routes.HOME));
      setIsOpenLoginModal(false);
    } catch (error) {
      handleErrors(error as GenericApiError);
    }
    setIsLoading(false); */
  };
  const validationsSchema = object({
    username: string().required("username is required"),
    password: string().required("password is required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationsSchema}
        validateOnChange
        isInitialValid={false}
        onSubmit={(values) => {
          handleSubmit(values.username, values.password);
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
          const passwordError =
            ((touched.password || values.password) && errors.password) || "";
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
                  autoComplete="current-password"
                  placeholder="Please input username"
                  onChange={(e) => setFieldValue("username", e.target.value)}
                  onBlur={() => setFieldTouched("username")}
                  isMobile={true}
                  error={Boolean(usernameError)}
                />
              </FormControl>

              <FormControl
                label="address"
                error={passwordError}
                align={FormControlVariant.COLUMN}
                isMobile
              >
                <Input
                  name="address"
                  maxLength={50}
                  autoFocus={false}
                  value={values.password}
                  autoComplete="current-password"
                  placeholder="Please input address"
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  onBlur={() => setFieldTouched("password")}
                  isMobile={true}
                  error={Boolean(passwordError)}
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
