import * as React from "react";
// @mui
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// Interface
import { MenuType } from "../interfaces";
//
import RouterLink from "./RouterLink";

export default function NavListItem({
  open,
  item,
}: {
  open: boolean;
  item: MenuType;
}) {
  const [expand, setExpand] = React.useState(false);

  const handleClick = () => {
    if (open) {
      setExpand(!expand);
    }
  };

  if (item.children) {
    return (
      <>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
          onClick={handleClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
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
          {item.children?.map((data) => (
            <List component="div" disablePadding>
              <RouterLink
                sx={{
                  pl: 0,
                  ml: "auto",
                  width: "73%",
                }}
                to={data.path}
              >
                <Typography
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                  variant="subtitle2"
                >
                  {data.title}
                </Typography>
              </RouterLink>
            </List>
          ))}
        </Collapse>
      </>
    );
  }

  return (
    <RouterLink
      key={item.title}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
      to={item.path}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
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
    </RouterLink>
  );
}
