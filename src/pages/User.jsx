import { TextField, Button, Box, Container, Grid, Avatar } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, profilePicture: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <input type="file" accept="image/*" id="profile-pic" hidden onChange={handleProfilePictureChange} />
            <label htmlFor="profile-pic">
              <Avatar src={formData.profilePicture} sx={{ width: 100, height: 100, cursor: "pointer" }}>
                {!formData.profilePicture && <AddAPhotoIcon />}
              </Avatar>
            </label>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default User;