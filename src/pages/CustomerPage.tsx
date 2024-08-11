import { useParams } from "react-router-dom";
import { customers } from "../data/customer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "../types/image";

const CustomerPage = () => {
  const { customerId } = useParams();
  const customer = customers[Number(customerId)];
  const [photos, setPhotos] = useState<Image[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data } = await axios.get(
          `https://picsum.photos/v2/list?limit=9&page=${Math.floor(Math.random() * 100)}`,
        );
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, [customerId]);

  return (
    <div className="flex h-[calc(100svh-60px)] justify-center overflow-y-scroll p-8">
      <div className="flex flex-col gap-4">
        <p className="scroll-m-20 text-xl font-medium tracking-tight">
          <span>Name: </span>
          <span className="text-muted-foreground">{customer.name}</span>
        </p>
        <p className="scroll-m-20 text-xl font-medium tracking-tight">
          <span>Title: </span>
          <span className="text-muted-foreground">{customer.title}</span>
        </p>
        <p className="scroll-m-20 text-xl font-medium tracking-tight">
          <span>Address: </span>
          <span className="text-muted-foreground">{customer.address}</span>
        </p>
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-3 gap-10">
            {photos.map((image, index) => (
              <div key={index} className="h-40 w-40 rounded-lg">
                <img
                  src={image.download_url}
                  className="h-40 w-40 rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
