import React from "react";
import { Input } from "@/components/ui/input"
// import { Textarea } from "../ui/textarea";
// import ImageCarousel from "../ui/imageCarousel";
import { Textarea } from "../textarea";
import { CarouselSize } from "../imageCarousel";
import { Button } from "../button";

export default function AddDatabaseForm(){
    return (
    <>
    <Input placeholder="nazwa"/>
    <Input placeholder="cena" type="number"/>
    <Textarea placeholder="opis"/>
    <div className="juatify-center">
    <CarouselSize images={["template.png"]}></CarouselSize>
    </div>
    <Button className="background-color: var(--color-red-300);">Dodaj</Button>

    </>)
}