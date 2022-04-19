import * as React from "react";
import { getActive } from "../utils";
import { useLocation } from "react-router-dom";
// @mui
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// Interface
import { MenuType } from "../interfaces";
// Components
import NavListItemButton from "./NavListItemButton";

export default function NavListItem({
  open,
  item,
}: {
  open: boolean;
  item: MenuType;
}) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const isActive = getActive(item.path, pathname);
  const [expand, setExpand] = React.useState(false);

  const handleClick = () => {
    if (open) {
      setExpand(!expand);
    }
  };

  // DROPDOWN LINKS -----------------------------------------------
  if (item.children) {
    return (
      <>
        <ListItemButton
          sx={{
            px: 2.5,
            minHeight: 48,
            color: theme.palette.primary.dark,
            justifyContent: open ? "initial" : "center",
          }}
          onClick={handleClick}
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
          {expand ? (
            <ExpandLess
              sx={{ marginLeft: "auto", display: open ? "block" : "none" }}
            />
          ) : (
            <ExpandMore
              sx={{ marginLeft: "auto", display: open ? "block" : "none" }}
            />
          )}
        </ListItemButton>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List
            component="div"
            sx={{
              py: theme.spacing(1),
              backgroundColor: theme.palette.secondary.light,
            }}
            disablePadding
          >
            {item.children?.map((data) => (
              <NavListItemButton
                key={data.path}
                to={data.path}
                active={isActive}
              >
                <Typography
                  sx={{
                    ml: "auto",
                    width: "77%",
                    opacity: open ? 1 : 0,
                  }}
                  variant="subtitle2"
                >
                  {data.title}
                </Typography>
              </NavListItemButton>
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <NavListItemButton
      key={item.title}
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
}
