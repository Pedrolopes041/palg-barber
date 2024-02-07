"use client";

import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BarbershopProps {
  barbershop: Barbershop;
}

const Barbershopinfo = ({ barbershop }: BarbershopProps) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <div>
      <div className="h-[250px] relative">
        <Button
          size="icon"
          variant="outline"
          className="z-50 top-4 left-4 absolute"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="z-50 top-4 right-4 absolute"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop?.imageUrl}
          fill
          alt="image_barber"
          style={{
            objectFit: "cover",
          }}
          className="opacity-85"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1>{barbershop?.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default Barbershopinfo;