import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Services = () => (
  <div style={{ textAlign: 'center' }}>
    <Navbar
      style={{
        backgroundColor: 'darkblue', // Override the background color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow
      }}
    />
    <div style={styles.carouselContainer}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: 'absolute',
                top: '50%',
                left: '15px',
                zIndex: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: 'absolute',
                top: '50%',
                right: '15px',
                zIndex: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ❯
            </button>
          )
        }
      >
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Background Image */}
          <img
            src="/public/images/Service.jpeg" // Replace with your image path
            alt="Background"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '110%',
              height: '100%',
              objectPosition: 'center',
              zIndex: '-1',
              filter: 'blur(2px)', // Apply blur effect to the image
            }}
          />

          {/* Color Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(53, 53, 53, 0.7)', // Color overlay
              zIndex: '0', // Ensures it's on top of the image but below the content
            }}
          />

          {/* Content */}
          <div style={{ width: '100%', padding: '19px', position: 'relative', zIndex: '1' }}>
            <h1 style={{ fontSize: '96px', color: 'white', fontWeight: 'bold', margin: '0' }}>
              “Humse Hi Hogi Shuruwaat, <span style={{ color: 'black' }}>Services</span> Jo Kare Baat”
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
              {/* Add your buttons or other content here */}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
    <div className="bg-gray-600 p-5 md:p-5  flex items-center justify-center text-blue-100 font-sans h-[500px]">
  {/* Inner Box */}
  <div className="bg-gray-900 rounded-md flex items-start justify-start w-full max-w-8xl p-10 md:p-10 h-[400px]">
    {/* Left Image Section */}
    <div className="flex-1 flex items-center justify-center">
      <img
        src="your-phone-image.png" // Replace with the correct image path
        alt="Route Optimization"
        className="w-36 h-auto rounded-md object-cover"
      />
    </div>

    {/* Right Text Section */}
    <div className="flex-2 text-left px-5">
      <h2 className="text-blue-600 text-7xl font-bold mb-2">
        Route Optimization
      </h2>
      <p className="text-lg italic text-3xl text-blue-300 mb-3">
        Raaste Ka Jadoo, Samay Aur Diesel Ki Bachat!
      </p>
      <p className="text-sm leading-relaxed text-2xl text-blue-100">
        Hamare smart algorithms aapko dikhayenge sabse <br/> chhota, sabse tez aur
        sabse efficient raasta, taaki har delivery time pe ho aur cost kam
        aaye.
      </p>
    </div>
  </div>
</div>
 
 {/*second */}
 <div className="bg-gray-600 p-5 md:p-5  flex items-center justify-center text-blue-100 font-sans h-[500px]">
 <div className="bg-gray-900 rounded-md flex items-start justify-between w-full max-w-8xl p-10 md:p-10 h-[400px]">
  {/* Left Text Section */}
  <div className="flex-2 text-left px-5">
    <h2 className="text-blue-600 text-7xl font-bold mb-3">Real-Time Tracking</h2>
    <p className="text-lg italic text-3xl text-blue-300 mb-3">
    Gaadi Kahan, Packet Kahan, Har Waqt Pata Chal Jaye!
    </p>
    <p className="text-sm leading-relaxed text-2xl text-blue-100">
    Ab delivery ka tension khatam! Hamara tracking system parcel <br/> aur vehicle ka exact location real-time mein dikhata hai.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex-1 flex items-center justify-center">
    <img
      src="your-phone-image.png" // Replace with the correct image path
      alt="Route Optimization"
      className="w-36 h-auto rounded-md object-cover"
    />
  </div>
</div>
</div>


{/*thired */}

<div className="bg-gray-600 p-5 md:p-5  flex items-center justify-center text-blue-100 font-sans h-[500px]">
  {/* Inner Box */}
  <div className="bg-gray-900 rounded-md flex items-start justify-start w-full max-w-8xl p-10 md:p-10 h-[400px]">
    {/* Left Image Section */}
    <div className="flex-1 flex items-center justify-center">
      <img
        src="your-phone-image.png" // Replace with the correct image path
        alt="Route Optimization"
        className="w-36 h-auto rounded-md object-cover"
      />
    </div>

    {/* Right Text Section */}
    <div className="flex-2 text-left px-5">
      <h2 className="text-blue-600 text-7xl font-bold mb-2">
      Load Capacity Analysis
      </h2>
      <p className="text-lg italic text-3xl text-blue-300 mb-3">
       Truck Mein Kitni Jagah Bachi Hai, Ab App Se Pata Chalega!
      </p>
      <p className="text-sm leading-relaxed text-2xl text-blue-100">
      Smart analysis tools ki madad se, truck ka capacity ka pura-pura <br/> hisaab real-time mein milega, bina kisi alag hardware ke.
      </p>
    </div>
  </div>
</div>

{/* fourth */}
 
<div className="bg-gray-600 p-5 md:p-5  flex items-center justify-center text-blue-100 font-sans h-[500px]">
 <div className="bg-gray-900 rounded-md flex items-start justify-between w-full max-w-8xl p-10 md:p-10 h-[400px]">
  {/* Left Text Section */}
  <div className="flex-2 text-left px-5">
    <h2 className="text-blue-600 text-7xl font-bold mb-3">Predictive Analytics</h2>
    <p className="text-lg italic text-3xl text-blue-300 mb-3">
    Aane Wale Mushkilon Ka Jhat Se Andaza Lagayein!
    </p>
    <p className="text-sm leading-relaxed text-2xl text-blue-100">
    Hamare advanced AI models delays aur route problems ka pehle hi andaza <br/> lagakar aapka plan bana dete hain
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex-1 flex items-center justify-center">
    <img
      src="your-phone-image.png" // Replace with the correct image path
      alt="Route Optimization"
      className="w-36 h-auto rounded-md object-cover"
    />
  </div>
</div>
</div>

{/**fifth */}

<div className="bg-gray-600 p-5 md:p-5  flex items-center justify-center text-blue-100 font-sans h-[500px]">
  {/* Inner Box */}
  <div className="bg-gray-900 rounded-md flex items-start justify-start w-full max-w-8xl p-10 md:p-10 h-[400px]">
    {/* Left Image Section */}
    <div className="flex-1 flex items-center justify-center">
      <img
        src="your-phone-image.png" // Replace with the correct image path
        alt="Route Optimization"
        className="w-36 h-auto rounded-md object-cover"
      />
    </div>

    {/* Right Text Section */}
    <div className="flex-2 text-left px-5">
      <h2 className="text-blue-600 text-7xl font-bold mb-2">
      Alerts and Notifications
      </h2>
      <p className="text-lg italic text-3xl text-blue-300 mb-3">
      Tension Free Delivery Ke Liye Sabhi Updates Yahin Milenge!
      </p>
      <p className="text-sm leading-relaxed text-2xl text-blue-100">
      Delivery ke har kadam par automated alerts aur updates milega. <br/> Ab na late hone ka tension, na kuch miss hone ka dar.
      </p>
    </div>
  </div>
</div>

{/**sixth */}

<div className="bg-gray-600 p-5 md:p-5  flex items-center justify-center text-blue-100 font-sans h-[500px]">
 <div className="bg-gray-900 rounded-md flex items-start justify-between w-full max-w-8xl p-10 md:p-10 h-[400px]">
  {/* Left Text Section */}
  <div className="flex-2 text-left px-5">
    <h2 className="text-blue-600 text-7xl font-bold mb-3">Data Analytics Dashboard</h2>
    <p className="text-lg italic text-3xl text-blue-300 mb-3">
    Sab Kuch Ek Jagah, Full Control Aapke Haath!
    </p>
    <p className="text-sm leading-relaxed text-2xl text-blue-100">
    Ek detailed dashboard jo aapko route data, capacity aur deliveries <br/> ka analysis ekdum asan tarike se dikhata hai.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex-1 flex items-center justify-center">
    <img
      src="your-phone-image.png" // Replace with the correct image path
      alt="Route Optimization"
      className="w-36 h-auto rounded-md object-cover"
    />
  </div>
</div>
</div>
  </div>
);

const styles = {};
export default Services;
