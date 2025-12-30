'use client';
import Image from "next/image";
import RestList from "./components/RestList";
import { useEffect, useState } from "react";
import axios from "axios";
export type RestaurantDTO = {
  id: number,
  name: string,
  description: string,
  address: string,
  cuisine: number,
  hours: string
}
export default function Home() {
  const APIURL = "http://localhost:5227/getall"
  const [Restaurants, setRestaurants] = useState<RestaurantDTO[]>([])
  const client = axios.create({
    baseURL: APIURL
  });
  useEffect(() => {
    client.get('').then((response) => {
      setRestaurants(response.data);
    });
  }, []);
  return (
    <RestList Restaurants = {Restaurants} />
  );
}

