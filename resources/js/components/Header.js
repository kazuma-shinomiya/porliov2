import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  const logout = async() => {
    await axios
            .post('/logout')
            .then(response => {
                console.log('ログアウトしました');
                setIsAuth(false);
            })
            .catch(error => {
                console.log('ログアウト失敗');   
            })
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Porlio
          </Typography>
          <Button color="inherit">
            <a href="/login">ログイン</a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
