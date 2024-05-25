import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed h-screen w-screen z-[9999] bg-black text-white flex justify-center items-center">
      <Image src="/svg/barber-pole.svg" alt="Barber pole loading" width={30} height={120} className="animate-[spin_2s_ease-in-out_infinite]" />
    </div>
  );
}
