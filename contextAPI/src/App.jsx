import { useEffect, useState } from 'react'
import Card from './components/Card'; // Adjust the path if necessary

import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/Themebtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const DarkMode= ()=>{
    setThemeMode("dark")
  }
  const LightMode= ()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    let ModeChanger = document.querySelector("html").classList
    ModeChanger.remove("light", "dark")
    ModeChanger.add(themeMode)
  },[themeMode])

  return (
   
            <ThemeProvider value={{DarkMode, LightMode, themeMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
