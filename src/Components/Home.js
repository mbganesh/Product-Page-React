import { Button, Typography } from "@mui/material";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import BGImage from "../Images/img.jpg";

const first = (theme) => ({
  fontWeight: "bold",
  color: Colors.LIGHT_COLOR,
  fontSize: "32px",
  fontFamily: Fonts.MAIN_FONT,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
});

const second = (theme) => ({
  fontWeight: "bold",
  color: Colors.LIGHT_BLACK_COLOR,
  fontSize: "32px",
  fontFamily: Fonts.MAIN_FONT,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
});

const third = (theme) => ({
  fontWeight: "bold",
  color: Colors.MAIN_COLOR,
  fontSize: "32px",
  fontFamily: Fonts.MAIN_FONT,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
});

export default function Home() {
  const sentence = [
    "CRAGAN",
    "Some Description",
    "Starts @ 2999/- only",
  ];

  return (
    <div
      style={{
        padding: "10% 0 10% 5%",
        backgroundImage: `url(${BGImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // marginTop:80
      }}
    >
      {sentence.map((text) => (
        <div>
          <Typography
            sx={
              text === "Smart Tailor Shop"
                ? first
                : text === "Some Description"
                ? second
                : third
            }
          >
            {text}
          </Typography>
        </div>
      ))}
           <Button
              variant="contained"
              sx={{
                color: "#fff",
                fontFamily: Fonts.MAIN_FONT,
                backgroundColor: Colors.MAIN_COLOR,
                "&:hover": { backgroundColor: Colors.MAIN_COLOR },
                fontWeight: "bold",
              }}
            >
              Buy Now
            </Button>
    </div>
  );
}

