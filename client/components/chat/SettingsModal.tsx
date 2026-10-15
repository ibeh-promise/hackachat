"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings, CircuitBoard, User, Database, Info } from "lucide-react"

export function SettingsModal() {

  const [selectedSettings, setSelectedSettings] = useState("General")

  const General = () => {
    return (
      <div>
        <div className="my-3">
          <p className="text-[10px] font-normal text-zinc-500">INTERFACE THEME</p>
          <div className="flex justify-center items-center gap-3 my-2">
            <Button variant="ghost" className="py-10 rounded-md border-border w-[200px]">light</Button>
            <Button className="bg-black py-10 text-white rounded-md w-[200px]">Dark</Button>
            <Button variant="ghost" className="py-10 rounded-md border-border w-[200px]">System</Button>
          </div>
        </div> 
        <div className="my-3">
          <p className="text-[10px] font-normal text-zinc-500">TEXT SIZE</p>
          <div className="flex justify-center items-center gap-3 my-2">
            <Button variant="ghost" className="p-3 px-5 rounded-md border-border w-[200px]">Small</Button>
            <Button className="bg-black p-3 px-5 text-white rounded-md w-[200px]">Medium</Button>
            <Button variant="ghost" className="p-3 px-5 rounded-md border-border w-[200px]">Large</Button>
          </div>
        </div>
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
              <div className="bg-muted/50 p-1">
              <div className=" flex ">
                <Button variant="ghost" className={selectedSettings === "General" ? "text-black bg-white border-border" : "text-zinc-400"} onClick={() => setSelectedSettings("General")}>
                  <Settings />
                  General
                  </Button>    
                <Button variant="ghost" className={selectedSettings === "Model" ? "text-black bg-white border-border" : "text-zinc-400"} onClick={() => setSelectedSettings("Model")}>
                  <CircuitBoard />
                  Model
                  </Button>
                <Button variant="ghost" className={selectedSettings === "Personal" ? "text-black bg-white border-border" : "text-zinc-400"} onClick={() => setSelectedSettings("Personal")}>
                  <User />
                  Personal
                  </Button>
                <Button variant="ghost" className={selectedSettings === "Data" ? "text-black bg-white border-border" : "text-zinc-400"} onClick={() => setSelectedSettings("Data")}>
                  <Database />
                  Data
                  </Button>
                <Button variant="ghost" className={selectedSettings === "About" ? "text-black bg-white border-border" : "text-zinc-400"} onClick={() => setSelectedSettings("About")}>
                  <Info />
                  About
                  </Button>
                  </div>
                  </div>
                  <div className="">
                    {selectedSettings == "General" ? 
                        <General /> : selectedSettings == "Model" ? 
                       <Model /> : selectedSettings == "Personal" ?
                       <Personal /> : selectedSettings == "Aata" ? 
                       <Data /> : selectedSettings == "About" ? <About /> : <General />
                    }
                  </div>
              </div>
      </Card>
    </div>

  )
}
