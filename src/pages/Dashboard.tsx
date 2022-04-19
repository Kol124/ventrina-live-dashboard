import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// components
import Hero from "../components/Hero";
import {
  Orders,
  Visitors,
  Extensions,
  LatestNews,
  CustomerSupport,
  SellYourProducts,
  ConfigureShop,
  TrustPilot,
  Invite,
} from "../components/dashboard";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: -7.5, mb: 4 }}>
        <Grid container columnSpacing={2}>
          {/* ---------- LEFT 8/12 ---------- */}
          <Grid item md={12} lg={8}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <Visitors sx={{ height: 245, width: 350, my: 1.5 }} />

              <Orders sx={{ height: 245, width: 350, my: 1.5 }} />

              <SellYourProducts sx={{ height: 343, width: 350, my: 1.5 }} />

              <Extensions sx={{ height: 343, width: 350, my: 1.5 }} />

              <LatestNews sx={{ width: 729, my: 1.5 }} />
            </Box>
          </Grid>

          {/* ---------- RIGHT 3/12 ---------- */}
          <Grid item md={12} lg={4} ml={{ lg: -1.4 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <ConfigureShop sx={{ height: 289, width: 350, my: 1.5 }} />
              <TrustPilot sx={{ height: 232, width: 350, my: 1.5 }} />
              <Invite sx={{ height: 231, width: 350, my: 1.5 }} />
              <CustomerSupport sx={{ height: 197, width: 350, my: 1.5 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
