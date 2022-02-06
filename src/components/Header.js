import "@/styles/Header.css";
import devclubLogo from "@/resources/images/devclub-logo.svg";
import devclubLogoHorizontal from "@/resources/images/devclub-logo-horizontal.svg";

import React from "react";

import { NavLink } from "react-router-dom";
import useToggle from "@/hooks/useToggle";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const headerTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const menuItems = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <EventIcon />,
  },
  {
    title: "DevChamps",
    path: "/devchamps",
    icon: <EmojiEventsIcon />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ContactSupportIcon />,
  },
];

function Header(props) {
  const activeMenuItemInd = React.useMemo(() => {
    const menuPaths = menuItems.map((menuItem) => menuItem.path);
    return menuPaths.indexOf(props.location.pathname);
  }, [props.location.pathname]);

  return (
    <ThemeProvider theme={headerTheme}>
      <div className="header">
        <div className="strip">
          <div className="badge">
            <img src={devclubLogo} alt=".devClub logo" className="vertical" />
            <img
              src={devclubLogoHorizontal}
              alt=".devClub logo (horizontal)"
              className="horizontal"
            />
          </div>
          <div className="menu-items-container">
            {
              <Box
                sx={{ borderBottom: 1, borderColor: "divider", height: 100 }}
              >
                <Tabs value={activeMenuItemInd} sx={{ height: 100 }}>
                  {menuItems.map((menuItem) => (
                    <Tab
                      className="menu-item"
                      label={menuItem.title}
                      component={NavLink}
                      to={menuItem.path}
                      sx={{
                        height: 100,
                        color: "rgba(255, 255, 255, 0.6)",
                        paddingLeft: 8,
                        paddingRight: 8,
                        fontSize: "large",
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
            }
          </div>
          <MobileDrawerButton />
        </div>
      </div>
    </ThemeProvider>
  );
}

function MobileDrawerButton() {
  let [openDrawer, toggleOpenDrawer] = useToggle(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggleOpenDrawer();
  };

  const DrawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={devclubLogo} alt=".devClub logo" style={{ width: "50%" }} />
      </div>
      <Divider />
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem
            key={index}
            component={NavLink}
            exact={true}
            to={menuItem.path}
            button
          >
            <ListItemIcon> {menuItem.icon} </ListItemIcon>
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton className="menu-button" onClick={toggleDrawer(true)}>
        <MenuIcon
          color="primary"
          sx={{ fontSize: 50 }}
          style={{ color: "white" }}
        />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {DrawerContent}
      </SwipeableDrawer>
    </>
  );
}

export default Header;
