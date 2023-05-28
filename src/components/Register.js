import React, { useState, useEffect } from 'react';
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

    const [orgName, setOrgName] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [email, setEmail] = useState('');
    const [mobile,setMobile ] = useState('');
    const [address, setAddress] = useState('');
    const [orgDescription, setOrgDescription] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [orgObj, setOrgObj] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        //use the values for apis
        console.log(orgName);
        console.log(profilePic);
        console.log(email);
        console.log(mobile);
        console.log(address);
        console.log(orgDescription);
    

        // Reset the form fields after submission

       
        setOrgName('');
        setProfilePic(null);
        setEmail('');
        setMobile('');
        setAddress('');
        setOrgDescription('');
        setIsSubmitted(false);
        setOrgObj(null);

        //alert message to display successful submission
        setIsSubmitted(true);
        setTimeout(()=>{
            setIsSubmitted(false)
        }, 2000);

        console.log(setIsSubmitted);
    }

    useEffect(()=>{
        const object1 = [orgName, profilePic, email, mobile, address, orgDescription];
        console.log(object1);
        setOrgObj(object1);
        console.log(orgObj);

        },orgObj)
        

    return (
        <>
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
          Register as an Organizer!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{paddingTop: 3}}>
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
            label="Email ID"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
                shrink: true
            }}
            fullWidth
            required
           />
            <br/><br/>
           <TextField
                label="Mobile Number"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                InputLabelProps={{
                    shrink: true
                }}
                required
                fullWidth
                margin="normal"
            />
          <br/><br/>
          <TextField
            label="Location"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            InputLabelProps={{
                shrink: true
            }}
            margin="normal"
            fullWidth
            required
          />
          <br/><br/>
          <TextField
            label="About Organization"
            type="text"
            value={orgDescription}
            onChange={(e) => setOrgDescription(e.target.value)}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            required
          />
           <br/><br/>
        
          <FormControl margin="normal" fullWidth>
           <FormLabel required>Upload Profile Picture</FormLabel>
            <Input 
               type="file" 
               required 
               value={profilePic}
               onChange={(e) => setProfilePic(e.target.value)}
               />
          </FormControl>
         
        
          <div className='mt-2'>
            {isSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
                Updated profile successfully!
                </div>
            )}
        </div>
          <Button type="submit" variant="contained" color="primary" className='mt-3'
            disabled={!orgName || !profilePic || !email || !mobile || !orgDescription || !address}
            >
            Submit
          </Button>
    
        </Box>
      </Box>
    </Container>
           
    </>
    );
}