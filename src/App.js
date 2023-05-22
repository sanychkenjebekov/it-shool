import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import God from "./pages/Price/God";
import Page from "./pages/Courses/page/Page";
import Month from "./pages/Price/Month";
import GodPlus from "./pages/Price/GodPlus";
import Uvedomlenie from "./pages/Uvedomlenie";
import React, {useEffect} from "react";
import MonthPromotion from "./pages/Price/MonthPromotion";
import Podpisatsa from "./pages/Podpisatsia";
import Voity from "./components/Voity/Voity";
import Dashboard from "./pages/person/dashboard/Dashboard";
import OurSchool from "./components/About-School/Our-school";
import Cards from "./pages/person/Cards/Cards";
import Follows from "./pages/person/follows/Follows";
import FrBuy from "./pages/FrBuy";
import AllMaps from "./components/About-School/ All-Maps/All-Maps";
import RegisterCourse from "./components/About-School/registerCourse";
import More from "./HomePage/More";
import Home from "./HomePage";
import Reactivity from "./pages/Reactivity";
import JavaRu from "./pages/JavaIt/javaRu";
import Master2 from "./components/About-School/Master2";
import Front from "./pages/program course/FR";
import AboutUs from "./pages/aboutUs/aboutUs";
import BackEnd from "./pages/FrBuy/bek";
import UxUi from "./pages/FrBuy/UxUi";
import Devops from "./pages/FrBuy/devOps";
import Android from "./pages/FrBuy/android";
import DevJava from "./pages/FrBuy/devJava";
import CDev from "./pages/FrBuy/c++";
import Ios from "./pages/FrBuy/ios";
import Python from "./pages/FrBuy/python";
import BackSend from "./components/About-School/backend";
import UxUiSend from "./components/About-School/UxUisend";
import DevSend from "./components/About-School/devsend";
import AndroSend from "./components/About-School/androidsend";
import JavaSend from "./components/About-School/javasend/imdex";
import CSend from "./components/About-School/ All-Maps/c++send";
import IosSend from "./components/About-School/iossend";
import PythonSend from "./components/About-School/ All-Maps/pythonsend";
import Program from "./pages/program course/program";






function App() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scroll(0,0)
  },[pathname])
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/подпискаГод'} element={<God/>}/>
          <Route path={'/articles/details'} element={<Page/>}/>
          <Route path={'/подпискаМесяцPlus'} element={<Month/>}/>
          <Route path={'/подпискаГодPlus'} element={<GodPlus/>}/>
          <Route path={'/уведомление'} element={<Uvedomlenie/>}/>
          <Route path={'/подпискаМесяц'} element={<MonthPromotion/>}/>
          <Route path={'/подписаться'} element={<Podpisatsa/>}/>
          <Route path={'/войти'} element={<Voity/>}/>
          <Route path={'/профиль'} element={<Dashboard/>}/>
          <Route path={'/оШколе'} element={<OurSchool/>}/>
          <Route path={'/cards'} element={<Cards/>}/>
          <Route path={'/личныеДанные'} element={<Dashboard/>}/>
          <Route path={'/follows'} element={<Follows/>}/>

          <Route path={'/frCurse'} element={<FrBuy/>}/>
          <Route path={'/bkCurse'} element={<BackEnd/>}/>
          <Route path={'/uxuiCurse'} element={<UxUi/>}/>
          <Route path={'/devopsCurse'} element={<Devops/>}/>
          <Route path={'/androidCurse'} element={<Android/>}/>
          <Route path={'/javaCurse'} element={<DevJava/>}/>
          <Route path={'/c++Curse'} element={<CDev/>}/>
          <Route path={'/iosCurse'} element={<Ios/>}/>
          <Route path={'/pythonCurse'} element={<Python/>}/>



          <Route path={'/allCard'} element={<AllMaps/>}/>
          <Route path={'/register'} element={<RegisterCourse/>}/>
            <Route path={'/more'} element={<More/>}/>
            <Route path={'/reactiv'} element={<JavaRu/>}/>
            <Route path={'/reactiv/details'} element={<Reactivity/>}/>
            <Route path={'/master'} element={<Master2/>}/>


            <Route path={'/frRegistration'} element={<RegisterCourse/>}/>
          <Route path={'/bkRegistration'} element={<BackSend/>}/>
          <Route path={'/uxuiRegistration'} element={<UxUiSend/>}/>
          <Route path={'/devopsRegistration'} element={<DevSend/>}/>
          <Route path={'/androidRegistration'} element={<AndroSend/>}/>
          <Route path={'/javaRegistration'} element={<JavaSend/>}/>
          <Route path={'/c++Registration'} element={<CSend/>}/>
          <Route path={'/iosRegistration'} element={<IosSend/>}/>
          <Route path={'/pythonRegistration'} element={<PythonSend/>}/>


          <Route path={'/оНас'} element={<AboutUs/>}/>
            <Route path={'/нашиКурсы'} element={<AllMaps/>}/>
            <Route path={'/front'} element={<Front/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
