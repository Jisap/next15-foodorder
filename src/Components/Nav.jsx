"use client"

import { ShoppingCart, User, Heart, X, List } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/story", label: "Story" },
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
  const NavLink = ({ href, label, className = '', style = {} }) => (
    <Link 
      href={href} 
      className={`group relative text-base xl:text-lg text-white font-semibold px-2 xl:px-3 py-2 ${className}`} 
      onClick={() => setMenuOpen(false)}
      style={style}
    >
      {label}
      {/* Línea superior e inferior que aparecen en el hover */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      <span className="absolute top-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </Link>
  );

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-8 lg:px-12 py-5 bg-transparent">
        <nav className="relative grid grid-cols-2 md:grid-cols-10 lg:grid-cols-12 items-center max-w-7xl mx-auto">
          {/* Left Section: Desktop Links - 5 */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 lg:col-span-5">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                label={link.label}   
              />
            ))}
          </div>

          {/* Center Section: Logo - 4 */}
          <div className="md:col-span-7 lg:col-span-4 justify-self-start lg:justify-self-center">
            <Link href="/">
              <span className="logo font-kaushan font-bold text-4xl 2xl:text-5xl text-yellow-400 px-4 xl:px-6 transition-all duration-300 hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
                Just<span className="text-white">Juicy</span>
              </span>
            </Link>
          </div>
          
          {/* Right Section: Desktop Icons & Mobile Menu Button - 3 */}
          <div className="flex items-center gap-5 justify-self-end md:col-span-3">
            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-5">
              <Link href="/profile" aria-label="User profile">
                <User className="text-white hover:text-black/90 transition-colors duration-300 cursor-pointer size-6"/>
              </Link>
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="text-white hover:text-black/90 transition-colors duration-300 cursor-pointer size-6"/>
              </Link>
              <Link href="/cart" aria-label="Shopping cart">
                <ShoppingCart className="text-white hover:text-black/90 transition-colors duration-300 cursor-pointer size-6"/>
              </Link>
              <button className="bg-[--prim-color] px-5 py-2 text-white text-lg rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-white z-30 relative h-8 w-8 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <List size={30} className={`absolute transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
                <X size={30} className={`absolute transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div 
        className={`
          lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-50 
          flex flex-col items-center justify-center gap-8
          transition-all duration-500 ease-in-out
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.href} 
              {...link} 
              className={`transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${150 + index * 50}ms` }}
            />
          ))}
        </nav>
        <div 
          className={`flex items-center gap-8 transition-all duration-300 delay-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: `${150 + navLinks.length * 50}ms` }}
        >
          <Link href="/profile" onClick={toggleMenu}><User className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer size-7"/></Link>
          <Link href="/wishlist" onClick={toggleMenu}><Heart className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer size-7"/></Link>
          <Link href="/cart" onClick={toggleMenu}><ShoppingCart className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer size-7"/></Link>
        </div>
        <button 
          className={`bg-[--prim-color] px-8 py-3 text-white text-xl rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 delay-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: `${200 + navLinks.length * 50}ms` }}
        >Order Now</button>
      </div>
    </>
  )
}

export default Nav