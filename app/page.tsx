import { Navbar } from "@/components/home/navbar";
import { PromoBanner } from "@/components/home/promo-banner";
import { ProductListing } from "@/components/home/product-listing";
import { Footer } from "@/components/home/footer";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <PromoBanner />
      <ProductListing />
      <Testimonials />
      <Footer />
    </div>
  );
}
