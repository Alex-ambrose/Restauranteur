import Image from "next/image";

type RestCardProps = {
    RestrauntName : string
    Reviews : string
    Address : string
    TopReview : string
}
export default function RestCard(props:RestCardProps) {
    return (
        <div className="flex flex-row bg-red-600 p-8">
        <div className="bg-blue-600 w-1/2 h-24 m-4 flex">
          <Image
          src="/vercel.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          />
        </div>
        <div className="bg-purple-600 w-1/2 h-24 m-4">
          <p>{props.RestrauntName}</p>
          <p>{props.Reviews}</p>
          <p>{props.Address}</p>
          <p>{props.TopReview}</p>
        </div>


      </div>
    );
}
