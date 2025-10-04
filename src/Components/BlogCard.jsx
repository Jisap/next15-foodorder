// En un nuevo archivo, por ejemplo: src/Components/BlogCard.jsx

import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogCard = ({ image, date, title, description, altText, ...motionProps }) => {
  return (
    <motion.div {...motionProps} className='blog-card cursor-pointer group'>
      <div className='blog-image'>
        <Image
          src={image}
          alt={altText} // Usamos altText para mejorar la accesibilidad
        />
        {/* Aplicamos el centrado a todas las fechas */}
        <p className='flex justify-center items-center'>
          {date}
        </p>
      </div>

      <div className='blog-content mt-5'>
        <h2 className='text-3xl font-bold font-fraunces text-gray-800 group-hover:text-[#fe8f00] transition duration-300 mb-3'>
          {title}
        </h2>

        <p className='text-gray-700 text-lg'>
          {description}
        </p>

        <div className='mt-5'>
          <button
            className='bg-[#ff679a] px-8 py-3 pb-4 text-xl rounded-full text-white hover:bg-white hover:text-black transition-all duration-300'
            aria-label={`Read more about ${title}`} // Mejora de accesibilidad
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
