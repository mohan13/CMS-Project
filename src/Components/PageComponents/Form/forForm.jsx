import React from "react";
import { motion } from "framer-motion";
import TestContextProvider, {
  TestContext,
} from "../../../HOC/Context API/Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formData } from "./formData";
import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
});
const ForForm = () => {
  return (
    <TestContextProvider>
      <TestContext>
        {({ Users,createUser,setNewName }) => {
          return (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            >
              <Formik
                className="border p-8"
                initialValues={{
                  username: "",
                  email: "",
                }}
                validationSchema={schema}
                render={({ errors, touched, handleSubmit,handleChange }) => {
                  return (
                    <Form
                      onSubmit={handleSubmit}
                      className="border w-96 m-auto py-2 px-6"
                    >
                      {formData?.map((val, i) => {
                        return (
                          <div
                            key={i}
                            className="grid my-4 items-center text-left gap-4"
                          >
                            <label>{val.label}</label>
                            <div>
                              <Field
                                type={val.type}
                                name={val.name}
                                onChange={(event)=>{setNewName(event.target.value);handleChange(event)}}
                                className="outline-none bg-stone-300 w-full rounded-sm p-2"
                              />
                              <div className="text-red-600">
                                <ErrorMessage
                                  name={val.name}
                                  components={"div"}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex justify-evenly">
                        <button
                          className="p-3 bg-blue-200 rounded-sm drop-shadow-lg"
                          onClick={createUser}
                        >
                          Submit
                        </button>
                        <button
                          className="p-3 bg-red-200 rounded-sm drop-shadow-lg"
                          type="submit"
                        >
                          Cancel
                        </button>
                      </div>
                    </Form>
                  );
                }}
              />
            </motion.div>
          );
        }}
      </TestContext>
    </TestContextProvider>
  );
};

export default ForForm;
