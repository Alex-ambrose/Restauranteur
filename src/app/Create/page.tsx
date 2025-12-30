'use client';
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Button, Form, FormControl, FormLabel, FormText } from "react-bootstrap";
type CreateRestaurantDTO = {
    Name: string,
    Description: string,
    Address: string,
    Cuisine: number,
    Hours: string
}

export default function CreateRestaurant() {
    const APIURL = "http://localhost:7227/create"
    const [Name, setName] = useState<string>("")
    const [Description, setdescription] = useState<string>("")
    const [Address, setaddress] = useState<string>("")
    const [Hours, setHours] = useState<string>("")
    const [Cuisine, setcuisine] = useState<number>(0)
    function OnCreateRestruant() {
        var DTO: CreateRestaurantDTO = {
            Name: Name,
            Description: Description,
            Address: Address,
            Cuisine: Cuisine,
            Hours: Hours,
        }
        console.log(JSON.stringify(DTO))
        axios.post(APIURL, DTO)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Form onSubmit={OnCreateRestruant}>
            <div className="mb-3">
                <FormLabel>RestaurantName</FormLabel>
                <FormControl type="text" placeholder="Restaurant name" value={Name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3" >
                <FormLabel>Address</FormLabel>
                <FormControl type="text" placeholder="123 N st" value={Address} onChange={e => setaddress(e.target.value)} />
            </div>
            <div className="mb-3" >
                <FormLabel>Discription</FormLabel>
                <FormControl type="text" placeholder="123 N st" value={Description} onChange={e => setdescription(e.target.value)} />
            </div>

            <div className="mb-3" >
                <FormLabel>hours</FormLabel>
                <FormControl type="text" placeholder="8am-5pm" value={Hours} onChange={e => setHours(e.target.value)} />
            </div>
            <Form.Select aria-label="Default select example" value={Cuisine} onChange={e => setcuisine(parseInt(e.target.value))}>
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
