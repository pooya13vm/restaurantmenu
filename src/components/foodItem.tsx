import Image from "next/image";

interface ItemProps {
  item: {
    _id: string;
    name: string;
    category: string;
    price: string;
    detail: string;
    image?: string;
  };
}

export default function FoodItem({ item }: ItemProps) {
  return (
    <div className="mb-4 mr-2 -z-10 items-center flex flex-col">
      <div className="relative">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={300}
            className="rounded-bl-full z-0"
          />
        )}
        <p className="-mt-8 ml-4 text-green-900">₺{item.price}</p>
      </div>
      <h2 className="mt-2 font-bold">{item.name}</h2>
      <p className="text-gray-800 mb-8">{item.detail}</p>
    </div>
  );
}
