import React, { useState, useEffect } from 'react';
import BoxCard from '../BoxCard'
import { Container } from './SendArea.styled';
import Buttons from '../Buttons';
import TextFiled from '../TextFiled';
import { writePort } from '../../features/portSlice';
import { useDispatch, useSelector } from "react-redux";


const SendArea = () => {
   const { append, sendType, time, loop } = useSelector(state => state.setting.sendSetting);

   const dispatch = useDispatch();
   const [value, setValue] = useState('');

   const SendData = () => {
      const res = [];
      const data = ''

      const appendText = {
         "None": ``,
         "CR": `\r`,
         "LF": `\n`,
         "CR-LF": `\r\n`
      }

      const appendHex = {
         "None": ``,
         "CR": `0D`,
         "LF": `0A`,
         "CR-LF": `0D0A`
      }

      if (sendType == "Hex") {
         data = value + appendHex[append]
         data = data.replace(/[0x ]/g, "")

         for (let i = 0; i < data.length; i += 2) {
            res.push("0x" + data.slice(i, i + 2));
         }

         dispatch(writePort(res));
      } 
      else {
         data = value + appendText[append]
         dispatch(writePort(data));
      }

   }

   useEffect(() => {

      const interval = null

      if (loop) {
         interval = setInterval(() => {
            SendData()
         }, time);
      }

      return () => clearInterval(interval);
   }, [time, loop, value]);

   return (
      <BoxCard title="Send data:" pd={12} height={72} row>
         <Container>
            <TextFiled
               value={value}
               callback={e => setValue(e)}
            />
         </Container>
         <Buttons bg="purple" onClick={SendData}>Send</Buttons>
      </BoxCard>
   )
}

export default SendArea