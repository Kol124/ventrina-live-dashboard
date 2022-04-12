import * as React from "react";
// @mui
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
// Component
import NavListItem from "./NavListItem";
// interface
import { MenuType } from "../interfaces";

export default function NavList({
  open,
  menu,
}: {
  open: boolean;
  menu: MenuType[];
}) {
  return (
    <>
      <List>
        {menu.map((data) => (
          <NavListItem item={data} open={open} />
        ))}
        {/* -------------------------------------------------- */}
        <Divider />
        {["Customer Support", "Share your shop", "View your shop"].map(
          (text, index) => (
            <ListItemButton
              key={index}
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
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          )
        )}
      </List>
    </>
  );
}
