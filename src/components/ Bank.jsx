import { Box, display } from '@mui/system'
import React from 'react'
import MsmeBox from './MsmeBox'
import ProgressCircle from './ProgressCircle'

const  Bank = () => {
  return (
    <div style = {{padding:"1rem",display:"flex",flexWrap:"wrap",gap:"1rem"}}>
        <MsmeBox score={600} address = "Shavige Malleshwara Hills, 91st Main Rd, 1st Stage, Kumaraswamy Layout, Bengaluru, Karnataka 560078" company = {"Pride Rock Restraunt"} />
        <MsmeBox score ={200} address = "Bull Temple Rd, Basavanagudi, Bengaluru, Karnataka 560019" company={"Delhivery"} />
        {/* <MsmeBox />
        <MsmeBox />
   */}
    </div>
  )
}

export default  Bank