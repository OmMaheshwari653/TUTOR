import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  aliceBlueColor,
  brownColor,
  captionColor,
  mattBlack,
} from "../constants/color";
import {
  Pages as HomeIcon,
  Add as AddIcon,
  Book as BookIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

import { useNavigate, Link } from "react-router-dom";
import NewBatch from "../specific/NewBatch";

const IconBtn = ({ title, onclick, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton sx={{ color: `${captionColor}` }} onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Header = () => {
  const [newBatch, setIsNewBatch] = useState(false);

  const navigate = useNavigate();
  const navigateToAllBatch = () => {
    navigate("/batch");
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const handleNewBatch = () => {
    setIsNewBatch((prev) => !prev);
  };

  const handleCloseNewBatch = () => {
    setIsNewBatch(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: mattBlack,
        }}
      >
        <Toolbar>
          <IconBtn title="Tutor" onclick={navigateToHome} icon={<HomeIcon />} />
          <Link
            to="/"
            style={{ textDecoration: "none", color: aliceBlueColor }}
          >
            <Typography variant="h6" sx={{ color: `${aliceBlueColor}` }}>
              Tutor
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconBtn
              title="New Batch"
              onclick={handleNewBatch}
              icon={<AddIcon />}
            />
            <IconBtn
              title="View Batches"
              onclick={navigateToAllBatch}
              icon={<BookIcon />}
            />
            <IconBtn
              title="Profile"
              onclick={navigateToProfile}
              icon={<ProfileIcon />}
            />
            <IconBtn
              title="Logout"
              onclick={navigateToLogin}
              icon={<LogoutIcon />}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <NewBatch open={newBatch} onClose={handleCloseNewBatch} />
    </>
  );
};

export default Header;
