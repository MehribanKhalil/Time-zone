import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = ({createProduct}) => {
  return (
    <div>
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        validationSchema={Yup.object({
          image:
            Yup.string()
            .required("Required"),
          title: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
          price: Yup.number()
            .positive("price must be positive")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
            createProduct(values)
            resetForm()
        }}
      >
        <Form className=" bg-gray-200 flex flex-col gap-4 rounded-xl p-10 max-w-[700px] mx-auto">
          <div className=" flex flex-col gap-2 text-center">
            <Field name="image" type="text" placeholder="Image" className=' px-6 py-2 rounded-full  outline-none border border-red-600' />
            <ErrorMessage name="image" />
          </div>

          <div className=" flex flex-col gap-2 text-center">
            <Field name="title" type="text" placeholder="Title" className=' px-6 py-2 rounded-full  outline-none border border-red-600' />
            <ErrorMessage name="title" />
          </div>

          <div className=" flex flex-col gap-2 text-center">
            <Field name="price" type="price" placeholder="Price" className=' px-6 py-2 rounded-full  outline-none border border-red-600' />
            <ErrorMessage name="price" />
          </div>

          <div className=" flex justify-center pt-6">
          <button type="submit" className=" bg-red-600  rounded-2xl text-white px-4 py-2 ">Add</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
