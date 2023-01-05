// import React, { Component } from "react";
import Slider from "react-slick"; 
import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'





export default function HeroSection() {

  const [user, setUser]= useState({number:"",});
  const [isPhoneExist, setIsPhoneExist]= useState(false);
  const [isEmptyNumber, setIsEmptyNumber]= useState(false);
  const [successFullySignUp, setSuccessFullySignUp]= useState(false);
  const handleChange=(e)=>{
   
 

      setUser({...user, number: e.target.value});
      console.log(user)
 
    

  
    }

    const handleClick=()=>{
      if(user.number==="")
    {
      // notify("Numara boş geçilemez");
      // console.log(notify)
      // return;
      // alert("Numara boş geçilemez.")
      setIsEmptyNumber(true)
      setTimeout(() => {
        setIsEmptyNumber(false)
      }, 3000);
      
      
    }
    else if(user.number==="5462577674")
    {
      // alert("Kayıtlı numara.")
      setIsPhoneExist(true)
      setTimeout(() => {
        setIsPhoneExist(false)
      }, 3000);
    }
    else{
      // alert("Kayıt başarılı")
      setSuccessFullySignUp(true)
      setTimeout(() => {
        setSuccessFullySignUp(false)
      }, 3000);
    }
    
  }

  // const notify = () => {
  //   toast.error()
  // }


  


  const [selected, setSelected] = useState('TR');
  const phones = {
  US: '+1',
  DE: '+50',
  TR: '+90',
  IT: '+7',
  INDIA: '+15'


  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3500,
    cssEase:"Linear"

  };
  return (
    <div className="relative  h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-trasnparent before:absolute before:inset-o before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          
          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="getir" ></img>
        </div>
        <div>

          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="getir"></img>
        </div>
      </Slider>
      <div className="container max-w-full rounded-lg flex justify-between items-center absolute top-0 ml-2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="getir"/>
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde kapınızda 
          </h3>
        </div>
        <div className="w-[400px] rounded-3xl bg-gray-50 p-4">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya Kayıt Ol</h4>
          <div className="grid gap-y-3">
            <div style={{display: isPhoneExist ? 'block' : 'none'}} className="loginError">
              <p> Kayıtlı Telefon Numarası</p>
            </div>
            <div style={{display: isEmptyNumber ? 'block' : 'none'}} className="emptyNumber">
              <p>
                Telefon Numarası Boş Geçilemez
              </p>
            </div>
            <div style={{display: successFullySignUp ? 'block' : 'none'}} className="successFullySignUp">
              <p>
                Kayıt Başarılı
              </p>
            </div>

          <div className="flex h-12 gap-x-2">
            <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={phones}
            placeholder="Select Language"
            onSelect={code => setSelected(code)}
            selected={selected}
            className="flag-select flex " 
                        
            />
         <label className="flex-1 relative group-[]: block cursor-pointer">

          <input value={user.number} onChange={handleChange} required className="h-12 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:hover:border-primary-brand-color outline-none peer text-sm pt-2"/>
          <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-700 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs ">Telefon Numarası</span>

         </label>
          </div>
          <button onClick={handleClick}   className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
           Telefon Numarası İle Devam Et


          </button>
          
        </div>
          </div>
      </div>
    </div>
  );
}

