// @mui
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// components
import NavListItem from "./NavListItem";
import NavListFooter from "./NavListFooter";
// interface
import { MenuType } from "../interfaces";

export default function NavList({ menu }: { menu: MenuType[] }) {
  const theme = useTheme();

  return (
    <List>
      {menu.map((data, index) => (
        <NavListItem key={index} item={data} />
      ))}
      <Divider sx={{ mb: theme.spacing(1), mt: theme.spacing(3) }} />
      <NavListFooter />
    </List>
  );
}
