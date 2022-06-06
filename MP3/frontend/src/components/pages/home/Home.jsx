import { Grid, Box } from "@material-ui/core";

//components
import Header from "../../Header";
import Categories from "./Categories";
import Questions from "./Questions";

const Home = () => {
  return (
    <>
      <Grid container sx={{ m: 2 }} className="rohitj">
        {/* <Grid item>
                    <Categories />
                </Grid> */}
        <Box container item>
          {/* <Header text1={'HOME'} text2={'ABOUT US'} text3={'OUR TEAM'} text4={'CONTACT US'}/> */}

          <Questions />
        </Box>
      </Grid>
    </>
  );
};

export default Home;
