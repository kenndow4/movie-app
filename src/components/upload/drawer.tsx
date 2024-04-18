"use client"

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
import { upload } from "@/app/api/upload"
import { Upload } from "../../../types/upload"
import { useState } from "react"
import { PulseLoader } from "react-spinners"

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
  const [goal, setGoal] =useState(350);
  const [title, setTitle] = useState<string>("ss");
  const [description, setDescription] =useState<string>("ddd");
  const [link, setLink] = useState<string>("sadsad.gf");
  const [poster, setPoster] = useState<string>("fgf.jpg");
  const [year, setYear] =useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  

  const handleUpload = async() => {
    setLoading(true);
    setError("");

    const upl:Upload= await upload({title:title, description:description, link:link, year:year,poster:poster});
  };

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Upload</Button>
      </DrawerTrigger>
      <DrawerContent className="py-5 border border-solid border-gray-900">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Upload Here</DrawerTitle>
            <DrawerDescription>Think * Write * Execute. </DrawerDescription>
          </DrawerHeader>
          
          <div className="">
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="email" style={{fontFamily:'Roboto,Sans-Serif'}} value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}  />
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="text" placeholder="Link" value={link} onChange={(e)=>setLink(e.target.value)} />
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="number" placeholder="Year" value={year} onChange={(e)=>setYear(Number(e.target.value))}  />
      <Input className="mb-4 bg-[#000] border-solid border-gray-500" type="text" placeholder="Year" value={poster} onChange={(e)=>setPoster(e.target.value)}  />
      <Input className="mb-4 rounded-full bg-gray-200" type="file" placeholder="Archivo"/>
           </div>
          

          <DrawerFooter className="p-0 ">
            <Button className="w-full bg-[#5218fa]" onClick={handleUpload} > {loading ?
                <PulseLoader color='#fff' size={7}/>
                :
                "Submit"

              }</Button>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}