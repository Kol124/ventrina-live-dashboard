import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// assets
import { ReactComponent as DomainIcon } from "../../assets/domain.svg";
import { ReactComponent as ExtensionsIcon } from "../../assets/extensions.svg";

interface Props {
  sx?: SxProps;
}

export const Extensions = ({ sx }: Props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: theme.spacing(3, 0, 3, 3),
        overflowX: "hidden",
        bordeRadius: 10,
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center">
        <SvgIcon
          component={ExtensionsIcon}
          htmlColor="transparent"
          inheritViewBox
          color="secondary"
        />
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            color: theme.palette.primary.dark,
          }}
        >
          Extensions Marketplace
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" my={2}>
        {/* ------ LEFT ----- */}
        <div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: 152,
              height: 150,
              borderRadius: "10px",
              background: "#FFA26B",
            }}
          >
            <SvgIcon
              component={DomainIcon}
              inheritViewBox
              sx={{
                mx: "auto",
                height: 60,
                width: 60,
              }}
            />
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 1,
              fontSize: 17,
              lineHeight: "22px",
              color: theme.palette.primary.dark,
            }}
          >
            Connect your own domain
          </Typography>
        </div>

        {/* ------ RIGHT ----- */}
        <Stack sx={{ ml: 4.7 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: 152,
              height: 150,
              borderRadius: "10px",
              background: "#00C48C",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mx: "auto",
                textAlign: "center",
                color: theme.palette.primary.contrastText,
              }}
            >
              +50
              <br />
              Prodotti
            </Typography>
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{
              mt: 1,
              fontSize: 17,
              lineHeight: "22px",
              color: theme.palette.primary.dark,
            }}
          >
            50 Additional Products
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Link
          variant="subtitle1"
          sx={{
            mr: 1,
            fontSize: 17,
            cursor: "pointer",
            color: theme.palette.primary.main,
          }}
          underline="always"
        >
          Discover all extensions
        </Link>
        <ArrowForwardIcon
          sx={{
            ml: 1,
            width: 20,
            height: 20,
            color: theme.palette.primary.main,
          }}
        />
      </Stack>
    </Paper>
  );
};
