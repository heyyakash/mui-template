import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import { fontWeight } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Social Media " subtitle="Represents social me" />
      <Box height="75vh" width={"100%"} display = "flex" alignItems={"center"} gap = {"10rem"} padding = {"5rem"} >
        <ProgressCircle size = {500}  progress = {.57} />  
        <Box display="flex" flexDirection = "column">
          <h1 style = {{color:"lightseagreen" ,fontWeight:"500", fontSize:"2rem"}}>
            Your Social media score is <b>570</b>
          </h1>
          <p style = {{fontSize:"1.5rem ", marginTop:"-1rem"}}>Here are some tips to enhance your score</p>
          <Box display = "flex" flexDirection = "column" >
  
            <Box display={"flex"} alignItems = "center" gap = "1rem" fontSize={"1.35rem"}>
              <CheckIcon style = {{color:"lightseagreen"}} />
              <p>Do Some shit</p>
            </Box>
            <Box display={"flex"} alignItems = "center" gap = "1rem" fontSize={"1.35rem"}>
              <CheckIcon style = {{color:"lightseagreen"}} />
              <p>Do Some shit</p>
            </Box>
            <Box display={"flex"} alignItems = "center" gap = "1rem" fontSize={"1.35rem"}>
              <CheckIcon style = {{color:"lightseagreen"}} />
              <p>Do Some shit</p>
            </Box>
            <Box display={"flex"} alignItems = "center" gap = "1rem" fontSize={"1.35rem"}>
              <CheckIcon style = {{color:"lightseagreen"}} />
              <p>Do Some shit</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Bar;
