import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Input,
} from "@material-ui/core";


function NewPost() {

    
  return (
    <>
    <Container sx={{ width: "200" }}>
      <Box
        sx={{
        width: "50%", 
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        margin: "1rem",
        backgroundColor: "#ffffff",
        padding: "1rem",
        }}
      >
        <Typography component="h1" variant="h5">
          Event Details
        </Typography>
        <Box component="form" noValidate>
        <TextField
            label="Event Title"
            type="text"
            margin="normal"
            width="75%"
            required
          />
          <br/>
          <TextField
            label="Event Start Date "
            type="text"
            required
          />
          <br/>
          <TextField
            label="Event End Date"
            type="text"
            margin="normal"
            required
          />
          <br/>
          <TextField
            label="Event Description"
            type="text"
            required
          />
          <br/>
          <FormControl margin="normal">
            <FormLabel>Upload the poster of your event</FormLabel>
            <Input type="file" required />
          </FormControl>
          <br/>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
            {/* {formData && <SampleData formData={formData} />} */}
    </>
  )
}

export default NewPost