import { appStore, footerMap, googleStore, mapPin, paymentImg } from "@/assets/images"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div className="footer px-[8%] lg:px-[12%] pt-[100px]">
        <div className="footer-topbar">
          <div className="grid gird-cols-1 lg:grid-cols-2 items-center gap-5">
            <div className="map-section relative">
              <Image 
                src={footerMap}
                alt="map"
                className="footer-map"
              />

              <div className="map-image">
                <Image 
                  src={mapPin}
                  alt="map pin"
                  className="map-pin map-pin1"
                  width={25}
                  height={25}
                />
                <Image
                  src={mapPin}
                  alt="map pin"
                  className="map-pin map-pin2"
                  width={25}
                  height={25}
                />
                <Image
                  src={mapPin}
                  alt="map pin"
                  className="map-pin map-pin3"
                  width={25}
                  height={25}
                />
                <Image
                  src={mapPin}
                  alt="map pin"
                  className="map-pin map-pin4"
                  width={25}
                  height={25}
                />
              </div>
            </div>

            <div className="map-content">
              <h2 className="text-white font-bold text-4xl leading-[1.2]">
                Our Shop Is Open in Eight Nations
              </h2>

              <p className="text-white mt-8 font-normal w-[78%]">
                We are open for business in all the countries of the world. Our
                stores are open 24 hours a day, 7 days a week.
              </p>

              <div className="map-items mt-10 flex flex-wrap gap-5">
                <button className="bg-[#ffc935] px-8 py-3 pb-4 text-xl rounded-full hover:bg-white transition-all duration-300">
                  Find Store
                </button>

                <Image 
                  src={googleStore}
                  alt="googleStore"
                  className="rounded-lg object-contain"
                />

                <Image 
                  src={appStore}
                  alt="appStore"
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container py-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-12">
                <div className="logo font-kaushan font-bold text-5xl text-yellow-400">
                  Just<span className="text-white">Juicy</span>
                </div>

                <p className="mt-6 text-white">
                  Always fresh and delicious. We are committed to providing the best quality products and services to our customers.
                </p>

                <div className="flex gap-4 mt-8">
                  <div className="footer-icons">
                    <FaFacebook />
                  </div>
                  <div className="footer-icons">
                    <FaYoutube />
                  </div>
                  <div className="footer-icons">
                    <FaTiktok />
                  </div>
                  <div className="footer-icons">
                    <FaInstagram />
                  </div>
                  <div className="footer-icons">
                    <FaXTwitter />
                  </div>
                  <div className="footer-icons">
                    <TiSocialPinterest />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 lg:mt-8">
                <div className="space-y-2">
                  <h2 className="font-bold mb-6 text-white text-2xl md:text-3xl">Get In Touch</h2>
                  <p className="text-white text-[16px] hover:text-[#ffe600] transition-all duration-300">123 Street, <br/> New York ,MD, USA 4508</p>
                  <p className="mt-3 text-white text-[16px] hover:text-[#ffe600] transition-all duration-300">000 - 123 - 456789</p>
                  <p className="mt-3 text-white text-[16px] hover:text-[#ffe600] transition-all duration-300">support@justjuicy.com</p>
                </div>

                <div className="space-y-2">
                  <h2 className="font-bold mb-6 text-white text-2xl md:text-3xl">Shop</h2>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Suplements
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Pantry
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Milkshake
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Health Driks
                    </a>
                  </li>
                </div>

                <div className="space-y-2">
                  <h2 className="font-bold mb-6 text-white text-2xl md:text-3xl">Links</h2>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Support
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Our Locations
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Contact us
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Login
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Faq
                    </a>
                  </li>
                </div>

                <div className="space-y-2">
                  <h2 className="font-bold mb-6 text-white text-2xl md:text-3xl">Services</h2>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      History
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Payments
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Advance Search
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Privay Policy
                    </a>
                  </li>
                  <li className="text-lg px-3 py-2 text-white font-semibold hover:text-[#ffe600] hover:ms-1 transition-all duration-300">
                    <a href="#">
                      Terms & Conditions
                    </a>
                  </li>
                </div>

                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer