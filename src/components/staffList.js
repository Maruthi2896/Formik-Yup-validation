import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema2 } from "./validation.js";

function StaffList() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Role: "",
      Duty: "",
      staffs: [
        {
          name: "Jayanna",
          Role: "Manager",
          duty: "Full time",
        },
        {
          name: "Maruthi K J",
          Role: " Asst Manager",
          duty: "Full time",
        },
        {
          name: "Madhushree",
          Role: "Junior Asst manager ",
          duty: "Full time",
        },
        {
          name: "Santhosh",
          Role: "Attendant",
          duty: "Full time",
        },
        {
          name: "Gururaj",
          Role: "Store keeper",
          duty: "Full time",
        },
        {
          name: "Rangaswamy",
          Role: "Maintainance and cleaner",
          duty: "Part time",
        },
        {
          name: "Manjunath",
          Role: "Gumasta",
          duty: "Part time",
        },
      ],
    },
    onSubmit: () => {},
    validationSchema: validationSchema2,
  });

  const SubmitNOW = () => {
    const errors = formik.errors;
    if (!(errors.Name || errors.Role || errors.Duty)) {
      formik.values.staffs.push({
        name: formik.values.Name,
        Role: formik.values.Role,
        duty: formik.values.Duty,
      });
      formik.values.Name = "";
      formik.values.Role = "";
      formik.values.Duty = "";

      alert(`New Staff Added successfully! Go to TOP of page to see List.`);
    }
  };
  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h3>Name</h3>
        <h3>Role</h3>
        <h3>Duty</h3>
      </Card>
      {formik.values.staffs.map((e) => (
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginLeft: "-100px",
            marginRight: "-100px",
            gap: "30px",
          }}
        >
          <h3>{e.name}</h3>
          <h3>{e.Role}</h3>
          <h3>{e.duty}</h3>
        </Card>
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <h2>Add new Staff</h2>
        <Card
          style={{
            width: 800,
            Height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h3 for="author">Staff Name:</h3>
              <input
                for="author"
                name="Name"
                type="text"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Name && formik.touched.Name ? (
                <p>{formik.errors.Name}</p>
              ) : null}
            </div>
            <div>
              <h3 for="role">Staff Role:</h3>
              <input
                for="role"
                name="Role"
                value={formik.values.Role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
              />
              {formik.errors.Role && formik.touched.Role ? (
                <p>{formik.errors.Role}</p>
              ) : null}
            </div>
            <div>
              <h3 for="id">Staff Duty:</h3>
              <input
                for="id"
                name="Duty"
                type="text"
                value={formik.values.Duty}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Duty && formik.touched.Duty ? (
                <p>{formik.errors.Duty}</p>
              ) : null}
            </div>
            <br />
            <Button
              type="submit"
              variant="outlined"
              onClick={() => SubmitNOW()}
              style={{ margin: "50px" }}
            >
              Add Staff
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default StaffList;
