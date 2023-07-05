import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from './Profile';
import Setting from './Setting';
import CustomDrawer from './CustomDrawer';
import Main from './Main';


const Drawer = createDrawerNavigator();

const Drawernav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Main" component={Main} />
  </Drawer.Navigator>
  )
}

export default Drawernav