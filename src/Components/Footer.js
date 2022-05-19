import { IconButton, Typography } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import LocationIcon from "@mui/icons-material/FmdGood";
import MailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import {  styled } from "@mui/system";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function Footer() {

  const RootContainer  = styled("div")(({theme}) => ({
    backgroundColor: Colors.LIGHT_COLOR,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }))

  const SingleContainer  = styled("div")(({theme}) => ({
    width:'350px', margin: "10px", padding: "10px" 
  }))

  const ConnectWithUs = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ganesh.jdev",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/ganesh-jdev/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/mb_ga.ne.sh_dev/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/Ganesh_jdev",
    },
  ];

  return (
    <RootContainer>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <SingleContainer>
          <Typography
            variant="h5"
            sx={{ fontFamily: Fonts.MAIN_FONT, fontWeight: "bold" }}
          >
            Connect With Us
          </Typography>
          <div>
            {ConnectWithUs.map((obj, index) => (
              <IconButton
                key={index}
                sx={{ color: "#fff" }}
                onClick={() => {
                  window.open(obj.link);
                }}
              >
                {obj.icon}
              </IconButton>
            ))}
          </div>
        </SingleContainer>

        <SingleContainer>
          <Typography
            variant="h5"
            sx={{ fontFamily: Fonts.MAIN_FONT, fontWeight: "bold" }}
          >
            Head Office
          </Typography>
          <div style={{ display: "flex", color: "white", marginTop: 5 }}>
            <LocationIcon style={{ marginRight: 15 }} />
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: Fonts.MAIN_FONT }}
            >
              No. 1, First Street,<br/> Second Roat, XXXX, <br />
              YYYY.
            </Typography>
          </div>

          <div style={{ display: "flex", color: "white", marginTop: 5 }}>
            <MailIcon style={{ marginRight: 15 }} />
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", fontFamily: Fonts.MAIN_FONT }}
              onClick={() => {
                window.open("mailto:mbganesh.jdev.com",'_self');
              }}
            >
              mbganesh.jdev.com
            </Typography>
            {/* mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello! */}
          </div>

          <div style={{ display: "flex", color: "white", marginTop: 5 }}>
            <PhoneIcon style={{ marginRight: 15 }} />
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", fontFamily: Fonts.MAIN_FONT }}
              onClick={() => {
                window.open("tel:8489991253",'_self');
              }}
            >
              {" "}
              +91 848 9999 1253{" "}
            </Typography>
          </div>
        </SingleContainer>

        <SingleContainer>
          <Typography
            variant="h5"
            sx={{ fontFamily: Fonts.MAIN_FONT, fontWeight: "bold" }}
          >
            Corporate Office
          </Typography>
          <div style={{ display: "flex", color: "white", marginTop: 5 }}>
            <LocationIcon style={{ marginRight: 15 }} />
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: Fonts.MAIN_FONT }}
            >
              No. 2, First Street,<br/> Second Roat, XXXX, <br />
              YYYY.
            </Typography>
          </div>

          <div style={{ display: "flex", color: "white", marginTop: 5 }}>
            <MailIcon style={{ marginRight: 15 }} />
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", fontFamily: Fonts.MAIN_FONT }}
              onClick={() => {
                window.open("mailto:mbganesh.jdev.com" , '_self');
              }}
            >
              mbganesh.jdev.com
            </Typography>
          </div>

          <div style={{ display: "flex", color: "white", marginTop: 5 }}>
            <PhoneIcon style={{ marginRight: 15 }} />
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", fontFamily: Fonts.MAIN_FONT }}
              onClick={() => {
                window.open("tel:+918838531474",'_self');
              }}
            >
              {" "}
              +91 883 853 1474
            </Typography>
          </div>
        </SingleContainer>
      </div>

      <Typography
        sx={{
          fontFamily: Fonts.MAIN_FONT,
          textAlign: "center",
          whiteSpace:'nowrap',
          padding:'10px 0',
        }}
        variant='body2'
      >
        Designed & Developed by <span style={{cursor:'pointer' , fontWeight:'bold'}} onClick={() => {window.open('https://mbganesh.github.io/my_profile/')}}>Ganesh</span>.
      </Typography>
    </RootContainer>
  );
}
