import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function AppDemo() {
  const TitleHeadDiv = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
    marginBottom:'5%',
  }));

  const VideoPanel = styled("div")(({ theme }) => ({
   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:'50%',
    // height:'40%',
    [theme.breakpoints.down('md')]:{
      width:'80%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'90%'
    }
  }));

  return (
    <div style={{paddingTop:100}}>
      <TitleHeadDiv>
        <Typography
          variant="h4"
          style={{
    fontFamily: Fonts.MAIN_FONT,
            justifyContent: "center",
            color: Colors.LIGHT_COLOR,
            fontWeight: "bold",
          }}
        >
          App Demo
        </Typography>
      </TitleHeadDiv>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VideoPanel>
        <ReactPlayer
          width='100%'
          style={{width:'100%' }}
          height="100%"
          config={{
            file: { attributes: { controlsList: "nodownload" } },
          }}
          url={"https://youtu.be/pXyDgDLnRHw"}
          controls
        ></ReactPlayer>
        </VideoPanel>
      </div>
    </div>
  );
}
