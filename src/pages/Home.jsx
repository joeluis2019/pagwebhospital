import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Play, Users, Palette, Target } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import imagen1 from '../assets/pngwing.com.png'; 
import { BsArrowRightSquareFill } from "react-icons/bs";
import Typist from 'react-typist-component';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Portfolio 1"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      alt: "Portfolio 2"
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Portfolio 3"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with Cortana has transformed our business operations. Their solutions are innovative and effective.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "The team at Cortana delivered beyond our expectations. Their attention to detail is remarkable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DigitalFlow",
      content: "Exceptional service and outstanding results. Cortana has been crucial to our success.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300">
      {/* Hero Section */}
      <section className="container mx-auto p-8 py-20 px-4">
        <div className="max-w-6xl justify-center  mx-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className=' flex items-center justify-center'>
            <BsArrowRightSquareFill size={30} className='mx-2 mb-6 text-white' />
            


            <h1 className="text-white text-5xl mb-8 font-dancing-script drop-shadow-lg">
            <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
            Nodo Hospital Ernesto Guevara
      
        <Typist.Delay ms={500} />
       
      </Typist>
              
              
            </h1>
            
           
            </div>
          
            <div className="flex gap-2">
              <Link
                to="/contact"
                className="bg-gradient-to-br from-[#050834] to-whit hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors mx-40"
              >
               Continuar
              </Link>
            
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={imagen1}
              alt="Hero Illustration"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">3 Simple Steps to Go</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "We Arrange a Meeting",
                description: "Schedule a consultation to discuss your needs and goals."
              },
              {
                icon: <Palette className="w-12 h-12 text-primary" />,
                title: "Our Design Team Starts Designing",
                description: "Our experts create tailored solutions for your business."
              },
              {
                icon: <Target className="w-12 h-12 text-primary" />,
                title: "You Get Design Based on Your Business Target",
                description: "Receive customized solutions that match your objectives."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="ackdrop-blur-sm bg-white/60 rounded-2xl p-8 shadow-xl border border-white/20   text-center"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-600">2.5k+ Successful Projects</p>
          </div>
          <ImageCarousel images={portfolioImages} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <p className="text-gray-600">Our Happy Client's Words</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;