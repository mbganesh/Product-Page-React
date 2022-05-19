import React from 'react'

import CustomerManagement from '../Images/FeaturesImage/CustomerManagement.svg'
import FitInAllDevice from '../Images/FeaturesImage/FitInAllDevice.svg'
import ReportGeneration from '../Images/FeaturesImage/ReportGeneration.svg'
import QuickOrder from '../Images/FeaturesImage/QuickOrder.svg'
import OneTimeMeasurement from '../Images/FeaturesImage/OneTimeMeasurement.svg'
import MobileApp from '../Images/FeaturesImage/MobileApp.svg'
import InteractiveCharts from '../Images/FeaturesImage/InteractiveCharts.svg'
import GSTBilling from '../Images/FeaturesImage/GSTBilling.svg'
import { Typography } from '@mui/material'

import { styled } from '@mui/system'
import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'

export default function Features() {

    const TitleHeadDiv = styled("div")(({ theme }) => ({
        display: "flex",
        paddingLeft: "5%",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "5%",
        marginBottom:'1%'
      }));

    const myData = [
        {
            title:'Customer Management',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:CustomerManagement
        },
        {
            title:'Quick Order Placement',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:QuickOrder
        },
        {
            title:'Interactive Charts',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:InteractiveCharts
        },
        {
            title:'GST Billing & Discount',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:GSTBilling
        },
        {
            title:'Report Generation',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:ReportGeneration
        },
        {
            title:'One Time Measurement',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:OneTimeMeasurement
        },
        {
            title:'Mobile App for Customers',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:MobileApp
        },
        {
            title:'Fits in All Devices',
            content:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            image:FitInAllDevice
        },
    ]
    
  return (
    <div style={{paddingTop:100}}>
      
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
          Features
        </Typography>
      </TitleHeadDiv>

       <div style={{display:'flex' , justifyContent:'center' , flexWrap:'wrap' , padding:'10px' , }}>
       {
            myData.map((obj , i) => (
                <div key={i} style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    padding:'10px',
                    margin:'10px',
                    height:'250px',
                }}>
                   <div style={{margin:'5px 0'}}>
                   <img src={obj.image}  />
                   </div>
                   <div style={{margin:'5px 0'}}>
                   <Typography variant='subtitle1'  sx={{ color:Colors.MAIN_COLOR, textAlign:'center' , fontWeight:'bold',fontFamily: Fonts.MAIN_FONT,}}> {obj.title} </Typography>
                   </div>
                   <div style={{margin:'5px 0'}}>
                   <Typography variant='body1' sx={{textAlign:'center',fontFamily: Fonts.MAIN_FONT,}}> {obj.content} </Typography>
                   </div>
                </div>
            ))
        }
       </div>

    </div>
  )
}
