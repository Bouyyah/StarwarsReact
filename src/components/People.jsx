import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";


function People() {
  const [people, setPeople] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log(pageNumber);
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}&format=json`)
      .then((response) => {
        setPeople(response.data);
      });
  }, [pageNumber]);

  if (!people) return "loading...";

  return (
    
    <div>
      
      {people.results.map((info, i) => (
        <h1 key = {i} style={{ color: "white" }}> {info.name}</h1>
      ))}

      <Stack spacing={2}>
        <Pagination count={9} onChange={(e, page) => setPageNumber(page)} showFirstButton showLastButton />
      </Stack>
    </div>
  );
}

export default People;
