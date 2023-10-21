import React, { useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from '../MainComponent';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistartionScreen';
import { LoginInfo } from '../FrontScreen';
import Products from './Products';
import CustomerComponent from './CustomerComponent';
import OrderComponent from './OrderComponent';
import AnalyticsComponent from './AnalyticsComponent';
// import ProductSearch from '../ProductSearch';



const NavigationStack = () => {
    const loginflag = useContext(LoginInfo);
    

    return (
        <BrowserRouter>
            <Routes>
                {
                    loginflag.login ? (
                        <>
                        <Route path="/Dashboard" element={<MainComponent />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/Customers" element={<CustomerComponent />} />
                        <Route path="/Orders" element={<OrderComponent />} />
                        <Route path="/Analytics" element={<AnalyticsComponent/>} />
                        {/* <Route path="/ProductSearch" element={<ProductSearch/>} /> */}
                        </>
        
                    ) 
                    : 
                    <>
                    <Route path="/LoginScreen" element={<LoginScreen />} />
                    <Route path="/" element={<RegistrationScreen />} />

                    </>
                }
            </Routes>
        </BrowserRouter>
    );
};

export default NavigationStack;



