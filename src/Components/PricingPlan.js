import React from "react";
import { styled } from "@mui/system";
import { Typography, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousRoundedIcon from "@mui/icons-material/DangerousRounded";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function PricingPlan() {
  const CardStyle = (theme) => ({
    width: "350px",
    height: "725px",
    margin: "5px 2.5px",
    [theme.breakpoints.up('md')]:{
      width: "400px",
    }
  });

  const TitleHeadDiv = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
  }));

  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 auto",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // width: "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      // width: "67%",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("lg")]: {
      // width: "82%",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("xl")]: {
      // width: "67%",
      justifyContent: "space-evenly",
    },
  }));

  const smartTailor = [
    { title: "Smart Tailor Shop", rate: "₹ 6999 /month", color: "#96546F" },
    { title: "Smart Tailor Shop Pro", rate: "₹ 7999 /month", color: "#7E8BB8" },
    {
      title: "Smart Tailor Shop Ulimate",
      rate: "₹ 9999 /month",
      color: "#C8892A",
    },
  ];

  const smartTailorProDetails = [
    "Customer Management",
    "Interactive Charts",
    "Report Generation",
    "Rates Updater",
    "Smart Billing",
    "Live Support",
    "Free Installation",
    "Fit in all Devices",
    "Stiching Team Login Panel",
    "Stiched Dress Image Updater",
    "Export Customer Details & Order Details as Excel File",
    "Separate App for Customers",
  ];

  const smartTailorOrders = [
    "500 Orders Placement",
    "1000 Orders Placement",
    "Unlimited Orders Placement",
  ];

  return (
    <div style={{ paddingTop: 100 }}>
      <TitleHeadDiv>
        <Typography
          variant="h4"
          style={{
            justifyContent: "center",
            color: Colors.LIGHT_COLOR,
            fontWeight: "bold",
          }}
        >
          Pricing Plans
        </Typography>
      </TitleHeadDiv>

      <div>
        {/* Full vertical page */}
        <div style={{ width: "100%", margin: "25px 0" }}>
          {/* 67% middle of page */}

          <DivStyle1>
            {smartTailor.map((obj, index) => (
              <Card
                key={index}
                sx={CardStyle}
                style={{ border: `2px solid ${obj.color}` }}
              >
                <CardContent>
                  <div
                    style={{
                      backgroundColor: obj.color,
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        fontFamily: Fonts.MAIN_FONT,
                      }}
                    >
                      {obj.title}{" "}
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        fontFamily: Fonts.MAIN_FONT,
                      }}
                    >
                      {obj.rate}
                    </Typography>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 20,
                    }}
                  >
                    <CheckCircleIcon style={{ color: "green" }} />
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: Fonts.MAIN_FONT, paddingLeft: 1 }}
                    >
                      {smartTailorOrders[index]}
                    </Typography>
                  </div>

                  {smartTailorProDetails.map((text, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 20,
                      }}
                    >
                      {obj.title === "Smart Tailor Shop" && index > 7 ? (
                        <DangerousRoundedIcon style={{ color: "grey" }} />
                      ) : obj.title === "Smart Tailor Shop Pro" && index > 9 ? (
                        <DangerousRoundedIcon style={{ color: "grey" }} />
                      ) : (
                        <CheckCircleIcon style={{ color: "green" }} />
                      )}

                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: Fonts.MAIN_FONT,
                          paddingLeft: 1,
                          color:
                            obj.title === "Smart Tailor Shop" && index > 7
                              ? "grey"
                              : obj.title === "Smart Tailor Shop Pro" &&
                                index > 9
                              ? "grey"
                              : "black",
                        }}
                      >
                        {text}
                      </Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </DivStyle1>
        </div>
      </div>
    </div>
  );
}
