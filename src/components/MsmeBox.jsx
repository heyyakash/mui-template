import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import ProgressCircle from './ProgressCircle'

const MsmeBox = ({score,company,address}) => {
    return (
        <Box borderRadius={"5px"} position="relative" width={"350px"} height={"300px"} padding={"1rem"} backgroundColor={"#12294a"}>
            <div style={{ display: "flex", marginTop: "-1rem", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>{company}</h2>
                    <h3 style={{ marginTop: "-1rem" }}>ABC</h3>
                </div>
                <div>
                    <ProgressCircle progress={(parseInt(score)/1000).toString()} />
                    &nbsp;&nbsp;{score}
                </div>
            </div>
            <p style={{ fontSize: "1.2rem" }}>
                {address}
            </p>
            <Link to={"/dashboard/123"} style={{ marginTop: "auto", position: "absolute", bottom: "1rem", border: "none", display: "grid", placeItems: "center", borderRadius: "10px", cursor: "pointer", height: "50px", width: "90%", background: "lightseagreen" }}>Get Details</Link>
        </Box>
    )
}

export default MsmeBox