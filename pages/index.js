import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>next/image</h1>
      <p>Image wrapper 400 x auto</p>
      <div className="image-wrapper">
        <Image
          src="https://images.unsplash.com/photo-1652303308996-0a0c780587f8"
          alt="What the F*?"
          width={400}
          height={600}
          layout="responsive"
          sizes={["400px"]}
        />
      </div>
    </Layout>
  );
}
