"use client"; // this is a client component
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>([]);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.44&lon=-79.99&appid=${process.env.openWeather}`)
      .then(response => { 
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(weatherData)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>
      <div>
        <h1>{weatherData.name}</h1>
        <h1>{weatherData.main.temp}</h1>
        <h1>{weatherData.weather[0].description}</h1>
      </div>
    </main>
  )
}
