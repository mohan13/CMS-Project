import React from "react";
import { motion } from "framer-motion";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { formData } from "./formData";
import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
});
const ForForm = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ x: window.innerHeight, transition:{duration:0.1}}}
    >
      <Formik
        initialValues={{
          username: "",
          email: "",
        }}
        validationSchema={schema}
        render={({ errors, touched, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {formData?.map((val, i) => {
                return (
                  <div key={i} className="grid text-left gap-4">
                    <label>{val.label}</label>
                    <Field
                      type={val.type}
                      name={val.name}
                      className="outline-none bg-stone-300 p-2"
                    />
                    <ErrorMessage name={val.name} components={"div"} />
                  </div>
                );
              })}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      />
    </motion.div>
  );
};

export default ForForm;
