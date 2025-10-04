import Image from 'next/image'
import { motion } from "framer-motion";
import { blog1, blog2, blog3 } from '@/assets/images';
import BlogCard from './BlogCard'; // Asumiendo que creas el archivo en la misma carpeta

const BlogComponent = () => {

  const titleText = "Our Blog & news";
  const titleWords = titleText.split(" ");

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleWord = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  // Variantes de animación para las tarjetas del blog
  const cardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre la animación de cada tarjeta
        delayChildren: 0.3,   // Retraso antes de que comience la primera animación
      },
    },
  };

  const cardVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // 1. Centralizamos los datos del blog en un array
  const blogPosts = [
    {
      image: blog1,
      date: "April 15, 2025",
      title: "Quality & Hygiene Standards For Fruit Juice Processing",
      description: "Our team has been working on the quality and hygiene standards for fruit juice processing for the past few years. We have been following the latest industry standards and regulations to ensure that our products meet the highest quality standards.",
      altText: "Person in protective gear inspecting fruit juice production line."
    },
    {
      image: blog2,
      date: "April 16, 2025",
      title: "Delicious Fruit Juice For A healthier Way of Life",
      description: "The health benefits of fruit juice are numerous and well-known. It is a natural source of vitamins, minerals, and antioxidants that can help improve overall health and well-being. Fruit juice is also a great way to stay hydrated and maintain a healthy weight.",
      altText: "Assortment of colorful fruit juices in glasses."
    },
    {
      image: blog3,
      date: "April 22, 2025",
      title: "Thirst Quenching & Refreshing Watermelon Juice",
      description: "The watermelon juice is a refreshing and hydrating drink that can help quench your thirst. It is also a great source of vitamins and minerals that can help improve your overall health and well-being.",
      altText: "Glass of fresh watermelon juice with a slice of watermelon."
    }
  ];

  return (
    <div className='section-blog pb-[100px] px-[8%] lg:px-[12%]'>
      <div className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <motion.h1
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="font-bold font-fraunces text-6xl text-[#fe8f00] mt-12 [text-shadow:5px_-2px_0_var(--white-color)]"
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={titleWord}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* 2. Mapeamos el array para renderizar los componentes BlogCard */}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // La animación se dispara una vez
      >
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            {...post} // Pasamos todos los datos del post como props
            variants={cardVariant} // Pasamos la variante de animación que luego se desestructura como motionProps
          />
        ))}
      </motion.div>
    </div>
  )
}

export default BlogComponent