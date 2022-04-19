import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// components
import SelectField from "../SelectField";
// assets
import { ReactComponent as ListIcon } from "../../assets/list.svg";

interface Props {
  sx?: SxProps;
}

export const Orders = ({ sx }: Props) => {
  const theme = useTheme();
  const options = [
    { value: "this_month", label: "This Month" },
    { value: "last_month", label: "Last Month" },
  ];

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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SvgIcon
            component={ListIcon}
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
            Orders
          </Typography>
        </Stack>

        <div>
          <SelectField
            options={options}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: 14,
                color: theme.palette.grey["600"],
              },
              "& .MuiOutlinedInput-root": {
                height: 25,
                width: 120,
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </div>
      </Stack>

      <div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: 17,
              color: theme.palette.grey["600"],
            }}
          >
            Orders received:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: 17,
              color: theme.palette.primary.dark,
            }}
          >
            158
          </Typography>
        </Stack>
        <Stack
          mt={1.5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: 17,
              color: theme.palette.grey["600"],
            }}
          >
            Earnings:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: 17,
              color: theme.palette.primary.dark,
            }}
          >
            €1893,24
          </Typography>
        </Stack>
      </div>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link
          variant="subtitle1"
          sx={{
            fontSize: 17,
            cursor: "pointer",
            color: theme.palette.primary.main,
          }}
          underline="always"
        >
          10 free tips to increase your sales
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
