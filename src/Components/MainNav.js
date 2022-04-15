import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./MainNav.css";
import { Movie, Search, Tv, Whatshot } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#334778",
    color: "#fff",
    bottom: 0,
    Height: "180px",
    padding: "2rem",
  },
});
const MainNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <div className="mainNav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction label="Movies" icon={<Movie />} />
        <BottomNavigationAction label="Tv Series" icon={<Tv />} />
        <BottomNavigationAction label="Search Movies" icon={<Search />} />
      </BottomNavigation>
    </div>
  );
};

export default MainNav;
