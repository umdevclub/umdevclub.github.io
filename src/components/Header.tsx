import "@/styles/Header.scss";
import devclubLogo from "@/resources/images/devclub-logo.svg";
import devclubLogoHorizontal from "@/resources/images/devclub-logo-horizontal.svg";

import { useMemo } from "react";

import { NavLink, useLocation } from "react-router-dom";
import useToggle from "@/hooks/useToggle";

import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ComputerIcon from "@mui/icons-material/Computer";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
    title: ".devHacks",
    path: "/devhacks",
    icon: <ComputerIcon />,
  },
  {
    title: ".devChamps",
    path: "/devchamps",
    icon: <EmojiEventsIcon />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ContactSupportIcon />,
  },
  {
    title: "Link Tree",
    path: "/link-tree",
    icon: <AttachFileIcon />,
  },
];

const socialIcons = [
  {
    icon: InstagramIcon,
    url: "https://instagram.com/umdevclub/",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/company/umdevclub/about/",
  },
  {
    icon: GitHubIcon,
    url: "https://github.com/umdevclub/",
  },
];

function Header() {
  const location = useLocation();

  const activeMenuItemInd = useMemo(() => {
    const menuPaths = menuItems.map((menuItem) => menuItem.path);
    return menuPaths.indexOf(location.pathname);
  }, [location.pathname]);

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
            <Tabs value={activeMenuItemInd}>
              {menuItems.map((menuItem, menuItemInd) => (
                <Tab
                  className="menu-item"
                  label={menuItem.title}
                  component={NavLink}
                  to={menuItem.path}
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    paddingLeft: 5,
                    paddingRight: 5,
                    fontSize: "large",
                  }}
                  key={menuItemInd}
                />
              ))}
            </Tabs>
            <Stack
              spacing={5}
              direction="row"
              sx={{ marginRight: 4, marginLeft: 5, alignSelf: "center" }}
              className="social-media"
            >
              {socialIcons.map((socialIcon, socialIconInd) => (
                <Link
                  href={socialIcon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ padding: 0.5 }}
                  key={socialIconInd}
                >
                  {<socialIcon.icon />}
                </Link>
              ))}
            </Stack>
          </div>
          <MobileDrawerButton />
        </div>
      </div>
    </ThemeProvider>
  );
}

function MobileDrawerButton() {
  let [openDrawer, toggleOpenDrawer] = useToggle(false);

  const toggleDrawer = (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggleOpenDrawer();
  };

  const MobileDrawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={devclubLogo} alt=".devClub logo" style={{ width: "50%" }} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Stack
          spacing={5}
          direction="row"
          className="mobile-drawer-social-media"
        >
          {socialIcons.map((socialIcon, socialIconInd) => (
            <Link
              href={socialIcon.url}
              target="_blank"
              rel="noopener noreferrer"
              key={socialIconInd}
            >
              {<socialIcon.icon style={{ color: "black" }} />}
            </Link>
          ))}
        </Stack>
      </div>

      <Divider />
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} component={NavLink} to={menuItem.path} button>
            <ListItemIcon> {menuItem.icon} </ListItemIcon>
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        className="menu-button"
        onClick={toggleDrawer}
        sx={{ transform: openDrawer ? "rotate(90deg)" : "rotate(0deg)" }}
      >
        <MenuIcon
          color="primary"
          sx={{ fontSize: 50 }}
          style={{ color: "white" }}
        />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {MobileDrawerContent}
      </SwipeableDrawer>
    </>
  );
}

export default Header;
