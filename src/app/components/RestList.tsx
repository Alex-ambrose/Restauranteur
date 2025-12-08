import Image from "next/image";
import axios from 'axios';
import RestCard from "./RestCard";
export default function RestList() {

    return (
        <div className="flex flex-col bg-green-300 m-8 w-3/4 h-screen p-8">
            <RestCard
                RestrauntName="hiro"
                Reviews="4 out of 5"
                Address="123 y st"
                TopReview="was good! mas bread"
            />
            <RestCard
                RestrauntName="asdf"
                Reviews="4 out of 5"
                Address="123 y st"
                TopReview="was good! mas bread"
            />
            <RestCard
                RestrauntName="canes"
                Reviews="4 out of 5"
                Address="123 y st"
                TopReview="asdfad"
            />
            <RestCard
                RestrauntName="MC"
                Reviews="4 out of 5"
                Address="12342314"
                TopReview="555555 bread"
            />
        </div>
    );
}
