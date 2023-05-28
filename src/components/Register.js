import React, { useState, useEffect, useRef } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@material-ui/core";

export default function Register() {

    const [orgDesc,setOrgDesc] = useState('');
    const [orgName, setOrgName] = useState('');
    const [orgLocation, setOrgLocation] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [eventObj, setEventObj] = useState(['']);
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();

        //use the values for apis
        // console.log(eventTitle);
        // console.log(orgName);
        // console.log(eventStartDate);
        // console.log(eventEndDate);
        // console.log(eventLocation);
        // console.log(eventDescription);
        // console.log(eventLink);
        // console.log(eventPoster);

        // Reset the form fields after submission

        const object = [orgName, orgDesc , orgLocation, phoneNo, email, profilePhoto];
        console.log(object);

        setEventObj(object);
        console.log(eventObj);

        // setOrgDesc('');
        // setOrgName('');
        // setOrgLocation('');
        // setEmail('');
        // setPhoneNo('');
        // setProfilePhoto(null);
        // setIsSubmitted(false);
        // setEventObj(null);

        // document.getElementById("regform").reset();

        //alert message to display successful submission
        setIsSubmitted(true);
        setTimeout(()=>{
            setIsSubmitted(false)
        }, 2000);

        console.log(eventObj);

        console.log("setIsSubmitted");
    }

    useEffect(()=>{
        

    },eventObj)

    return (
        <div>
            <Container sx={{ width: "200" }}>
      <Box
        sx={{
        width: "75%", 
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        margin: "1rem",
        marginLeft: "10rem",
        backgroundColor: "#ffffff",
        padding: "2rem",
        paddingRight: "16rem"
        }}
        
      >
        <Typography component="h1" variant="h5">
          Profile Details
        </Typography>
        <Box component="form" id='regform' noValidate onSubmit={handleSubmit}>
        
          <br/>
          <TextField
            label="Organization Name"
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            InputLabelProps={{
                shrink: true
            }}
            margin="normal"
            fullWidth
            required
          />
          <br/><br/>
          <TextField
            label="Organisation Description"
            type="text"
            value={orgDesc}
            onChange={(e) => setOrgDesc(e.target.value)}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            required
          />
          <TextField
            label="Address"
            type="text"
            value={orgLocation}
            onChange={(e) => setOrgLocation(e.target.value)}
            InputLabelProps={{
                shrink: true
            }}
            margin="normal"
            fullWidth
            required
          />
          <br/><br/>
          <TextField
            label="Email ID:"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            required
          />
          <br/><br/>
          
          <TextField
            label="Contact Number:"
            type="number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            required
          />
          <br/><br/>
          <FormControl margin="normal" fullWidth>
           <FormLabel required>Upload Profile Photo</FormLabel>
            <Input 
               type="file" 
               required 
               value={profilePhoto}
               onChange={(e) => setProfilePhoto(e.target.value)}
               />
          </FormControl>
        
          <div className='mt-2'>
            {isSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
                Event submitted successfully!
                </div>
            )}
        </div>
          <Button type="submit" variant="contained" color="primary" className='mt-3'
            disabled={!orgDesc || !orgName || !phoneNo || !email || !orgLocation || !profilePhoto }
            >
            Submit
          </Button>
    
        </Box>
      </Box>
    </Container>
        </div>
    );
}