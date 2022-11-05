import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import store from "../features/store";
import { Provider } from "react-redux";
import SerialSetting from '../components/SerialSetting'
import { GlobalStyle } from '../styles/Global.styled'
import { AppContainer, Content, LeftContent,RightContent } from '../components/App.styled';
import Navbar from '../components/Navbar'
import ReceiveSetting from '../components/ReceiveSetting';
import SendSetting from '../components/SendSetting';
import ReceiveArea from '../components/ReceiveArea';
import SendArea from '../components/SendArea';
import PortState from '../components/PortState';


const AppWrapper = () => {
   const theme = useSelector(state => state.theme);
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <React.Fragment>
            <Head>
               <title>Serial Port</title>
            </Head>
            <AppContainer>
               <Navbar />
               <Content>

                  <LeftContent>
                     <SerialSetting />
                     <ReceiveSetting/>
                     <SendSetting/>
                     <PortState/>
                  </LeftContent>

                  <RightContent>
                     <SendArea/>
                     <ReceiveArea/>
                  </RightContent>

               </Content>
            </AppContainer>

         </React.Fragment>
      </ThemeProvider>
   )
}

function Home() {
   return (
      <Provider store={store}>
         <AppWrapper />
      </Provider>
   );
};

export default Home;
