import Image from "next/image";

interface CategoryItemProps {
  item: {
    _id: string;
    name: string;
    image?: string;
  };
}

export default function CategoryItem({ item }: CategoryItemProps) {
  return (
    <div className="mt-2 mb-2 border-solid border-yellow-950 border-[1px] rounded-xl overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        {item.image && (
          <Image src={item.image} alt={item.name} width={500} height={300} />
        )}
        <p>{item.name}</p>
      </div>
    </div>
  );
}
