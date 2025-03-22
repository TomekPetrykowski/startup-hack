import React from "react";
import { Input } from "@/components/ui/input"
// import { Textarea } from "../ui/textarea";
// import ImageCarousel from "../ui/imageCarousel";
import { Textarea } from "@/components/ui/textarea";
import { CarouselSize } from "@/components/ui/imageCarousel";
import { Button } from "@/components/ui/button";

export default function AddDatabaseForm(){
    return (
    <>
    <div className="w-300 p-10">
    <div className="flex place-content-between">
        <Input placeholder="nazwa" className="w-200 m-5"/>
        <Input placeholder="cena" type="number" className="w-50 m-5"/>
    </div>
    <Textarea placeholder="opis"/>
    <div className="flex place-content-evenly m-5">
    <CarouselSize images={[]}></CarouselSize>
    </div>
    </div>
    <Button className="background-color: var(--color-red-300); w-50">Dodaj</Button>

    </>)
}