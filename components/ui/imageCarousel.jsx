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
export function CarouselSize({images}) {

    const [items,setItems] = useState([...images])


  return (
    <>
    <ImageUpload setImage={setItems}></ImageUpload>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm justify-self-center"
    >
      <CarouselContent>
        {items.map((source, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
              
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    {(source)?<img src={source}></img>:<ImageUpload setImage={setItems}></ImageUpload>}

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
