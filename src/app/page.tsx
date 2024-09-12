import CategoryItem from "@/components/categoryItem";
import FoodItem from "@/components/foodItem";
import { categoryList } from "@/data/menuList";
import { menuList } from "@/data/menuList";

export default function Home() {
  return (
    <>
      <div className="container  flex justify-end overflow-hidden min-h-screen">
        <div className="w-[30%] pb-5 pt-3 absolute left-2 top-2">
          <div className="flex-col flex min-h-fit overflow-visible">
            {categoryList.map((item) => (
              <CategoryItem item={item} key={item._id} />
            ))}
          </div>
        </div>
        <div className="w-[65%] flex flex-col items-center ">
          <div className="h-12  w-[65%] flex items-center justify-center fixed bg-white z-50">
            <h1 className="text-3xl font-bold text-gray-800 ">Menu</h1>
          </div>
          <div className="mt-14">
            {menuList.map((item) => (
              <FoodItem item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
