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
import Box from "@mui/material/Box";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// Interface
import { MenuType } from "../interfaces";
// components
import NavListItemButton from "./NavListItemButton";
// redux
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setIsOpen, selectIsOpen } from "../app/slices/app";

export default function NavListItem({ item }: { item: MenuType }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isActive = getActive(item.path, pathname);
  const [expand, setExpand] = React.useState(false);

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);

  const handleClick = () => {
    if (!isOpen) {
      dispatch(setIsOpen());
      setExpand(!expand);
    }
    setExpand(!expand);
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
            justifyContent: isOpen ? "initial" : "center",
          }}
          onClick={handleClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : "auto",
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
              opacity: isOpen ? 1 : 0,
            }}
            variant="subtitle2"
          >
            {item.title}
          </Typography>
          {expand && isOpen ? (
            <ExpandLess
              sx={{ marginLeft: "auto", display: isOpen ? "block" : "none" }}
            />
          ) : (
            <ExpandMore
              sx={{ marginLeft: "auto", display: isOpen ? "block" : "none" }}
            />
          )}
        </ListItemButton>
        <Collapse in={expand && isOpen} timeout="auto" unmountOnExit>
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
                    opacity: isOpen ? 1 : 0,
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
        justifyContent: isOpen ? "initial" : "center",
      }}
      to={item.path}
      active={isActive}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          color: "transparent",
          mr: isOpen ? 3 : "auto",
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
          opacity: isOpen ? 1 : 0,
        }}
        variant="subtitle2"
      >
        {item.title}
      </Typography>
      {item.title === "Orders" && (
        <Box
          sx={{
            width: 24,
            height: 24,
            fontSize: 12,
            color: "white",
            marginLeft: "auto",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            display: isOpen ? "flex" : "none",
            bgcolor: theme.palette.secondary.main,
          }}
        >
          24
        </Box>
      )}
    </NavListItemButton>
  );
}
