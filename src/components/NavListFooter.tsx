import { getActive } from "../utils";
import { footerMenu } from "../routes/menu";
import { useLocation } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
// Components
import NavListItemButton from "./NavListItemButton";
import SelectField from "./SelectField";

export default function Footer({ open }: { open: boolean }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const options = [
    { value: "fenoh", label: "Fenoh Store" },
    { value: "chic", label: "Chic Store" },
    { value: "eclectic", label: "Eclectic Store" },
  ];

  return (
    <List sx={{ pb: theme.spacing(4) }}>
      {footerMenu.map((item, index) => {
        const isActive = getActive(item.path, pathname);
        return (
          <NavListItemButton
            key={index}
            sx={{
              px: 2.5,
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
            }}
            to={item.path}
            active={isActive}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                color: "transparent",
                mr: open ? 3 : "auto",
                justifyContent: "center",
                stroke: isActive
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <Typography
              sx={{
                opacity: open ? 1 : 0,
              }}
              variant="subtitle2"
            >
              {item.title}
            </Typography>
          </NavListItemButton>
        );
      })}
      <Box
        sx={{
          px: theme.spacing(2),
          mt: theme.spacing(3),
          display: open ? "block" : "none",
        }}
      >
        <Typography
          sx={{
            color: "#546679",
            fontWeight: 500,
            fontSize: 15,
            mb: 1.5,
          }}
        >
          Select your shop
        </Typography>
        <SelectField options={options} />
      </Box>
    </List>
  );
}
