import Image from "next/image";

export default function Home() {
  return (
    <div className="parentcontainer">
      <div className="childcontainer">
        <h1>
          Hello!
        </h1><br />
<p>I'm <span className="blueColor">Anam Noman</span></p>
<p>I'm learning<abbr title="Artificial Intelligence"> AI</abbr> from <abbr title="Governor Inititive Artificial Intelligence Certification">GIAIC</abbr></p>
<p>I have done <abbr title="Masters in Science">M.Sc</abbr> from <abbr title="University Of Karachi">UOK</abbr>
  </p></div>
<div className="childcontainer">
<div className="image-frame">
<Image
          className="mt-0"
          src="/pic/ana.jfif" // Correct path for image in public folder
          alt="Iffat image"
          width={350}
          height={350} // Size you can fix as you like
         ></Image>
         </div>
         </div>
         </div>
         );
         };