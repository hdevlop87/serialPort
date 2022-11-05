import React from 'react'
import { NavbarContainer, VL } from './navbar.stylde';
import IconButton from '../IconButton';
import { Colors } from '../../styles';
import { createPort, pausPort, deletePort, clearAll} from '../../features/portSlice';
import { useDispatch } from "react-redux";
import {clearMessage} from '../../features/messageSlice'

const Navbar = () => {

   const dispatch = useDispatch();

   const buttons = [
      {
         key: "open",
         props: {
            icon: "bxs:folder-open",
            color: Colors.orange_normal,
            size: "lg"
         },
         type: IconButton
      },
      {
         key: "save",
         props: {
            icon: "entypo:save",
            color: Colors.purple_normal,
            size: "lg"
         },
         type: IconButton
      },
      {
         key: "VL1",
         type: VL
      },
      {
         key: "play",
         props: {
            icon: "carbon:play-filled-alt",
            color: Colors.blue_normal,
            size: "lg"
         },
         type: IconButton
      },
      {
         key: "pause",
         props: {
            icon: "entypo:controller-paus",
            color: Colors.blue_normal,
            size: "lg"
         },
         type: IconButton
      },
      {
         key: "stop",
         props: {
            icon: "carbon:stop-filled-alt",
            color: Colors.blue_normal,
            size: "lg"
         },
         type: IconButton
      },
      {
         key: "VL2",
         type: VL
      },
      {
         key: "clear",
         props: {
            icon: "ant-design:clear-outlined",
            color: Colors.red_normal,
            size: "lg"
         },
         type: IconButton
      },
      {
         key: "setting",
         props: {
            icon: "ant-design:setting-filled",
            color: Colors.gray_dark,
            size: "lg"
         },
         type: IconButton
      },
   ]

   const handleClick = (e) => {

      dispatch(clearMessage())

      switch (e) {
         case 'play':
            dispatch(createPort())
            break;
         case 'pause':
            dispatch(pausPort())
            break;
         case 'stop':
            dispatch(deletePort())
            break;
         case 'clear':
            dispatch(clearAll())
            break;
         // case 'save':
         //    dispatch(saveAll())
         //    break;
         // case 'open':
         //    dispatch(openFile())
         //    break;
         default:
            break;
      }
   }

   return (
      <NavbarContainer>

         {
            buttons.map(e => {
               return (
                  <div key={e.key} onClick={() => handleClick(e.key)}>
                     {React.createElement(e.type, e.props)}
                  </div>
               )
            })
         }

      </NavbarContainer>
   )
}

export default Navbar 