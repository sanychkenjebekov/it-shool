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
          <Route path={'/allCard'} element={<AllMaps/>}/>
          <Route path={'/register'} element={<RegisterCourse/>}/>
            <Route path={'/more'} element={<More/>}/>
            <Route path={'/reactiv'} element={<JavaRu/>}/>
            <Route path={'/reactiv/details'} element={<Reactivity/>}/>
            <Route path={'/master'} element={<Master2/>}/>
            <Route path={'/frRegistration'} element={<RegisterCourse/>}/>
            <Route path={'/оНас'} element={<AboutUs/>}/>
            <Route path={'/нашиКурсы'} element={<AllMaps/>}/>
            <Route path={'/front'} element={<Front/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
