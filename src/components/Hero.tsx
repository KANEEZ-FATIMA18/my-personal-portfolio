import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#73c8a9] to-[#373b44] h-[931.450px] lg:h-full w-[100%] flex md:flex-row md:justify-between flex-col justify-center  py-10 lg:py-48  gap-x-auto">
      {/* text  */}
      <div className="w-auto md:w-[500px] lg:w-[850px] h-auto md:h-[356px] lg:h-[260px] text-center md:text-left mx-auto">
        

        <h1 className="sm:text-2xl md:text-5xl lg:text-7xl font-bold text-white tracking-in-expand ">
          Hi, I'm Kaneez Fatima
        </h1>
        <h2 className="text-[#915eff] text-xl md:text-3xl lg:text-5xl font-extrabold pt-8 tracking-in-expand">
          FullStack Web Developer
        </h2>

        <p className="font-medium text-lg lg:text-2xl text-[#aebbc7] text-center md:text-left pt-8 tracking-in-expand overflow-ellipsis ">
          "HTML, CSS, Tailwind CSS, Next.js & TypeScript expert, crafting
          modern, scalable, and secure web applications."
        </p>
        <Link href={'/Contact'}><button className="bounce-top text-[#378dc0] sm:text-xl lg:text-3xl font-semibold border-[5px] border-[#0e6399] px-7 py-3 rounded-lg mt-7 hover:border-white hover:text-[#37739a] hover:duration-1000">
          Let's Talk
        </button></Link>
      </div>
      {/* image  */}
      <div className="mx-auto pt-6 md:pt-0">
        <Image
          src={"/profile.jpg"}
          alt="profil image"
          width={500}
          height={100}
          className="flip-in-hor-bottom  rounded-full border-[15px] border-[#39A7CE] object-cover"
        />
      </div>
    </div>
  );
}
