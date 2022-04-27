import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// components
import {
  Hero,
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
        <Grid container>
          {/* ---------- LEFT 8/12 ---------- */}
          <Grid item md={12} lg={8}>
            <Box
              sx={{
                width: { xs: "auto", lg: "98%" },
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "space-around", md: "space-between" },
              }}
            >
              <Visitors sx={{ height: 245, width: 350, my: 1.5 }} />

              <Orders sx={{ height: 245, width: 350, my: 1.5 }} />

              <SellYourProducts sx={{ height: 343, width: 350, my: 1.5 }} />

              <Extensions sx={{ height: 343, width: 350, my: 1.5 }} />

              <LatestNews sx={{ width: "100%", my: 1.5 }} />
            </Box>
          </Grid>

          {/* ---------- RIGHT 3/12 ---------- */}
          <Grid item md={12} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "space-around", lg: "flex-end" },
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
