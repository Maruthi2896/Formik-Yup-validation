import * as Yup from "yup";
// Validation For Book add form
export const validationSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter name!"),
  aut: Yup.string().min(3).max(25).required("Please Enter Author name!"),
  number: Yup.string()
    .matches("^\\d{10}$", "Phone number is not valid")
    .required("Number Required!"),
  id: Yup.string().min(4).max(4).required("Please Enter Book Id!"),
  mail: Yup.string().email().required("Please Enter email!"),
  count: Yup.number().min(1).required("Please Enter No of Books Available!"),
});

//validation for Readers add form
export const validationSchema1 = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter name!"),
  book: Yup.string().min(6).max(30).required("Please Enter books list!"),
  number: Yup.string()
    .matches("^\\d{10}$", "Phone number is not valid")
    .required("Number Required!"),
  add: Yup.string().min(4).max(50).required("Please Enter Book Id!"),
  mail: Yup.string().email().required("Please Enter email!"),
  pin: Yup.string()
    .matches(/^(\d{4}|\d{6})$/, "Pincode is not valid")
    .required("PinCode Required!"),
});

//validation for Staff add form
export const validationSchema2 = Yup.object({
  Name: Yup.string().min(3).max(25).required("Please Enter name!"),
  Role: Yup.string().min(6).max(30).required("Please Enter Role!"),
  Duty: Yup.string()
    .min(8)
    .max(10)
    .required("Please Enter Duty Full Time or Part time!"),
});
