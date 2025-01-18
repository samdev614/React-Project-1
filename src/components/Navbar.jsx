import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/raviKumarLogo.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
  <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/samuel-maina-509655277"
            target="_blank"
            rel="noopener noreferer"
            aria-label="LinkedIn">
            <FaLinkedin />
        </a>
        <a href="https://www.github.com/in/samdev614"
            target="_blank"
            rel="noopener noreferer"
            aria-label="Github">
            <FaGithub />
            </a>

            <a href="https://www.instagram.com/in/graphix2030"
            target="_blank"
            rel="noopener noreferer"
            aria-label="Instagram">
            <FaInstagram />
            </a>

            <a href="https://www.twitter.com/in/waweru_sam41738"
            target="_blank"
            rel="noopener noreferer"
            aria-label="Twitter">
            <FaSquareXTwitter />

            </a>

          















    </div>
  </nav>
  )
}

export default Navbar
