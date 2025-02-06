import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { ProductListing } from "@/components/home/product-listing";

export default function Products() {
  return (
    <>
      <Navbar />
      <ProductListing />
      <Footer />
    </>
  );
}
