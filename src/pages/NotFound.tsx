import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const NotFound = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        textAlign: "center",
        height: "calc(100vh - 61px)",
      }}
    >
      <Typography variant="h2" fontWeight={900} mt="15%">
        Sorry,
        <br />
        Page Not Found
      </Typography>
    </Stack>
  );
};

export default NotFound;
