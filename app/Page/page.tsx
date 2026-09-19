import { Suspense } from "react";
import ProductsPage from "../Products/page";
import { DataTypes } from "../types/dataTypes";
import ProductsCard from "../Components/ProductCard/ProductsCard";

export interface PageProps {
  prop: string;
}

const getCoffees = async (): Promise<DataTypes[]> => {
  const res = await fetch("http://localhost:5000/coffees");

  return res.json();
};

const Page = async () => {
  const coffeeData: DataTypes[] = await getCoffees();
  console.log(coffeeData);

  return (
    <>
      <h1 className="text-6xl">Coffee Products Amount : {coffeeData.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeData.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Page;
