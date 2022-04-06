import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return <header className='flex justify-between p-6 mb-8'>
    <Link href='/'>
      <a className='text-white font-extrabold shadow-lg bg-teal-600 p-2 rounded-md shadow-teal-500/50 tracking-wide hover:underline'>Distribuidora USAP</a>
    </Link>
    <nav>
      <Avatar>      
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='text-white'>OP</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Cuenta</MenuItem>
        <MenuItem onClick={handleClose}>Salir</MenuItem>
      </Menu>
      </Avatar>
    </nav>
  </header>
}

export default Header;