const products = [
  // Vegetables
  {
    name: "Cabbage",
    description: "Fresh, nutrient-rich cabbages harvested daily.",
    price: "KSh 120 / bunch",
    image: "/products/vegetables/cabbages.png",
    category: "Vegetables",
  },
  {
    name: "Carrots",
    description: "Crunchy, sweet carrots grown organically.",
    price: "KSh 100 / kg",
    image: "/products/vegetables/carrots.png",
    category: "Vegetables",
  },

  // Fruits
  {
    name: "Bananas",
    description: "Naturally ripened sweet bananas.",
    price: "KSh 80 / dozen",
    image: "/products/fruits/bananas.jpeg",
    category: "Fruits",
  },
  {
    name: "Pineapple",
    description: "Naturally ripened sweet bananas.",
    price: "KSh 80 / dozen",
    image: "/products/fruits/pineapple.jpeg",
    category: "Fruits",
  },
  {
    name: "Beetroot",
    description: "Fresh and authentic beetroot sourced directly from the farm.",
    price: "KSh 50 each",
    image: "/products/fruits/beetroot.png",
    category: "Fruits",
  },

  // Butchery
  {
    name: "Organic Beef Steak",
    description: "Grass-fed beef cuts ideal for grilling or roasting.",
    price: "KSh 750 / kg",
    image: "/products/butchery/beef-steak.jpg",
    category: "Butchery",
  },
  {
    name: "Free-range Chicken",
    description: "Juicy and tender chicken from free-range farms.",
    price: "KSh 600 each",
    image: "/products/butchery/chicken.jpg",
    category: "Butchery",
  },

  // Pastries
  {
    name: "Banana Bread",
    description: "Moist banana bread with a hint of cinnamon.",
    price: "KSh 300 / loaf",
    image: "/products/pastries/banana-bread.jpg",
    category: "Pastries",
  },
  {
    name: "Wholemeal Muffins",
    description: "Healthy and filling muffins made with wholemeal flour.",
    price: "KSh 250 / 4 pcs",
    image: "/products/pastries/muffins.jpg",
    category: "Pastries",
  },

  // Pre-cooked foods
  {
    name: "Vegetable Stir-fry",
    description: "A ready-to-eat healthy mix of seasonal vegetables.",
    price: "KSh 350 / pack",
    image: "/products/pre-cooked/stir-fry.jpg",
    category: "Pre-cooked foods",
  },
  {
    name: "Brown Rice & Beans",
    description: "Protein-rich brown rice and organic beans combo.",
    price: "KSh 300 / pack",
    image: "/products/pre-cooked/rice-beans.jpg",
    category: "Pre-cooked foods",
  },

  // Spices and Herbs
  {
    name: "Dried Rosemary",
    description: "Aromatic rosemary perfect for seasoning meat and vegetables.",
    price: "KSh 150 / jar",
    image: "/products/spices/rosemary.jpg",
    category: "Spices and Herbs",
  },
  {
    name: "Ginger Powder",
    description: "Finely ground organic ginger with strong flavor.",
    price: "KSh 180 / jar",
    image: "/products/spices/ginger.jpg",
    category: "Spices and Herbs",
  },

  // Herbal Tea
  {
    name: "Lemongrass Tea",
    description: "Calming herbal tea made from fresh lemongrass.",
    price: "KSh 250 / pack",
    image: "/products/herbal-tea/lemongrass.jpg",
    category: "Herbal Tea",
  },
  {
    name: "Chamomile Tea",
    description: "Soothing chamomile flowers for relaxation.",
    price: "KSh 300 / pack",
    image: "/products/herbal-tea/chamomile.jpg",
    category: "Herbal Tea",
  },
  // Cellar
  {
    name: "Organic Spinach",
    description: "Fresh, nutrient-rich spinach harvested daily.",
    price: "KSh 120 / bunch",
    image: "/products/vegetables/spinach.jpg",
    category: "Cellar",
  },
  {
    name: "Carrots",
    description: "Crunchy, sweet carrots grown organically.",
    price: "KSh 100 / kg",
    image: "/products/vegetables/carrots.png",
    category: "Cellar",
  },
];


export const categories = [
  { name: "Cellar", image: "/categories/cellar.jpeg" },
  { name: "Vegetables", image: "/categories/vegetables.png" },
  { name: "Fruits", image: "/categories/fruits.png" },
  { name: "Butchery", image: "/categories/butchery.png" },
  { name: "Pastries", image: "/categories/pastries.jpeg" },
  { name: "Pure Fruit Juice", image: "/categories/fruit-juice.png" },
  { name: "Spices and Herbs", image: "/categories/spices.jpeg" },
  { name: "Herbal Tea", image: "/categories/herbal-tea.jpeg" },
];

export default products;
