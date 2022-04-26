// @mui
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// assets
import { ReactComponent as ExternalLinkIcon } from "../assets/external-link.svg";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "182px",
        color: theme.palette.primary.contrastText,
        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, rgba(33, 184, 249, 0) 132.05%);`,
      }}
    >
      <Container maxWidth="lg" sx={{ pt: theme.spacing(4) }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h3"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: 32,
              },
            }}
          >
            Welcome Mario!
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link
              variant="h6"
              sx={{
                mr: 1,
                fontSize: 17,
                cursor: "pointer",
                textDecorationThickness: 3,
                color: theme.palette.primary.contrastText,
              }}
              underline="always"
            >
              app.vetrinalive.it/fenoh-store
            </Link>
            <SvgIcon
              component={ExternalLinkIcon}
              inheritViewBox
              htmlColor="transparent"
              sx={{
                stroke: theme.palette.primary.contrastText,
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
