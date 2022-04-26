import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// assets
import { ReactComponent as UsersIcon } from "../../assets/users.svg";

interface Props {
  sx?: SxProps;
}

export const Invite = ({ sx }: Props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
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
        <SvgIcon component={UsersIcon} htmlColor="transparent" />
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            color: theme.palette.primary.dark,
          }}
        >
          Invite friend
        </Typography>
      </Stack>

      <Typography
        variant="subtitle1"
        sx={{
          fontSize: 17,
          lineHeight: "22px",
          color: theme.palette.primary.dark,
          "& > b": {
            color: theme.palette.secondary.main,
          },
        }}
      >
        <b>Receive 50 products</b> by inviting a friend who subscribes to a
        plan. Your friend will receive a 30% discount coupon valid for any plan.
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
            ml: 2,
            width: 20,
            height: 20,
            color: theme.palette.primary.main,
          }}
        />
      </Stack>
    </Paper>
  );
};
