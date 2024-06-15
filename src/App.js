import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import QRCode from "react-qr-code";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const [generateqrCode, setGenerateQRcode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
    setGenerateQRcode(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "90vw",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", margin: "20px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", gap: "5px" }}>
            <TextField
              {...register("name")}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              {...register("city")}
              id="outlined-basic"
              label="City"
              variant="outlined"
            />
            <TextField
              {...register("country")}
              id="outlined-basic"
              label="Country"
              variant="outlined"
            />
            <Button sx={{ margin: "10px" }} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>

      {generateqrCode && (
        <div
          style={{
            height: 200,
            margin: "0 auto",
            width: 200,
          }}
        >
          <QRCode
            size={500}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={`${formData.name}, ${formData.city}, ${formData.country}`}
            viewBox={`0 0 500 500`}
          />
        </div>
      )}
    </div>
  );
}
