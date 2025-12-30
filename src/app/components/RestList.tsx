import Image from "next/image";
import axios from 'axios';
import RestCard from "./RestCard";
import { RestaurantDTO } from "../page";
type RestlistProps = {
    Restaurants: RestaurantDTO[]
}
export default function RestList(props: RestlistProps) {
    if (props.Restaurants.length === 0) {
        return (<></>)
    }
    return (
        <div className="flex flex-col bg-green-300 m-8 w-3/4 h-screen p-8">
            {props.Restaurants.map((Restaurant) => (
                <RestCard
                    key={Restaurant.id}
                    Restraunt={Restaurant}

                />

            ))}
        </div>
    );
}
