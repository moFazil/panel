import { useState } from "react";
import { TextField, Button, Container, Typography, Grid, Paper } from "@mui/material";

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
    <Container maxWidth="sm" sx={{ 
      mt: 4, 
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      padding: 4
    }}>
      <Paper elevation={12} sx={{ p: 4, borderRadius: 3, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.9)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#333", fontWeight: "bold" }}>
          Prayer Time
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
              Azan Times
            </Typography>
            {[{ label: "Fajr Azan Time", name: "fajrAzan" },
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
                sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
              />
            ))}
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6" align="center" gutterBottom sx={{ color: "#d32f2f", fontWeight: "bold" }}>
              Prayer Times
            </Typography>
            {[{ label: "Fajr Prayer Time", name: "fajrPrayer" },
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
                sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
              />
            ))}
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, p: 1.5, fontSize: "1rem", fontWeight: "bold", borderRadius: 2 }}
          onClick={updateTimes}
        >
          Update Times
        </Button>
      </Paper>
    </Container>
  );
};

export default PrayerTime;