import { ListItemButton } from "@mui/material";
import React, { ReactNode } from "react";
import { SxProps } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";

type RouterLinkProps = React.PropsWithChildren<{
  to: string;
  sx?: SxProps;
  children: ReactNode;
}>;

const RouterLink = (props: RouterLinkProps) => {
  type MyNavLinkProps = Omit<NavLinkProps, "to">;

  const MyNavLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, MyNavLinkProps>(
        (navLinkProps, ref) => {
          const { className: previousClasses, ...rest } = navLinkProps;
          const elementClasses = previousClasses?.toString() ?? "";
          return (
            <NavLink
              {...rest}
              ref={ref}
              to={props.to}
              end
              className={({ isActive }) =>
                isActive ? elementClasses + " Mui-selected" : elementClasses
              }
            />
          );
        }
      ),
    [props.to]
  );

  return (
    <ListItemButton sx={{ ...props.sx }} component={MyNavLink}>
      {props.children}
    </ListItemButton>
  );
};

export default RouterLink;
