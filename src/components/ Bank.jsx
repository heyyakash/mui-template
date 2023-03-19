import { Box, display } from '@mui/system'
import React from 'react'
import MsmeBox from './MsmeBox'
import ProgressCircle from './ProgressCircle'

const  Bank = () => {
  return (
    <div style = {{padding:"1rem",display:"flex",flexWrap:"wrap",gap:"1rem"}}>
        <MsmeBox />
        <MsmeBox />
        <MsmeBox />
        <MsmeBox />
        <MsmeBox />
        <MsmeBox />
    </div>
  )
}

export default  Bank