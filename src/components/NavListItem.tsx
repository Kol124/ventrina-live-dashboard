import * as React from "react";
// @mui
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// Interface
import { MenuType } from "../interfaces";

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
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          {expand ? (
            <ExpandLess sx={{ display: open ? "block" : "none" }} />
          ) : (
            <ExpandMore sx={{ display: open ? "block" : "none" }} />
          )}
        </ListItemButton>

        <Collapse in={expand} timeout="auto" unmountOnExit>
          {item.children?.map((data) => (
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  p: 0,
                  ml: "auto",
                  width: "73%",
                }}
              >
                <ListItemText
                  primary={data.title}
                  sx={{
                    width: "65%",
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </>
    );
  }

  return (
    <ListItemButton
      key={item.title}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
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
      <ListItemText
        primary={item.title}
        sx={{ opacity: open ? 1 : 0 }}
        // component={RouterLink}
        // to={item.path}
      />
    </ListItemButton>
  );
}
