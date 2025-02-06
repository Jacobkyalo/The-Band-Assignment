import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h1 className="font-bold text-3xl mb-4">TheBandShop</h1>
          <p>
            We are dedicated to providing high-quality products and exceptional
            customer service. Our mission is to make online shopping easy,
            enjoyable, and reliable for all our customers.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              info@thebandshop.com
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +254712345678
            </li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <div className="flex flex-col space-y-4">
            <Link href="/products" className="hover:text-primary/80">
              Products
            </Link>
            <Link href="#" className="hover:text-primary/80">
              About Us
            </Link>
            <Link href="#" className="hover:text-primary/80">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary/80">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary/80">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary/80">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-muted-foreground text-center">
        &copy; {new Date().getFullYear()} TheBandShop. All rights reserved.
      </div>
    </footer>
  );
};
