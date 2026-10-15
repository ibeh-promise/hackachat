"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings, CircuitBoard, User, Database, Info } from "lucide-react"

export function SettingsModal() {

  const [selectedSettings, setSelectedSettings] = useState("")

  const General = () => {
    return (
      <div>
        general
      </div>
    )
  }
  const Model = () => {
    return (
      <div>
        Model
      </div>
    )
  }
  const Personal = () => {
    return (
      <div>
        Peronal
      </div>
    )
  }
  const Data = () => {
    return (
      <div>
        data
      </div>
    )
  }
  const About = () => {
    return (
      <div>
        about
      </div>
    )
  }


  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30">
      <Card>
        <div className="w-500px p-2 px-5">
          <p >Settings</p>
          <span className="text-zinc-500 text-[12px]">Customize Hackachat appearance, models, and personal instructions.</span>
              <div className="bg-muted/50">
              <div className=" flex ">
                <Button variant="ghost" className="" onClick={() => setSelectedSettings("general")}>
                  <Settings />
                  General
                  </Button>    
                <Button variant="ghost" className="text-zinc-400" onClick={() => setSelectedSettings("Model")}>
                  <CircuitBoard />
                  Model
                  </Button>
                <Button variant="ghost" className="text-zinc-400" onClick={() => setSelectedSettings("Personal")}>
                  <User />
                  Personal
                  </Button>
                <Button variant="ghost" className="text-zinc-400" onClick={() => setSelectedSettings("Data")}>
                  <Database />
                  Data
                  </Button>
                <Button variant="ghost" className="text-zinc-400" onClick={() => setSelectedSettings("About")}>
                  <Info />
                  About
                  </Button>
                  </div>
                  </div>
                  <div className="">
                    {selectedSettings == "general" ? 
                        <General /> : selectedSettings == "Model" ? 
                       <Model /> : selectedSettings == "Personal" ?
                       <Personal /> : selectedSettings == "data" ? 
                       <Data /> : <About />
                    }
                  </div>
              </div>
      </Card>
    </div>

  )
}
