// @mui
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// Component
import NavListItem from "./NavListItem";
import NavListFooter from "./NavListFooter";
// interface
import { MenuType } from "../interfaces";

export default function NavList({
  open,
  menu,
}: {
  open: boolean;
  menu: MenuType[];
}) {
  const theme = useTheme();

  return (
    <List>
      {menu.map((data, index) => (
        <NavListItem key={index} item={data} open={open} />
      ))}
      <Divider sx={{ mb: theme.spacing(1), mt: theme.spacing(3) }} />
      <NavListFooter open={open} />
    </List>
  );
}
