import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Kullanıcı giriş durumu
  const [settings, setSettings] = useState(['Profile', 'Logout']); // Varsayılan ayarlar

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setSettings(['My Blog', 'Profile', 'Logout']);// Giriş yapıldığında ayarları güncelle
  };

  return (
    <div>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaA0uzO5iQ4NnIJ73HqeT1FqBTAEw6N_Mt4Q&s" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            {setting}
          </MenuItem>
        ))}
      </Menu>
      <button onClick={handleLogin}>Login</button> {/* Giriş butonu */}
    </div>
  );
}

export default UserMenu;
