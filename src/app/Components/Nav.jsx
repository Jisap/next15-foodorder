"use client"

import { ShoppingCart, User, Heart, X, List } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/story", label: "Our Story" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Componente reutilizable para los enlaces de navegación con el efecto hover
  const NavLink = ({ href, label }) => (
    <Link 
      href={href} 
      className="group relative text-base xl:text-lg text-white font-semibold px-2 xl:px-3 py-2" onClick={() => setMenuOpen(false)}
    >
      {label}
      {/* Línea superior e inferior que aparecen en el hover */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      <span className="absolute top-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </Link>
  );

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-8 lg:px-12 py-5 bg-black">
        <nav className="relative flex justify-between items-center max-w-7xl mx-auto">
          {/* Left Section: Logo */}
          <div>
            <Link href="/">
              <span className="logo font-kaushan font-bold text-4xl 2xl:text-5xl text-yellow-400 px-4 xl:px-6">
                Just<span className="text-white">Juicy</span>
              </span>
            </Link>
          </div>

          {/* Center Section: Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                label={link.label}   
              />
            ))}
          </div>

          {/* Right Section: Desktop Icons & Mobile Menu Button */}
          <div className="flex items-center gap-5">
            {/* Desktop Icons */}
            <div className="hidden xl:flex items-center gap-5">
              <Link href="/profile" aria-label="User profile">
                <User className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer size-6"/>
              </Link>
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer size-6"/>
              </Link>
              <Link href="/cart" aria-label="Shopping cart">
                <ShoppingCart className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer size-6"/>
              </Link>
              <button className="bg-[--prim-color] px-5 py-2 text-white text-lg rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl z-30 relative">
                {menuOpen ? <X size={30} /> : <List size={30} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="xl:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-8">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => <NavLink key={link.href} {...link} />)}
          </nav>
          <div className="flex items-center gap-8">
            <Link href="/profile" onClick={toggleMenu}><User className="text-white size-7"/></Link>
            <Link href="/wishlist" onClick={toggleMenu}><Heart className="text-white size-7"/></Link>
            <Link href="/cart" onClick={toggleMenu}><ShoppingCart className="text-white size-7"/></Link>
          </div>
          <button className="bg-[--prim-color] px-8 py-3 text-white text-xl rounded-full hover:bg-yellow-400 hover:text-black transition-colors">Order Now</button>
        </div>
      )}
    </>
  )
}

export default Nav