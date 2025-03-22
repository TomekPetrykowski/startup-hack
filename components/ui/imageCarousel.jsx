'use client'
import * as React from "react"
import  { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "./input"

import ImageUpload from "./imageSelector"
import { Image } from "lucide-react"
export function CarouselSize({images}) {

    const [items,setItems] = useState([...images])


  return (
    <>
    <ImageUpload setImage={setItems}></ImageUpload>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm justify-self-center mr-20 ml-20"
    >
      <CarouselContent>
        {(items.length==0)?<CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
              
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    
                   

                  <span className="text-3xl font-semibold"><Image></Image></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>:items.map((source, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
              
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img  className="w-100% h-100%" src={source}></img>
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
