import logo from './logo.svg';
import * as React from "react";
import { useState, useEffect } from "react";
import { Avatar, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import QRCode from "react-qr-code";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './App.css';

export default function App() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const [color, setColor] = useState("#ff5252");
  const [nameHelperText, setNameHelperText] = useState(false);
  const [allergiesHelperText, setAllergiesHelperText] = useState(false);
  const [dobHelperText, setDobHelperText] = useState(false);
  // const [genderHelperText, setHelperText] = useState(false);
  const [addressHelperText, setaddressHelperText] = useState(false);
  const [postHelperText, setPostHelperText] = useState(false);
  const [cityHelperText, setCityHelperText] = useState(false);
  const [CountryHelperText, setCountryHelperText] = useState(false);

  const [nameValid, setnameValid] = useState(false)
  const [AllergiesValid, setAllergiesValid] = useState(false)
  const [dobValid, setDobValid] = useState(false)
  // const [genderValid, setGenderValid] = useState(false)
  const [addressValid, setAddressValid] = useState(false)
  const [postcodeValid, setpostcodeValid] = useState(false)
  const [cityValid, setCityValid] = useState(false)
  const [countryValid, setCountryValid] = useState(false)

  const [generateqrCode, setGenerateQRcode] = useState(false)

  const [name, setName] = useState("")
  const [allergies, setAllergies] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [postcode, setPostcode] = useState(false);
  const [city, setCity] = useState(false);
  const [country, setCountry] = useState(false);
  useEffect(() => {
    const regname = new RegExp(/^[A-Za-z]+$/);
    setnameValid(regname.test(name));

    const regAllergies = new RegExp(/^[a-zA-Z ]*$/);
    setAllergiesValid(regAllergies.test(allergies));

    const regaddress = new RegExp(/^[a-zA-Z ]*$/);
    setAddressValid(regaddress.test(address));

    const regpostcode = new RegExp(/^\d*$/);
    setpostcodeValid(regpostcode.test(postcode));

    const regcity = new RegExp(/^[A-Za-z]+$/);
    setCityValid(regcity.test(city));

    const regcountry = new RegExp(/^[A-Za-z]+$/);
    setCountryValid(regcountry.test(country));

    if (!nameValid) {
      setNameHelperText("please Enter a correct name");
    } else {
      setNameHelperText("")
    }
    if (!AllergiesValid) {
      setAllergiesHelperText("invalid entry eg : Dust Mite,Latex etc..");
    } else {
      setAllergiesHelperText("")
    }
    if (!addressValid) {
      setaddressHelperText("Not a Valid Address");
    } else {
      setaddressHelperText("")
    }
    if (!postcodeValid) {
      setPostHelperText("Invalid Postal code eg : 654236");
    } else {
      setPostHelperText("")
    }
    if (!cityValid) {
      setCityHelperText("Invalid city");
    } else {
      setCityHelperText("")
    }
    if (!countryValid) {
      setCountryHelperText("Invalid country");
    } else {
      setCountryHelperText("")
    }
    // if (!nameValid) {
    //   setNameHelperText("Name Valid Entry");
    // } else {
    //   setNameHelperText("")
    // }
  }, [name, allergies, dob, gender, address, postcode, city, country])
  // const handleValidation = (e) => {
  //   //set value to user input
  //   //define regex
  //   const reg = new RegExp(/^[A-Za-z\s]+$/);

  //   //test whether input is valid
  //   setValid(reg.test(e.target.value));
  //   if (!Valid) {
  //     setHelperText("Not Valid Entry");
  //   } else {
  //     setHelperText("")
  //   }
  // };
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
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload Profile Pic
          <VisuallyHiddenInput type="file" />
        </Button>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </div>
      <div>
        <div>
          <TextField
            Name="name"
            error={!nameValid}
            id="outlined-error-helper-text"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            helperText={nameHelperText}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker onChange={(e) => setDob(e)} label="DOB" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div>
        <TextField
          Name="Allergies"
          onChange={(e) => setAllergies(e.target.value)}
          error={!AllergiesValid}
          id="outlined-basic"
          label="Allergies"
          variant="outlined"
          helperText={allergiesHelperText} />
      </div>
      <div>
        <TextField
          Name="Address"
          onChange={(e) => setAddress(e.target.value)}
          error={!addressValid}
          id="outlined-basic"
          label="Address"
          variant="outlined"
          helperText={addressHelperText} />
      </div>
      <div>
        <TextField
          onChange={(e) => setPostcode(e.target.value)}
          Name="Postcode"
          error={!postcodeValid}
          id="outlined-basic"
          label="Postcode"
          variant="outlined"
          helperText={postHelperText} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <TextField id="outlined-basic" label="city" variant="outlined"
          onChange={(e) => setCity(e.target.value)}
          error={!cityValid}
          helperText={cityHelperText} />
        <TextField
          error={!countryValid}
          helperText={CountryHelperText}
          onChange={(e) => setCountry(e.target.value)} id="outlined-basic" label="country" variant="outlined" />
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        select an children profile background color
        <Button
          component="label"
          tabIndex={-1}
          role={undefined}
          aria-label="fill color"
          variant="outlined"
          color="neutral"
          endDecorator={
            <SvgIcon fontSize="md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </SvgIcon>
          }
          sx={{ pl: 1 }}
        >
          <AspectRatio
            variant="plain"
            ratio="1"
            sx={{
              borderRadius: "50%",
              width: "1.5em",
              bgcolor: color,
            }}
          >
            <div />
          </AspectRatio>
          <Box
            component="input"
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            sx={{
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              overflow: "hidden",
              position: "absolute",
              bottom: 0,
              left: 0,
              whiteSpace: "nowrap",
              width: "1px",
            }}
          />
        </Button>
      </div>
      <Button disabled={!nameValid ||
        !AllergiesValid ||
        !addressValid ||
        !postcodeValid ||
        !cityValid ||
        !countryValid
      }
        onClick={() => setGenerateQRcode(true)}
      >Submit</Button>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        {generateqrCode &&
          <QRCode
            size={500}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={[name, allergies, gender, address, postcode, city, country] + ""}
            viewBox={`0 0 500 500`}
          />
        }

      </div>
    </div>
  );
}
