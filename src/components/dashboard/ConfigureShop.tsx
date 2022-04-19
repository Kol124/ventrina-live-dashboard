import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// assets
import { ReactComponent as ToolIcon } from "../../assets/tool.svg";

interface Props {
  sx?: SxProps;
}

export const ConfigureShop = ({ sx }: Props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: theme.spacing(3),
        bordeRadius: 10,
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center">
        <SvgIcon
          component={ToolIcon}
          inheritViewBox
          sx={{
            color: "#fff",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            color: theme.palette.primary.dark,
          }}
        >
          Configure Your Shop
        </Typography>
      </Stack>

      <div>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            lineHeight: 1,
            color: "#FFA26B",
          }}
        >
          45%
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: 15,
            color: "#FFA26B",
          }}
        >
          Completed
        </Typography>
      </div>

      <Typography
        variant="subtitle1"
        sx={{
          fontSize: 17,
          lineHeight: "22px",
          color: theme.palette.primary.dark,
        }}
      >
        Complete all the steps to have a complete shop to best present to your
        customers.
      </Typography>

      <Stack direction="row" alignItems="center">
        <Link
          variant="subtitle1"
          sx={{
            fontSize: 17,
            cursor: "pointer",
            color: theme.palette.primary.main,
          }}
          underline="always"
        >
          Complete the settings
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
