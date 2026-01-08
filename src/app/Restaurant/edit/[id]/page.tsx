'use client';
import { RestaurantDTO } from "@/app/page";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Button, Form, FormControl, FormLabel, FormText } from "react-bootstrap";
type EditRestaurantDTO = {
    Id: number,
    Name: string,
    Description: string,
    Address: string,
    Cuisine: number,
    Hours: string
}

export default function EditRestaurant() {
    const APIURL = "http://localhost:5227/Restaurant/edit"
    const defaultRestaurant: RestaurantDTO ={
    id: 0,
    name: '',
    description: '',
    address: '',
    cuisine: 0,
    hours: ''
    }
    const router = useRouter()
    const pathname = usePathname()
    const RestaurantID = pathname.split('/')[3]
    const [Restaurant, setRestaurant] = useState<RestaurantDTO>(defaultRestaurant)
    const client = axios.create({
        baseURL: APIURL
    });
    useEffect(() => {
        console.log(pathname)
        axios.get(`http://localhost:5227/Restaurant/${pathname.split('/')[3]}`).then((response) => {
            setRestaurant(response.data);
        });
    }, []);


    function OnEditRestruant(e: FormEvent) {
        e.preventDefault()
        console.log(JSON.stringify(Restaurant))
        axios.post(APIURL, Restaurant)
            .then(function (response) {
                console.log(response);
                router.push(`/Restaurant/${RestaurantID}`)
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    return (
        <Form onSubmit={OnEditRestruant}>
            <div className="mb-3">
                <FormLabel>RestaurantName</FormLabel>
                <FormControl type="text" placeholder="Restaurant name" value={Restaurant?.name} onChange={e => setRestaurant({...Restaurant,name:e.target.value})} />
            </div>
            <div className="mb-3" >
                <FormLabel>Address</FormLabel>
                <FormControl type="text" placeholder="123 N st" value={Restaurant?.address} onChange={e => setRestaurant({...Restaurant,address:e.target.value})} />
            </div>
            <div className="mb-3" >
                <FormLabel>Discription</FormLabel>
                <FormControl type="text" placeholder="123 N st" value={Restaurant?.description} onChange={e => setRestaurant({...Restaurant,description:e.target.value})} />
            </div>

            <div className="mb-3" >
                <FormLabel>hours</FormLabel>
                <FormControl type="text" placeholder="8am-5pm" value={Restaurant?.hours} onChange={e => setRestaurant({...Restaurant,hours:e.target.value})} />
            </div>
            <Form.Select aria-label="Default select example" value={Restaurant?.cuisine} onChange={e => setRestaurant({...Restaurant,cuisine:parseInt(e.target.value)})}>
                <option>Open this select menu</option>
                <option value="1">american</option>
                <option value="2">mexican</option>
                <option value="3">italian</option>
                <option value="4">chinese</option>
            </Form.Select>
            <Button variant="primary" type="submit" >
                Submit
            </Button>

        </Form>

    );
}
