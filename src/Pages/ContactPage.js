import React from "react";
import { Box, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
const ContactPage = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mt: 2,
          p: 2,
          "& h4": {
            fontWeight: "bold",
          },
          "& p": {
            textAlign: "justify",
            mt: 2,
          },
        }}
      >
        <Typography variant="h4" sx={{}}>
          Contact My Restaurant
        </Typography>
        <p>
          quis massa arcu. Etiam blandit vel ante ac hendrerit. Sed at lacus et
          quam auctor vestibulum sit amet vitae arcu. Praesent quis tortor et
          est placerat sollicitudin ac ut eros. Etiam commodo magna id volutpat
          bibendum. Integer venenatis tincidunt tortor in auctor. Nullam nisi
          ligula, rhoncus et arcu a, congue ultrices elit. Donec dictum commodo
          lorem ac mattis. Sed pellentesque tortor finibus, cursus massa quis,
          feugiat risus. Etiam at fringilla eros. Nunc a maximus dui, in semper
          nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur rhoncus ultricies tincidunt.
        </p>
      </Box>
    </>
  );
};

export default ContactPage;
