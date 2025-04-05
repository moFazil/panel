import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

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
    <div className="sm:px-0">
     <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        padding: { xs: 2, sm: 4 }, // Reduce padding on small screens
      }}
    >
      <Paper
        elevation={12}
        sx={{
          p: { xs: 2, sm: 4 }, // Reduce padding for mobile
          borderRadius: 3,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            color: "#333",
            fontWeight: "bold",
            fontSize: { xs: "1.4rem", sm: "1.8rem" },
          }}
        >
          Prayer Time
        </Typography>

        {/* Stack fields on small screens */}
        <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{
                color: "#1976d2",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              Azan Times
            </Typography>
            {[
              { label: "Fajr Azan", name: "fajrAzan" },
              { label: "Dhuhr Azan", name: "dhuhrAzan" },
              { label: "Asr Azan", name: "asrAzan" },
              { label: "Maghrib Azan", name: "maghribAzan" },
              { label: "Isha Azan", name: "ishaAzan" },
            ].map((field) => (
              <TextField
                key={field.name}
                fullWidth
                size="small" // Smaller input box
                label={field.label}
                variant="outlined"
                name={field.name}
                value={times[field.name]}
                onChange={handleChange}
                sx={{
                  mb: 1.2,
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    fontSize: "0.85rem", // Smaller text
                    padding: "8px 10px", // Reduce padding
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "0.8rem", // Smaller label text
                  },
                }}
              />
            ))}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{
                color: "#d32f2f",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              Prayer Times
            </Typography>
            {[
              { label: "Fajr Prayer", name: "fajrPrayer" },
              { label: "Dhuhr Prayer", name: "dhuhrPrayer" },
              { label: "Asr Prayer", name: "asrPrayer" },
              { label: "Maghrib Prayer", name: "maghribPrayer" },
              { label: "Isha Prayer", name: "ishaPrayer" },
            ].map((field) => (
              <TextField
                key={field.name}
                fullWidth
                size="small" // Smaller input box
                label={field.label}
                variant="outlined"
                name={field.name}
                value={times[field.name]}
                onChange={handleChange}
                sx={{
                  mb: 1.2,
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    fontSize: "0.85rem",
                    padding: "8px 10px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "0.8rem",
                  },
                }}
              />
            ))}
          </Grid>
        </Grid>
        <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2.5,
          p: { xs: 1, sm: 1.2 },
          fontSize: { xs: "0.9rem", sm: "1rem" },
          fontWeight: "bold",
          borderRadius: 2,
          bgcolor: "black",  
          color: "white",    
          "&:hover": {
            bgcolor: "#333", 
          },
        }}
        onClick={updateTimes}
      >
        Update Times
      </Button>
      </Paper>
    </Container>
    </div>
  );
};

export default PrayerTime;
