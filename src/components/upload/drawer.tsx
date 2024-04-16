import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "./input"
import { Roboto } from "next/font/google"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="py-5 border border-solid border-gray-900">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Upload Here</DrawerTitle>
            <DrawerDescription>Think * Write * Execute. </DrawerDescription>
          </DrawerHeader>
          
          <div className="">
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="email" style={{fontFamily:'Roboto,Sans-Serif'}} placeholder="Email"/>
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="text" placeholder="URL" />
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="text" placeholder="Actores"/>
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="text" placeholder="Director" />
      <Input className="mb-4 rounded-full bg-gray-200" type="file" placeholder="Archivo"/>
           </div>
          

          <DrawerFooter className="p-0 ">
            <Button className="w-full">Submit</Button>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}