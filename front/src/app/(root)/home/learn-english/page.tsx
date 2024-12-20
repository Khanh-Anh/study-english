'use client'
import FlipCard from "@/components/organisms/flip-card";
import { Box, Button, Typography } from "@mui/material";
import SwipeToSlide from "@/components/organisms/swipe-to-slide";

const settings = {
    className: "flex justify-center",
    slidesToShow: 1,
    swipeToSlide: true,
    centerPadding: "60px",
    infinite: false,
    responsive: [],
    lazyLoad: true,
    fade: true,
}
function LearnEnglish() {

    return ( 
           <Box className="">
            <Box>    
                <SwipeToSlide setting={settings}>
                    <FlipCard vocabulary="Hello" pronunciation="Həˈləʊ" definition="Used as a greeting or to begin a telephone conversation." example="Hello, how are you?" />
                    <FlipCard vocabulary="Hello" pronunciation="Həˈləʊ" definition="Used as a greeting or to begin a telephone conversation." example="Hello, how are you?" />
                    <FlipCard vocabulary="Hello" pronunciation="Həˈləʊ" definition="Used as a greeting or to begin a telephone conversation." example="Hello, how are you?" />
                </SwipeToSlide>
            </Box>
            <Box className="flex gap-2 justify-center w-[50%]">
                <Button variant="contained" color="primary" className="w-full">
                    next
                </Button>
                <Button variant="contained" color="primary" className="w-full">
                    next
                </Button>
                <Button variant="contained" color="primary" className="w-full">
                    next
                </Button>
                <Button variant="contained" color="primary" className="w-full">
                    next
                </Button>
            </Box>
           </Box>
     );
}

export default LearnEnglish;
