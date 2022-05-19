import React from 'react'
import { styled } from "@mui/system";
import { Typography } from '@mui/material';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

export default function About() {

    const myData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"
    
    const TitleHeadDiv = styled("div")(({ theme }) => ({
        display: "flex",
        paddingLeft: "5%",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "5%",
        margin:'1% 0'
      }));

  return (
    <div>
        <TitleHeadDiv>
        <Typography
          variant="h4"
          style={{
            justifyContent: "center",
            color: Colors.LIGHT_COLOR,
            fontWeight: "bold",
            fontFamily: Fonts.MAIN_FONT,
          }}
        >
          About
        </Typography>
      </TitleHeadDiv>

      <Typography
          variant="subtitle1"
          sx={{ textAlign:"justify", margin: '5px 0', color: "grey", textAlign:'center', fontFamily: Fonts.MAIN_FONT, }}
        >
          {" "}
          <span style={{ fontWeight: "bold", color: Colors.MAIN_COLOR , }}>
          CRAGAN
          </span>{" "}
          {myData}{" "}
        </Typography>


    </div>
  )
}
