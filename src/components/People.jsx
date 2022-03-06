import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Pagination,
  Stack,
  Box,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  CircularProgress,
} from "@mui/material";

function People() {
  const [people, setPeople] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    console.log(pageNumber);
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}&format=json`)
      .then((response) => {
        setPeople(response.data);
      });
  }, [pageNumber]);

  if (!people)
    return (
      <div className="progress">
        <CircularProgress sx={{ color: '#fddb3a'}} size={85} />
      </div>
    );

  return (
    <div className="people">
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#fddb3a",
          marginTop: 4,
        }}
      >
        Star Wars characters:
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {people.results.map((info, i) => (
            <Grid item xs={4} sm={4} md={4} key={i}>
              <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  aria-controls={`panel${i}bh-content`}
                  id={`panel${i}bh-header`}
                >
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
                    }}
                  >
                    {info.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Height: {info.height}
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Mass: {info.mass}
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Hair color: {info.hair_color}
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Skin color: {info.skin_color}
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Eye color: {info.eye_color}
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Birth year: {info.birth_year}
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500, marginLeft:3 }}>
                    - Gender: {info.gender}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Box>

      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={9}
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

export default People;
