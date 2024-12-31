import axios from "axios"
import one from "./assets/images/weather image.gif"
import { useState } from "react"


function Weather() {


    const[city,setcity]= useState("")
    const[weather,setweather] =useState("")
    const[temp,settemp] =useState("")
    const[desc,setdesc] =useState("")

    function handlecity(event) 
    {
        setcity(event.target.value)
    }


    function getweather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75aa32cb6f41312acbc0b7c0b9b5ce3e`)
         weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
         })
    }



    return (

        <div className="bg-blue-950 p-16 m-10 rounded-md   md:flex  gap-32">

            <div className="p-16 flex flex-col gap-2">
                <div>
                    <h1 className="text-3xl text-green-500 font-bold ">Weather </h1><p className="text-3xl underline text-white"> app  ☾☼</p>
                </div>

                <img src={one} alt="img" className="w-80 h-44 my-8 rounded-[25px] hidden lg:block" />


            </div>

            <div className="l-screen bg-gradient-to-br from-blue-500 via-blue-600 to-pink-500  p-10 flex-grow border-y-white rounded-md my-20">
                <h1 className="text-center  font-bold md:flex text-2xl text-white">Weather Report</h1>
                <p className="text-center md:flex text-white">I can give you a weather report about your city!</p>

                <div className="flex flex-col">
                    <input  onChange={handlecity}  type="text" name="q" class="  border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 my-4  w-48 md:w-56" placeholder="search weather.....☾☼"></input>

                    <button  onClick={getweather}  className="text-left  bg-blue-950 text-white w-fit p-1 mx-2 rounded-md">Get 🌤 Report</button>
                </div>

                <div className="font-bold my-5">
                    <h1 className="text-white">Weather 🫧🌤️☁: {weather} </h1>
                    <h1 className="text-white">Temperature 🌡️ :{temp} </h1>
                    <h1 className="text-white">Description 📝 :{desc} </h1>

                </div>
            </div>
        </div>

    )
}

export default Weather