import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Laptop, Smartphone, Tv, Watch, Headphones } from "lucide-react";
import { Link } from "react-router";

const productCategories = [
  { name: "Laptops & Computers", icon: Laptop },
  { name: "Smartphones & Tablets", icon: Smartphone },
  { name: "TVs & Home Entertainment", icon: Tv },
  { name: "Wearables", icon: Watch },
  { name: "Audio Equipment", icon: Headphones },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Computer-Villa
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, Computer-Villa has grown from a small local shop to
            a leading e-commerce platform for all types of electronics. Our
            passion for technology and commitment to customer satisfaction have
            been the driving forces behind our success.
          </p>
          <p className="text-gray-600 mb-4">
            We pride ourselves on offering a wide range of high-quality
            electronics, from cutting-edge computers to the latest smartphones
            and everything in between. Our team of experts is always on hand to
            provide advice and support, ensuring you find the perfect device for
            your needs.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <img
            src="/logo.png"
            alt="Computer-Villa Store"
            className="h-[200px] w-[200px] rounded-lg object-cover"
          />
        </div>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>Empowering lives through technology</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            At Computer-Villa, our mission is to make cutting-edge technology
            accessible to everyone. We believe that the right electronic devices
            can enhance productivity, creativity, and connectivity in people's
            lives. By offering a curated selection of high-quality products,
            expert advice, and exceptional customer service, we aim to be your
            trusted partner in navigating the ever-evolving world of technology.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-6">Our Product Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {productCategories.map((category, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <category.icon className="h-12 w-12 mx-auto text-blue-500" />
              <CardTitle className="text-sm mt-2">{category.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Why Choose Computer-Villa?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wide selection of the latest electronics</li>
            <li>Competitive prices and regular deals</li>
            <li>Expert advice and customer support</li>
            <li>Fast and reliable shipping</li>
            <li>Secure payment options</li>
            <li>Hassle-free returns and exchanges</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Explore?</h2>
        <p className="text-gray-600 mb-6">
          Discover our wide range of electronics and find the perfect device for
          you.
        </p>
        <Link to="/products" className="inline-block">
          <Button size="lg">Browse Our Products</Button>
        </Link>
      </div>
    </div>
  );
}
