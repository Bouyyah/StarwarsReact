import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Pagination,
  Stack,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

function Planets() {
  const [planet, setPlanet] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log(pageNumber);
    axios
      .get(`https://swapi.dev/api/planets/?page=${pageNumber}&format=json`)
      .then((response) => {
        setPlanet(response.data);
      });
  }, [pageNumber]);

  if (!planet)
    return (
      <div className="progress">
        <CircularProgress sx={{ color: "#fddb3a" }} size={85} />
      </div>
    );

  return (
    <div className="planet">
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#fddb3a",
          marginTop: 4,
        }}
      >
        Star Wars planets:
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {planet.results.map((info, i) => (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <Card sx={{ minWidth: 275, height:370 }}>
                <CardContent>
                <Typography
                    sx={{
                      width: "100%",
                      flexShrink: 0,
                      color: "black",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: 600,
                      border: 2,
                      borderColor: "#fddb3a",
                      padding: 1,
                      marginBottom:2
                    }}
                  >
                    {info.name}
                  </Typography>
                  
                <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Rotation period: <i><b>{info.rotation_period}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Orbital period: <i><b>{info.orbital_period}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Diameter: <i><b>{info.diameter}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Climate: <i><b>{info.climate}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Gravity: <i><b>{info.gravity}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Terrain: <i><b>{info.terrain}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Surface_water: <i><b>{info.surface_water}</b></i>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Population: <i><b>{info.population}</b></i>
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={6}
            onChange={(e, page) => setPageNumber(page)}
            color="secondary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>
    </div>
  );
}

export default Planets;
