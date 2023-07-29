import React, { useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema1 } from "./validation.js";

function ReaderList() {
  const formik = useFormik({
    initialValues: {
      readersData: [
        {
          name: "maruthi k j",
          book_taken: ["Biology", "Botony", "mathematics", "Zoology"],
          mail: "maruthikj4@gmail.com",
          number: "9663458560",
          address: "rangapura,jagaalur",
          pincode: "577528",
        },
        {
          name: "sushma j r",
          book_taken: ["physics", "Biology", "zeology", "zoology", "Chemisrty"],
          mail: "sushma4@gmail.com",
          number: "9663458560",
          address: "davanagere,jagaalur",
          pincode: "577528",
        },
        {
          name: "jose iruday",
          book_taken: ["Chemistry", "mathematics"],
          mail: "joseIru4@gmail.com",
          number: "9663458560",
          address: "tamalehalli,jagalur",
          pincode: "577528",
        },
        {
          name: "sandya jadav",
          book_taken: ["Biology", "physics", "biology"],
          mail: "maruthikj4@gmail.com",
          number: "9663458560",
          address: "rangapura,jagalur",
          pincode: "577528",
        },
        {
          name: "lohith m patil",
          book_taken: ["zoology", "mathematics", "zeology", "physics"],
          mail: "maruthikj4@gmail.com",
          number: "9663458560",
          address: "rangapura,jagaalur",
          pincode: "577528",
        },
        {
          name: "Gururaj",
          book_taken: ["mathematics", "chemistry", "physics", "zoology"],
          mail: "maruthikj4@gmail.com",
          number: "9663458560",
          address: "rangapura,jagaalur",
          pincode: "577528",
        },
        {
          name: "dhanusha g p",
          book_taken: ["botony", "zoology", "zeology", "mathematics"],
          mail: "maruthikj4@gmail.com",
          number: "9663458560",
          address: "rangapura,jagaalur",
          pincode: "577528",
        },
      ],
      name: "",
      book: [],
      add: "",
      mail: "",
      number: "",
      pin: "",
    },
    onSubmit: () => {
      // console.log("New Book Registered Successfully");
    },
    validationSchema: validationSchema1,
  });
  const SubmitNOW = () => {
    const errors = formik.errors;
    if (
      !(
        errors.name ||
        errors.book ||
        errors.add ||
        errors.mail ||
        errors.number ||
        errors.pin
      )
    ) {
      console.log(formik.errors);
      formik.values.readersData.push({
        name: formik.values.name,
        book_taken: [...formik.values.book.split(",")],
        address: formik.values.add,
        mail: formik.values.mail,
        number: formik.values.number,
        pincode: formik.values.pin,
      });
      formik.values.name = "";
      formik.values.book = "";
      formik.values.add = "";
      formik.values.mail = "";
      formik.values.number = "";
      formik.values.pin = "";
      alert(`New Reader Added successfully! Go to TOP of page to see List.`);
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
        <h3>Books Issued</h3>
        <h3>Number</h3>
        <h3>Mail</h3>
        <h3>Address</h3>
        <h3>Pin</h3>
      </Card>
      {formik.values.readersData.map((e) => (
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
          <h5>{e.name}</h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {e.book_taken.map((e) => (
              <h5>{e}</h5>
            ))}
          </div>
          <h5>{e.number}</h5>
          <h5>{e.mail}</h5>
          <h5>{e.address}</h5>
          <h5>{e.pincode}</h5>
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
        <h2>Add new Readers here</h2>
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
              <h3 for="name">Reader name:</h3>
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
              <h3 for="author">Issued Books List:</h3>
              <input
                for="author"
                name="book"
                placeholder="Put coma between  each books name"
                type="text"
                value={formik.values.book}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.book && formik.touched.book ? (
                <p>{formik.errors.book}</p>
              ) : null}
            </div>
            <div>
              <h3 for="id">Reader Address:</h3>
              <input
                for="id"
                name="add"
                type="text"
                value={formik.values.add}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.add && formik.touched.add ? (
                <p>{formik.errors.add}</p>
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
              <h3 for="number">Reader Number:</h3>
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
              <h3 for="count">PinCode:</h3>
              <input
                for="pin"
                value={formik.values.count}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="pin"
                id="filled-basic"
                label="Book Available"
                variant="filled"
              />
              {formik.errors.pin && formik.touched.pin ? (
                <p>{formik.errors.pin}</p>
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

export default ReaderList;
