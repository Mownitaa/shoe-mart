import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, MenuItem } from '@mui/material';
import { NavLink, Router } from 'react-router-dom';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import {DashboardHome} from '../DashboardHome/DashboardHome';
import {AddAdmin} from '../AddAdmin/AddAdmin';
import { Customers } from '../Customers/Customers';
import useAuth from '../../../hooks/useAuth';
import { AddCustomer } from '../Customers/AddCustomer';
import { AdminProducts } from '../AdminProducts/AdminProducts';
import { AddProduct } from '../AdminProducts/AddProduct';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 180;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
const {admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink className='text-black' to="/home"><MenuItem>Shoe-Mart</MenuItem>
      </NavLink>
      <Link className='text-black' to={`${url}`} ><MenuItem>Dashboard</MenuItem></Link>
    {
      admin && <Box>
        <Link className='text-black' to={`${url}/addAdmin`}><MenuItem>Add New Admin</MenuItem></Link>
      <Link className='text-black' to={`${url}/customers`}><MenuItem >Customers</MenuItem></Link>
      <Link className='text-black' to={`${url}/addCustomer`}><MenuItem >Add Customer</MenuItem></Link>
      <Link className='text-black' to={`${url}/products`}><MenuItem >Products</MenuItem></Link>
      <Link className='text-black' to={`${url}/addProduct`}><MenuItem >Add Product</MenuItem></Link>
      </Box>
    }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ mb:20,display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />  
        <Switch>
          <Route exact path={path}>
          <DashboardHome></DashboardHome>
          </Route>
          <Route exact={true} path={`${path}/addAdmin`}>
            <AddAdmin></AddAdmin>
          </Route>
          <Route exact={true} path={`${path}/customers`}>
            <Customers></Customers>
          </Route>
          <Route exact={true} path={`${path}/addCustomer`}>
            <AddCustomer></AddCustomer>
          </Route>
          <Route exact={true} path={`${path}/products`}>
            <AdminProducts></AdminProducts>
          </Route>
          <Route exact={true} path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
