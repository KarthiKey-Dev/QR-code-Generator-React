import React, { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/joy/Button";
import QRCode from "react-qr-code";
import { useForm } from "react-hook-form";
import "./App.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function App() {
  const [generateqrCode, setGenerateQRcode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
    setGenerateQRcode(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setGenerateQRcode(false);
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
              disabled={generateqrCode && !isEditing}
            />
            <TextField
              {...register("city")}
              id="outlined-basic"
              label="City"
              variant="outlined"
              disabled={generateqrCode && !isEditing}
            />
            <TextField
              {...register("country")}
              id="outlined-basic"
              label="Country"
              variant="outlined"
              disabled={generateqrCode && !isEditing}
            />
            <Button
              sx={{ margin: "10px" }}
              type="submit"
              disabled={generateqrCode && !isEditing}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      {generateqrCode && !isEditing && (
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
          <Button sx={{ margin: "10px" }} onClick={handleEdit}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}
