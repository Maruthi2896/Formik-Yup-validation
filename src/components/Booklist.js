import { Button, Card, TextField, styled } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation.js";

function Booklist() {
  const formik = useFormik({
    initialValues: {
      booksData: [
        {
          name: "Biology",
          Book_id: "bk01",
          author: "J B Guptha",
          publisher_mail: "phi@gmail.com",
          publisher_number: "9743572927",
          count: 28,
        },
        {
          name: "physics",
          Book_id: "bk02",
          author: "Agarwal",
          publisher_mail: "sarala@gmail.com",
          publisher_number: "12943869427",
          count: 53,
        },
        {
          name: "mathematics",
          Book_id: "bk03",
          author: "M K chandrashekar",
          publisher_mail: "adda247@gmail.com",
          publisher_number: "9873357292",
          count: 37,
        },
        {
          name: "Chemistry",
          Book_id: "bk04",
          author: "williams",
          publisher_mail: "phi@gmail.com",
          publisher_number: "9743572927",
          count: 54,
        },
        {
          name: "Botony",
          Book_id: "bk05",
          author: "Chandrashekar",
          publisher_mail: "adda247@gmail.com",
          publisher_number: "9873357292",
          count: 52,
        },
        {
          name: "Zoology",
          Book_id: "bk06",
          author: "v H devilliars",
          publisher_mail: "adda247@gmail.com",
          publisher_number: "9873357292",
          count: 32,
        },
        {
          name: "zeology",
          Book_id: "bk07",
          author: "v k mehtha",
          publisher_mail: "adda247@gmail.com",
          publisher_number: "9873357292",
          count: 43,
        },
      ],
      name: "",
      id: "",
      aut: "",
      mail: "",
      number: "",
      count: "",
    },
    onSubmit: () => {
      // console.log("New Book Registered Successfully");
    },
    validationSchema: validationSchema,
  });
  const SubmitNOW = () => {
    const errors = formik.errors;
    if (
      !(
        errors.name ||
        errors.id ||
        errors.aut ||
        errors.mail ||
        errors.number ||
        errors.count
      )
    ) {
      console.log(formik.errors);
      formik.values.booksData.push({
        name: formik.values.name,
        Book_id: formik.values.id,
        author: formik.values.aut,
        publisher_mail: formik.values.mail,
        publisher_number: formik.values.number,
        count: formik.values.count,
      });
      formik.values.name = "";
      formik.values.id = "";
      formik.values.aut = "";
      formik.values.mail = "";
      formik.values.number = "";
      formik.values.count = "";
      alert(`New Book Added successfully! Go to TOP of page to see List.`);
    }
  };
  return (
    <div style={{ dispaly: "flex", justifyContent: "center" }}>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h3>name</h3>
        <h3>author</h3>
        <h3>Book_id</h3>
        <h3>publisher_mail</h3>
        <h3>publisher_number</h3>
        <h3>available</h3>
      </Card>
      {formik.values.booksData.map((e) => (
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginLeft: "-100px",
            marginRight: "-100px",
          }}
        >
          <h3>{e.name}</h3>
          <h5>{e.author}</h5>
          <h5>{e.Book_id}</h5>
          <h5>{e.publisher_mail}</h5>
          <h5>{e.publisher_number}</h5>
          <h5>{e.count}</h5>
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
        <h2>Add new Book here</h2>
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
            <div style={{ backgroundColor: "Menu" }}>
              <h3 for="name">Book name:</h3>
              <input
                for="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
              />
              {formik.errors.name && formik.touched.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </div>
            <div>
              <h3 for="author">Author name:</h3>
              <input
                for="author"
                name="aut"
                type="text"
                value={formik.values.aut}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.aut && formik.touched.aut ? (
                <p>{formik.errors.aut}</p>
              ) : null}
            </div>
            <div>
              <h3 for="id">Book ID:</h3>
              <input
                for="id"
                name="id"
                type="text"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.id && formik.touched.id ? (
                <p>{formik.errors.id}</p>
              ) : null}
            </div>
            <div>
              <h3 for="mail">Publisher Mail:</h3>
              <input
                for="mail"
                name="mail"
                id="filled-basic"
                value={formik.values.mail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="mail"
                variant="filled"
              />
              {formik.errors.mail && formik.touched.mail ? (
                <p>{formik.errors.mail}</p>
              ) : null}
            </div>
            <div>
              <h3 for="number">Publisher Number:</h3>
              <input
                for="number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                id="filled-basic"
                onBlur={formik.handleBlur}
                label="Number"
                variant="filled"
              />
              {formik.errors.number && formik.touched.number ? (
                <p>{formik.errors.number}</p>
              ) : null}
            </div>
            <div>
              <h3 for="count">Available Books:</h3>
              <input
                for="name"
                value={formik.values.count}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="count"
                id="filled-basic"
                label="Book Available"
                variant="filled"
              />
              {formik.errors.count && formik.touched.count ? (
                <p>{formik.errors.count}</p>
              ) : null}
            </div>
            <br />
            <Button
              // disabled={formik.errors ? true : false}
              type="submit"
              variant="outlined"
              onClick={() => SubmitNOW()}
              style={{ margin: "50px" }}
            >
              Add new Book
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Booklist;
