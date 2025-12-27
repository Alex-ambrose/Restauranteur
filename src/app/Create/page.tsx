'use client';
import Image from "next/image";
import { useState } from "react";
import { Button, Form, FormControl, FormLabel, FormText } from "react-bootstrap";
type CreateResturantDTO = {
    Name : string,
    Loction: string,
    Hours: string,
    Type: number
}
export default function CreateResturant() {
    const [Name, setName] = useState<string>("")
    const [Location, setLocation] = useState<string>("")
    const [Hours, setHours] = useState<string>("")
    const [Type, setType] = useState<number>(0)
    function OnCreateRestruant()
    {
        var DTO: CreateResturantDTO = {
            Name : Name,
            Loction : Location,
            Hours : Hours,
            Type : Type
        }
        console.log(JSON.stringify(DTO))
    }
    return (
        <Form onSubmit={OnCreateRestruant}>
            <div className="mb-3">
                <FormLabel>ResturantName</FormLabel>
                <FormControl type="text" placeholder="Resturant name" value ={Name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="mb-3" >
                <FormLabel>Location</FormLabel>
                <FormControl type="text" placeholder="123 N st" value ={Location} onChange={e => setLocation(e.target.value)}/>
            </div>

            <div className="mb-3" >
                <FormLabel>hours</FormLabel>
                <FormControl type="text" placeholder="8am-5pm" value ={Hours} onChange={e => setHours(e.target.value)}/>
            </div>
            <Form.Select aria-label="Default select example"value ={Type} onChange={e => setType(parseInt(e.target.value))}>
                <option>Open this select menu</option>
                <option value="1">american</option>
                <option value="2">mexican</option>
                <option value="3">italian</option>
                <option value="4">chinese</option>
            </Form.Select>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>

    );
}
