'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname} from 'next/navigation'
import { RestaurantDTO } from "@/app/page";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "react-bootstrap";
export default function Restaurantinfo() {
    const pathname = usePathname()
    const APIURL = "http://localhost:5227/"
    const [Restaurant, setRestaurant] = useState<RestaurantDTO>()
    const client = axios.create({
        baseURL: APIURL
    });
    useEffect(() => {
        console.log(pathname)
        client.get(`${pathname}`).then((response) => {
            setRestaurant(response.data);
        });
    }, []);
    console.log( pathname.split('/'))
    return (
        <div>
        <h1>{Restaurant?.name}</h1>
        <p>{Restaurant?.address}</p>
        <Button variant="primary">
                  <Link href={`/Restaurant/edit/${ pathname.split('/')[2]}`} className="text-black nav-link">EDIT</Link>
        </Button>
        </div>
    );
}

