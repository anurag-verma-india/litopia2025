import Image from "next/image";
import img from "@/assets/logo.webp";

interface InfoSectionProps {
  id?: string;
}

export const InfoSection = ({ id }: InfoSectionProps) => {
  return (
    <section id={id} className="w-full py-16 bg-background my-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-theme-red">Heading</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              excepturi, nisi corrupti eum debitis magnam? Eos laudantium
              suscipit vero dolore illo repellat quas animi aspernatur atque
              nostrum, voluptate quod alias nihil ratione sit dolorum ea
              inventore expedita, consectetur nobis officia officiis obcaecati!
              Dicta aliquid maxime, recusandae magnam tempora dolores veritatis
              iusto, eaque nobis aut magni!
            </p>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden">
            <Image
              src={img}
              alt="Luxury Property"
              //   fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
