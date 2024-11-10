import Image from "next/image";

export default function About() {
  return (
    <div className="h-full w-full bg-[#0c233c] py-[90px]">
      {/* about  */}
      <div className="h-full md:h-[900px]  lg:h-[800px] w-[50%]  md:w-[60%] lg:w-[80%] items-center p-3 bg-[#122e43] mx-auto rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-7xl font-bold text-white pt-[40px] text-blur-out">
            
            About <span className="text-[#03AAe4]">Me</span>
          </h1>
          {/* image  */}
          <div className="pt-[20px] md:pt-[35px] lg:pt-[50px]">
            <Image
              src={"/profile.jpg"}
              alt="profile pic"
              width={300}
              height={300}
              className=" rounded-full border-[15px] border-[#39A7CE] object-cover flip-in-hor-bottom "
            />
          </div>
          <h2 className="text-xl md:text-3xl lg:text-5xl text-center font-bold text-white pt-[15px] md:pt-[25px] lg:pt-[50px] text-blur-out ">
            FullStack Web Developer
          </h2>
          <p className="text-[#aebbc7] text-medium md:text-lg lg:text-2xl text-center p-[20px] md:p-[30px] lg:p-[40px]">
            Hi,"As a seasoned full-stack developer with expertise in HTML, CSS,
            Tailwind CSS, Next.js, and TypeScript, I excel at crafting modern,
            scalable, and secure web applications that surpass user
            expectations. With a passion for innovation and problem-solving, I
            stay abreast of industry trends to deliver high-quality solutions.
            My focus is on creating intuitive user experiences that drive
            business results, leveraging agile methodologies and cutting-edge
            technologies to ensure seamless project execution."AI-driven
            solutions, & craft innovative applications that combine technical
            excellence with cutting-edge artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
