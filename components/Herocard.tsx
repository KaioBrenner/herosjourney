import Image from "next/image";
import { useState } from "react";
import { PiSwordLight } from "react-icons/pi";

const Herocard = ({
  hero,
  cardColor,
  selectedHeroes,
  setSelectedHeroes,
}: {
  hero: any;
  cardColor: string;
  selectedHeroes: number;
  setSelectedHeroes: (selectedHeroes: any) => void;
}) => {
  const { powerstats } = hero;

  let totalPower = 0;

  for (const attribute in powerstats) {
    if (powerstats.hasOwnProperty(attribute)) {
      totalPower += powerstats[attribute];
    }
  }

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);

    if (isSelected) {
      setSelectedHeroes((prev: number) => prev - 1);
    } else {
      setSelectedHeroes((prev: number) => prev + 1);
    }
  };

  const cardClassName = `border-2 border-${cardColor}-500 w-56 h-72 flex flex-col gap-4 items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-${cardColor}-700 via-${cardColor}-600 to-${cardColor}-800 rounded-md cursor-pointer ${
    isSelected ? "scale-120 transition scale-110" : ""
  }`;

  // if (totalPower < 250) {
  return (
    <div className={cardClassName} onClick={handleClick}>
      <div>
        <Image
          src={hero?.images?.lg}
          width={150}
          height={250}
          alt={hero?.name}
          className={`rounded-lg rounded-t-none shadow-md shadow-${cardColor}-500/80`}
        ></Image>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-xl text-center">{hero?.name}</h1>
        <p className="flex justify-between items-center w-12 m-auto">
          <PiSwordLight size={20}></PiSwordLight>
          <span>{totalPower}</span>
        </p>
      </div>
    </div>
  );
  // } else if (totalPower < 400) {
  //   return (
  //     <div className="border-2 border-green-500 w-56 h-72 flex flex-col gap-4 items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-950 via-green-900 to-green-950 rounded-md cursor-pointer">
  //       <div>
  //         <Image
  //           src={hero?.images?.lg}
  //           width={150}
  //           height={250}
  //           alt={hero?.name}
  //           className="rounded-lg rounded-t-none shadow-md shadow-green-500/80"
  //         ></Image>
  //       </div>
  //       <div className="flex flex-col justify-center">
  //         <h1 className="text-xl text-center">{hero?.name}</h1>
  //         <p className="flex justify-between items-center w-12 m-auto">
  //           <PiSwordLight size={20}></PiSwordLight>
  //           <span>{totalPower}</span>
  //         </p>
  //       </div>
  //     </div>
  //   );
  // } else if (totalPower < 500) {
  //   return (
  //     <div className="border-2 border-purple-500 w-56 h-72 flex flex-col gap-4 items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950 via-purple-900 to-purple-950 rounded-md cursor-pointer">
  //       <div>
  //         <Image
  //           src={hero?.images?.lg}
  //           width={150}
  //           height={250}
  //           alt={hero?.name}
  //           className="rounded-lg rounded-t-none shadow-md shadow-purple-500/80"
  //         ></Image>
  //       </div>
  //       <div className="flex flex-col justify-center">
  //         <h1 className="text-xl text-center">{hero?.name}</h1>
  //         <p className="flex justify-between items-center w-12 m-auto">
  //           <PiSwordLight size={20}></PiSwordLight>
  //           <span>{totalPower}</span>
  //         </p>
  //       </div>
  //     </div>
  //   );
  // } else if (totalPower < 600) {
  //   return (
  //     <div className="border-2 border-yellow-500 w-56 h-72 flex flex-col gap-4 items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-950 via-yellow-900 to-yellow-950 rounded-md cursor-pointer">
  //       <div>
  //         <Image
  //           src={hero?.images?.lg}
  //           width={150}
  //           height={250}
  //           alt={hero?.name}
  //           className="rounded-lg rounded-t-none shadow-md shadow-yellow-500/80"
  //         ></Image>
  //       </div>
  //       <div className="flex flex-col justify-center">
  //         <h1 className="text-xl text-center">{hero?.name}</h1>
  //         <p className="flex justify-between items-center w-12 m-auto">
  //           <PiSwordLight size={20}></PiSwordLight>
  //           <span>{totalPower}</span>
  //         </p>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="border-2 border-red-500 w-56 h-72 flex flex-col gap-4 items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950 via-red-900 to-red-950 rounded-md cursor-pointer">
  //       <div>
  //         <Image
  //           src={hero?.images?.lg}
  //           width={150}
  //           height={250}
  //           alt={hero?.name}
  //           className="rounded-lg rounded-t-none shadow-md shadow-red-500/80"
  //         ></Image>
  //       </div>
  //       <div className="flex flex-col justify-center">
  //         <h1 className="text-xl text-center">{hero?.name}</h1>
  //         <p className="flex justify-between items-center w-12 m-auto">
  //           <PiSwordLight size={20}></PiSwordLight>
  //           <span>{totalPower}</span>
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
};

export default Herocard;
