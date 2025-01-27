import { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const PrayerTime = () => {
  const [times, setTimes] = useState({
    fajrAzan: "",
    fajrPrayer: "",
    dhuhrAzan: "",
    dhuhrPrayer: "",
    asrAzan: "",
    asrPrayer: "",
    maghribAzan: "",
    maghribPrayer: "",
    ishaAzan: "",
    ishaPrayer: "",
  });

  const handleChange = (e) => {
    setTimes({ ...times, [e.target.name]: e.target.value });
  };

  const updateTimes = () => {
    console.log("Updated Times:", times);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Prayer Time
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" align="center" gutterBottom>
            Azan Times
          </Typography>
          {[
            { label: "Fajr Azan Time", name: "fajrAzan" },
            { label: "Dhuhr Azan Time", name: "dhuhrAzan" },
            { label: "Asr Azan Time", name: "asrAzan" },
            { label: "Maghrib Azan Time", name: "maghribAzan" },
            { label: "Isha Azan Time", name: "ishaAzan" },
          ].map((field) => (
            <TextField
              key={field.name}
              fullWidth
              label={field.label}
              variant="outlined"
              name={field.name}
              value={times[field.name]}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          ))}
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" align="center" gutterBottom>
            Prayer Times
          </Typography>
          {[
            { label: "Fajr Prayer Time", name: "fajrPrayer" },
            { label: "Dhuhr Prayer Time", name: "dhuhrPrayer" },
            { label: "Asr Prayer Time", name: "asrPrayer" },
            { label: "Maghrib Prayer Time", name: "maghribPrayer" },
            { label: "Isha Prayer Time", name: "ishaPrayer" },
          ].map((field) => (
            <TextField
              key={field.name}
              fullWidth
              label={field.label}
              variant="outlined"
              name={field.name}
              value={times[field.name]}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          ))}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={updateTimes}
      >
        Update Times
      </Button>
    </Container>
  );
};

export default PrayerTime;
