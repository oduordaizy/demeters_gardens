// app/categories/[category]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/app/data/products";
import Navbar from "@/app/components/Navbar";


interface PageProps {
  params: {
    category: string;
  };
}

const categoryDetails: Record<string, { image: string; description: string }> = {
  vegetables: {
    image: "/categories/vegetables.png",
    description:
      "Fresh organic vegetables straight from our farm to your table. Packed with nutrients and flavor for a healthy lifestyle.",
  },
  fruits: {
    image: "/categories/fruits.jpeg",
    description:
      "Juicy, sweet, and naturally grown fruits that are perfect for snacks, smoothies, or healthy desserts.",
  },
  butchery: {
    image: "/categories/butchery.png",
    description:
      "High-quality, ethically-sourced meats for your wholesome meals. Taste the freshness in every bite.",
  },
  pastries: {
    image: "/categories/pastries.jpeg",
    description:
      "Delicious baked pastries crafted with organic ingredients – perfect for breakfast or a sweet treat.",
  },
  "pre-cooked-foods": {
    image: "/categories/pre-cooked.jpeg",
    description:
      "Convenient and healthy ready-to-eat meals made with fresh organic ingredients.",
  },
  "spices-and-herbs": {
    image: "/categories/spices.jpeg",
    description:
      "Natural herbs and spices to enhance the taste and health benefits of your meals.",
  },
  "herbal-tea": {
    image: "/categories/herbal-tea.jpeg",
    description:
      "Soothing herbal teas blended to refresh, relax, and rejuvenate your body and mind.",
  },
};

export default async function CategoryPage({ params }: PageProps) {
  const category = params.category.toLowerCase();
  const details = categoryDetails[category];

  if (!details) return notFound();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-10 ">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left: Category Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={details.image}
              alt={category}
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
  
          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            {/* Heading + Description */}
            <div className="text-center lg:text-left mb-10">
              <h1 className="text-5xl font-extrabold text-[#1d4d4f] capitalize tracking-wide">
                {category.replace(/-/g, " ")}
              </h1>
              <p className="text-[#1d4d4f] mt-4 text-lg max-w-xl">
                {details.description}
              </p>
            </div>
  
            {/* Product Grid */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {filteredProducts.map((product, index) => (
                <div
                  key={`${product.name}-${index}`}
                  className="bg-white/70 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4 transition hover:scale-[1.02] duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="rounded-xl mb-3 w-full h-40 object-cover"
                  />
                  <h2 className="text-xl font-semibold text-[#1d4d4f]">
                    {product.name}
                  </h2>
                  <p className="text-[#1d4d4f] mt-2 text-sm">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
