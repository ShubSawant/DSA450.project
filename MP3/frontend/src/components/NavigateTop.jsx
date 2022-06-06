import React,{useEffect, useState} from 'react'
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import { Box, Zoom } from "@material-ui/core";

function NavigateTop() {

  const [visible, setVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    )
  }, [])
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };  
    return (
        <Box >
            {visible && (<Zoom in={true} style={{ transitionDelay: true ? '500ms' : '0ms', position:"fixed",
          right: 10,bottom: 15 }}>
            <Fab color="secondary" variant="circular" >
                <NavigationIcon sx={{ mr: 1 }} onClick={scrollToTop}  />
            </Fab></Zoom>)}
        
        </Box>
    )
}

export default NavigateTop