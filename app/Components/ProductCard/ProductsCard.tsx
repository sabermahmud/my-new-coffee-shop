import { DataTypes } from "@/app/types/dataTypes";

export interface ProductsCardProps {
  product: DataTypes;
}

export default function ProductsCard({ product }: ProductsCardProps) {
  console.log(product);
  const { name, category, description, image, price, rating, size } = product;

  return (
    <>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
  {/* Image */}
  <figure className="h-52 overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </figure>

  <div className="card-body">
    {/* Category + Rating */}
    <div className="flex items-center justify-between">
      <span className="badge badge-primary badge-outline">
        {category}
      </span>

      <div className="flex items-center gap-1">
        <span className="text-warning">★</span>
        <span className="font-medium">{rating}</span>
      </div>
    </div>

    {/* Name */}
    <h2 className="card-title text-xl">
      {name}
    </h2>

    {/* Description */}
    <p className="text-sm text-base-content/70 line-clamp-2">
      {description}
    </p>

    {/* Price */}
    <div className="text-2xl font-bold text-primary mt-2">
      ${price}
    </div>

    {/* Size */}
    <div className="mt-2">
      <p className="text-sm font-semibold mb-2">Size</p>

      <div className="flex gap-2">
        {size.map((item) => (
          <button
            key={item}
            className="btn btn-sm btn-outline"
          >
            {item}
          </button>
        ))}
      </div>
    </div>

    {/* Buy Button */}
    <div className="card-actions mt-4">
      <button className="btn btn-primary w-full">
        Buy Now
      </button>
    </div>
  </div>
</div>
    </>
  );
}
