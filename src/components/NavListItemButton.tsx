import React, { ReactNode } from "react";
import { ListItemButton } from "@mui/material";
import { SxProps, useTheme } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";

interface NavListItemButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  to: string;
  sx?: SxProps;
  active?: boolean;
  children: ReactNode;
}

const NavListItemButton = (props: NavListItemButtonProps) => {
  const theme = useTheme();
  type LinkProps = Omit<NavLinkProps, "to">;

  const Link = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, LinkProps>((navLinkProps, ref) => {
        const { className: previousClasses, ...rest } = navLinkProps;
        const elementClasses = previousClasses?.toString() ?? "";
        return (
          <NavLink
            {...rest}
            ref={ref}
            to={props.to}
            end
            className={elementClasses}
          />
        );
      }),
    [props.to]
  );

  return (
    <ListItemButton
      sx={{
        color: theme.palette.primary.dark,
        ...(props.active && {
          color: theme.palette.primary.main,
          background: theme.palette.primary.light,
          borderLeft: `3px solid ${theme.palette.primary.main}`,
        }),
        ...props.sx,
      }}
      component={Link}
    >
      {props.children}
    </ListItemButton>
  );
};

export default NavListItemButton;
