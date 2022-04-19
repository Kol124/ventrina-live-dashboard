import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
// components
import Button from "../Button";
// assets
import avatar from "../../assets/avatar.jpg";
import { ReactComponent as HeadPhonesIcon } from "../../assets/head-phones.svg";

interface Props {
  sx?: SxProps;
}

export const CustomerSupport = ({ sx }: Props) => {
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
          component={HeadPhonesIcon}
          htmlColor="transparent"
          inheritViewBox
        />
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            color: theme.palette.primary.dark,
          }}
        >
          Customer support
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Avatar
          alt="avatar"
          src={avatar}
          // sx={{ width: 40, height: 40 }}
        />
        <Typography
          variant="body2"
          sx={{
            ml: 2,
            fontSize: 15,
            color: theme.palette.primary.dark,
          }}
        >
          Simone is here to help you
        </Typography>
      </Stack>

      <Button variant="contained" color="primary" size="large">
        Contact us
      </Button>
    </Paper>
  );
};
