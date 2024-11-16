import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#10324a] sticky top-0 flex flex-col text-center md:flex-row md:justify-around items-center  py-5 ">
      
      {/* logo */}
      <div className="text-2xl md:text-4xl lg:text-5xl text-white font-[italic] gap-x-4 underline-offset-8 underline py-2">
        Kaneez ℱatima
      </div>
      {/* links  */}
      <ul className="flex gap-x-5 md:gap-x-20 lg:gap-x-32">
        <Link href={"/"}>
          
          <li className="text-[#03AAe4] text-[17px] md:text-[25px] lg:text-[30px] underline hover:underline-offset-8   ">
            Home
          </li>
        </Link>
        <Link href={'/About'}>
          
          <li className="text-white text-[17px] md:text-[25px] lg:text-[30px] underline hover:underline-offset-8 cursor-pointer">
            About
          </li>
        </Link>
        <Link href={'/Contact'}>
          
          <li className="text-white text-[17px] md:text-[25px] lg:text-[30px] underline hover:underline-offset-8 cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>
    </div>
    
  );
}
