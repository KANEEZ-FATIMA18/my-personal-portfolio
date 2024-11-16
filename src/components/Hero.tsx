import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#112d43] h-[931.450px] lg:h-full w-[100%] flex md:flex-row md:justify-between flex-col justify-center  py-10 lg:py-48  gap-x-auto">
      {/* text  */}
      <div className="w-auto md:w-[500px] lg:w-[850px] h-auto md:h-[356px] lg:h-[260px] text-center md:text-left  mx-auto">
        

        <h1 className="text-4xl md:text-5xl  xl:text-7xl font-[poppins] font-bold text-white">
          <span className="flex flex-col  mb-[25px] text-blue-400 ">Hey,</span> I&apos;m Kaneez Fatima
        </h1>
        <h2 className="text-[#03AAe4] font-[poppins] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold pt-8 tracking-in-expand">
          FullStack Web Developer
        </h2>

        <p className="px-[40px] sm:px-0  font-[poppins] text-lg lg:text-2xl text-[#aebbc7] text-center md:text-left pt-8  overflow-ellipsis ">
          &quot;HTML, CSS, Tailwind CSS, Next.js & TypeScript expert, crafting
          modern, scalable, and secure web applications.&quot;
        </p>
        <Link href={'/Contact'}><button className=" font-[poppins] text-[#378dc0] sm:text-lg lg:text-2xl xl:text-3xl font-semibold border-[5px] border-[#0e6399] px-7 py-3 rounded-lg mt-7 hover:border-white hover:text-[#37739a] hover:duration-1000">
          Let&apos;s Talk
        </button></Link>
      </div>
      {/* image  */}
      <div className="w-[300px] sm:w-[500px]   mx-auto pt-6 md:pt-0">
        <Image
          src={"/profile.jpg"}
          alt="profil image"
          width={500}
          height={100}
          className="rounded-full border-[15px]  border-[#39A7CE] object-cover"
        />
      </div>
    </div>
  );
}
