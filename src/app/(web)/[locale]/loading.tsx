import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="h-screen w-screen relative z-[9999] bg-black text-white flex justify-center items-center">
      <CircularProgress color="default" size="lg" aria-label="Loading..." />
    </div>
  );
}
