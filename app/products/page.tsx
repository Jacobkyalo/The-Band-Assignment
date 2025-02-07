import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { ProductListing } from "@/components/home/product-listing";

export default function Products() {
  return (
    <div className="container">
      <Navbar />
      <ProductListing />
      <Footer />
    </div>
  );
}
