import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// assets
import { ReactComponent as TrustPilotIcon } from "../../assets/trustpilot.svg";

interface Props {
  sx?: SxProps;
}

export const TrustPilot = ({ sx }: Props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: theme.palette.secondary.dark,
        p: theme.spacing(3),
        bordeRadius: 10,
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        ...sx,
      }}
    >
      <SvgIcon
        component={TrustPilotIcon}
        inheritViewBox
        sx={{
          height: 28,
          width: 117,
        }}
      />

      <Typography
        variant="subtitle1"
        sx={{
          fontSize: 17,
          lineHeight: "22px",
          color: theme.palette.primary.contrastText,
          "& > span": {
            color: theme.palette.secondary.main,
          },
        }}
      >
        Show us your love by leaving a <span>positive</span> review on trust
        pilot and receive the extension of <b>50 additional products</b>
      </Typography>

      <Stack direction="row" alignItems="center">
        <Link
          variant="subtitle1"
          sx={{
            fontSize: 17,
            cursor: "pointer",
            color: theme.palette.secondary.main,
            textDecorationColor: theme.palette.secondary.main,
          }}
          underline="always"
        >
          Write a review on Trustpilot
        </Link>
        <ArrowForwardIcon
          sx={{
            ml: 2,
            width: 20,
            height: 20,
            color: theme.palette.secondary.main,
          }}
        />
      </Stack>
    </Paper>
  );
};
