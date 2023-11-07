import Image from "next/image";

const Arena = () => {
  return (
    <div className="bg-zinc-200/10 h-[90vh] fixed
      right-0 bottom-0 w-96 ml-96 flex flex-col items-center
    ">
      <h1>Arena</h1>

      <div>
        <Image src="/assets/versus.png" width={150} height={150 } alt="versus"></Image>
      </div>
    </div>
  );
};

export default Arena;
