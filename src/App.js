import Features from "./Components/Features";
import Footer from "./Components/Footer";
import PricingPlan from "./Components/PricingPlan";
import About from "./Components/About";
import AppDemo from "./Components/AppDemo";
import { Toolbar, Button, Typography } from "@mui/material";
import { useRef } from "react";
import Home from "./Components/Home";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiAppBar from "@mui/material/AppBar";
import Colors from "./constants/Colors";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const MenuButton = (theme) => ({
  color: "#fff",
  fontWeight: "bold",
  margin: "0px 10px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
});

const ButtonHide=(theme)=>({
  color: "#fff",
  backgroundColor: Colors.MAIN_COLOR,
  "&:hover": { backgroundColor: Colors.MAIN_COLOR },
  fontWeight: "bold",
  margin: "0px 10px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  }
})


const TitleStyle =(theme)=>({
  flexGrow: 1 ,
  whiteSpace:'nowrap',
  fontWeight:'bold',
  cursor:'pointer',
  fontSize:'24px',
  [theme.breakpoints.up('md')]:{fontSize:'32px'}
  
})

function App() {
  
  const HomeRef = useRef(null);
  const FeaturesRef = useRef(null);
  const DemoRef = useRef(null);
  const PricingRef = useRef(null);

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerMenu = (theme) => ({
    ...(open && { display: "none" }),

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  });

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });

    handleDrawerClose();
  };

  const AppBarData = [
    {
      text: "Home",
      ref: HomeRef,
    },
    {
      text: "Features",
      ref: FeaturesRef,
    },
    {
      text: "Demo",
      ref: DemoRef,
    },
    {
      text: "Pricing",
      ref: PricingRef,
    },
  ];
  
  return (
    <div>
      <div style={{ display: "flex" }}>
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ backgroundColor: Colors.LIGHT_COLOR, height: 75 }}>
            <Typography  sx={TitleStyle} onClick={  () => {window.scrollTo({ top: -50, behavior: 'smooth', })}}>
              RedReina 
            </Typography>

            {AppBarData.map((obj, i) => (
              <Button
                key={i}
                sx={MenuButton}
                onClick={
                  obj.text !== 'Home'?
                  () => {scrollToSection(obj.ref)}
                  :
                  () => {window.scrollTo({ top: -50, behavior: 'smooth', })}
                }
              >
                {obj.text}
              </Button>
            ))}

            <Button
              variant="contained"
              sx={ButtonHide}
            >
              Buy Now
            </Button>
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              sx={DrawerMenu}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {AppBarData.map((obj, i) => (
              <ListItem key={obj} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(obj.ref);
                  }}
                >
                  <ListItemText primary={obj.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>

     <div ref={HomeRef}>
     <Home  />
       </div>
      <br />
      <About />
      <br />
      <div ref={FeaturesRef}>
      <Features />
      </div>
      <br />
     <div ref={DemoRef}>
     <AppDemo />
     </div>
      <br />
      <div ref={PricingRef} >
        <PricingPlan  />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
