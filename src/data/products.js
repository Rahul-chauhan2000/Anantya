import Product1 from '../assets/Product 1.png';
import Product2 from '../assets/Product 2.png';
import Product3 from '../assets/Product 3.png';
import Product4 from '../assets/Product 4.png';
import Product5 from '../assets/Product 5.png';
import Product6 from '../assets/Product 6.png';
import Product7 from '../assets/Product 7.png';
import Product8 from '../assets/Product 8.png';
import Product9 from '../assets/Product 9.png';
import Product10 from '../assets/Product 10.png';
import Product11 from '../assets/Product 11.png';
import Product12 from '../assets/Product12.png';

const productsData = [
  {
    "id": 1,
    "name": "Aloe Vera & Hibiscus Shampool",
    "price": 895,
    "category": "Hair Care",
    "image": Product1,
    "description": "A traditional Ayurvedic recipe to nourish the scalp and promote healthy hair growth. Enriched with Brahmi and Amla, this oil strengthens roots and prevents hair fall.",
    "ingredients": ["Brahmi", "Amla", "Coconut Oil", "Sesame Oil"],
    "benefits": ["Controls hair fall", "Promotes growth", "Prevents premature graying"],
    "rating": 4.8,
    "reviews": 124,
    "featured": true
  },
  {
    "id": 2,
    "name": "Ayurvedic Hair Serum",
    "price": 450,
    "category": "Hair Care",
    "image": Product2,
    "description": "A gentle yet effective cleanser that removes impurities and excess oil without stripping the skin of its natural moisture. Neem and Tulsi provide antibacterial protection.",
    "ingredients": ["Neem", "Tulsi", "Aloe Vera", "Honey"],
    "benefits": ["Reduces acne", "Deep cleanses", "Soothes skin"],
    "rating": 4.5,
    "reviews": 89,
    "featured": true
  },
  {
    "id": 3,
    "name": "Neem & Tulsi Face Wash",
    "price": 325,
    "category": "Skin Care",
    "image": Product3,
    "description": "Handcrafted with pure sandalwood oil and turmeric, this soap brightens the complexion and provides a cooling effect on the skin.",
    "ingredients": ["Sandalwood Oil", "Turmeric", "Glycerin", "Olive Oil"],
    "benefits": ["Brightens skin", "Cooling effect", "Exfoliates gently"],
    "rating": 4.9,
    "reviews": 210,
    "featured": true
  },
  {
    "id": 4,
    "name": "Sandalwood & Turmeric Soap",
    "price": 675,
    "category": "Bath & Body Care",
    "image": Product4,
    "description": "A sulfate-free shampoo that gently cleanses hair while providing deep hydration. Aloe Vera soothes the scalp and Hibiscus adds shine.",
    "ingredients": ["Aloe Vera", "Hibiscus", "Reetha", "Shikakai"],
    "benefits": ["Hydrates hair", "Soothes scalp", "Adds natural shine"],
    "rating": 4.7,
    "reviews": 156,
    "featured": true
  },
  {
    "id": 5,
    "name": "Rose Sandal Natural Perfume",
    "price": 1250,
    "category": "Fragrance / Perfume",
    "image": Product5,
    "description": "A luxurious face cream that deeply moisturizes and improves skin texture. Infused with pure Kashmiri Saffron and Rose extracts for a natural glow.",
    "ingredients": ["Kashmiri Saffron", "Rose Extract", "Shea Butter", "Vitamin E"],
    "benefits": ["Improves texture", "Deeply moisturizing", "Gives glowing skin"],
    "rating": 4.6,
    "reviews": 75,
    "featured": true
  },
  {
    "id": 6,
    "name": "Jasmine Bliss Natural Perfume",
    "price": 950,
    "category": "Fragrance / Perfume",
    "image": Product6,
    "description": "An intensive treatment for dry and damaged hair. This mask provides deep conditioning and restores hair vitality with Bhringraj and Jatamansi.",
    "ingredients": ["Bhringraj", "Jatamansi", "Fenugreek", "Coconut Milk"],
    "benefits": ["Restores vitality", "Deep conditioning", "Reduces split ends"],
    "rating": 4.8,
    "reviews": 92,
    "featured": true
  },
  {
    "id": 7,
    "name": "Revitalizing Face Cream",
    "price": 1850,
    "category": "Skin Care",
    "image": Product7,
    "description": "A legendary Ayurvedic formulation for bright and youthful skin. This serum is enriched with 26 precious herbs to reduce dark spots and fine lines.",
    "ingredients": ["Saffron", "Sandalwood", "Manjistha", "Licorice"],
    "benefits": ["Reduces dark spots", "Anti-aging", "Brightens complexion"],
    "rating": 4.9,
    "reviews": 145,
    "featured": true
  },
  {
    "id": 8,
    "name": "Neem Powder",
    "price": 550,
    "category": "Powder / Raw Herbal Products",
    "image": Product8,
    "description": "A traditional blend of herbs and grains to gently exfoliate and brighten the skin. This ubtan leaves your skin feeling soft, smooth, and radiant.",
    "ingredients": ["Chickpea Flour", "Turmeric", "Sandalwood", "Rose Water"],
    "benefits": ["Natural exfoliation", "Removes tan", "Deeply cleanses"],
    "rating": 4.7,
    "reviews": 112,
    "featured": true
  },
  {
    "id": 9,
    "name": "Skin Care & Oil Combo",
    "price": 2450,
    "category": "Combo / Gift Packs",
    "image": Product9,
    "description": "A complete skincare set featuring our best-selling Kumkumadi Tailam, Face Wash, and Revitalizing Cream. Perfect for a natural, healthy glow.",
    "ingredients": ["Saffron", "Neem", "Sandalwood", "Rose"],
    "benefits": ["Complete skincare routine", "Deep hydration", "Radiant complexion"],
    "rating": 5.0,
    "reviews": 45,
    "featured": true
  },
  {
    "id": 10,
    "name": "Hair & Skin Care Combo",
    "price": 1850,
    "category": "Combo / Gift Packs",
    "image": Product10,
    "description": "Everything your hair needs in one pack. Includes Shampoo, Ayurvedic Oil, and Serum to combat hair fall and promote growth.",
    "ingredients": ["Brahmi", "Amla", "Hibiscus", "Coconut Oil"],
    "benefits": ["Strengthens hair roots", "Prevents hair fall", "Adds shine"],
    "rating": 4.9,
    "reviews": 32,
    "featured": true
  },
  {
    "id": 11,
    "name": "Bath & Herbal Care Combo",
    "price": 2100,
    "category": "Combo / Gift Packs",
    "image": Product11,
    "description": "Experience our range of natural fragrances. Includes Rose Sandal and Jasmine Bliss along with a limited edition mystery scent.",
    "ingredients": ["Rose Oil", "Sandalwood Oil", "Jasmine Extracts"],
    "benefits": ["Long-lasting fragrance", "100% Natural", "Perfect for gifting"],
    "rating": 4.8,
    "reviews": 28,
    "featured": true
  },
  {
    "id": 12,
    "name": "Psoriasis Ayurvedic Oil & Powder",
    "price": 1450,
    "category": "Skin Care",
    "image": Product12,
    "description": "A specialized Ayurvedic formulation for managing psoriasis and dry skin conditions. Deeply hydrates and reduces inflammation naturally.",
    "ingredients": ["Wrightia Tinctoria", "Coconut Oil", "Neem", "Turmeric"],
    "benefits": ["Reduces scaling and itching", "Deeply moisturizes", "Soothing effect"],
    "rating": 4.9,
    "reviews": 64,
    "featured": true
  }
];

export default productsData;
