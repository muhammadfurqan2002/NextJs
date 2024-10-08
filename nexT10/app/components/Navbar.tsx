import Link from "next/link";
import { FaYoutube, FaGithub, FaFacebook, FaLaptop } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl ms-auto flex text-center justify-between flex-col sm:flex-row">
        <Link
          href={`/`}
          className="text-white/90 text-center no-underline hover:text-white"
        >
          M.Furqan
        </Link>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link href={""} className="text-white/90 hover:text-white">
            <FaYoutube />
          </Link>
          <Link href={""} className="text-white/90 hover:text-white">
            <FaFacebook />
          </Link>
          <Link href={""} className="text-white/90 hover:text-white">
            <FaGithub/>
          </Link>
          <Link href={""} className="text-white/90 hover:text-white">
            <FaLaptop/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
