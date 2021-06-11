import React,{useState} from 'react';
import SideNav from 'react-simple-sidenav';
import classes from './Navigation.css';
import ListIcon from '@material-ui/icons/List';
import {Link} from 'react-router-dom';

const Navigation = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <Link className={classes.link} to={{
        pathname: "/",
        header : "Dashboard"
      }}>Dashboard</Link>,
    <Link className={classes.link} to="/">Menu</Link>,
    <Link className={classes.link} to={{
        pathname: "/kitchen",
        header : "Kitchen"
      }}>Kitchen</Link>,
      <Link className={classes.link} to={{
        pathname: "/",
        header : "User"
      }}>User</Link>,
      <Link className={classes.link} to={{
        pathname: "/",
        header : "Orders"
      }}>Orders</Link>,
      <Link className={classes.link} to={{
        pathname: "/",
        header : "Promotions"
      }}>Promotions</Link>,
      <Link className={classes.link} to={{
        pathname: "/",
        header : "Banner"
      }}>Banner</Link>,
      <Link className={classes.link} to={{
        pathname: "/",
        header : "Report"
      }}>Report</Link>, 
  ];
 
  const title = <h1 className={classes.header}>Menu</h1>;
 
  return (
    <div className={classes.navbar}>
        <div className={classes.icon}>
            <ListIcon style={{ fontSize: 40 }} onClick={() => setShowNav(true)} />
        </div>
        <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} 
        titleStyle={{ backgroundColor: '#4CAF50' }}
        itemStyle={{ backgroundColor: '#fff' }}
        itemHoverStyle={{ backgroundColor: '#CDDC39' }}/>
    </div>
  );
};

export default Navigation;