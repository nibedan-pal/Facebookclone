import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import ForumIcon from "@mui/icons-material/Forum"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Link } from "react-router-dom";
import { Results } from "./Res";


function Header() {
  const [showResults, setShowResults] = React.useState(false)
  return (
    <div className="header">
      <div className="header__left">
      <Link to="/" style={{ textDecoration: "none" }}>
          <img
            alt="facebook"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
          />
        </Link>

        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <Link to="/">
            <HomeIcon fontSize="large" />
          </Link>
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <Link
            to="/profile/atul"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h4>Anurag</h4>
          </Link>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton onClick={() => {
    setShowResults(!showResults)
  }}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <div>
      

      { showResults ? <Results /> : null }
      </div>
    </div>
  );
}

export default Header