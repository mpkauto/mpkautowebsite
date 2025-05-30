import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { MapPin } from 'lucide-react';

export default function BrandLogosGrid() {
  // We'll use the swiper instance directly without a ref since we don't need to control it programmatically

  const brands = [
    { name: 'Toyota', logo: '/images/brands/toyota.webp' },
    { name: 'Honda', logo: '/images/brands/honda.webp' },
    { name: 'Ford', logo: '/images/brands/ford.webp' },
    { name: 'BMW', logo: '/images/brands/bmw.webp' },
    { name: 'Mercedes-Benz', logo: '/images/brands/mercedes.webp' },
    { name: 'Volkswagen', logo: '/images/brands/volkswagen.webp' },
    { name: 'Hyundai', logo: '/images/brands/hyundai.webp' },
    { name: 'Nissan', logo: '/images/brands/nissan.webp' },
    { name: 'Kia', logo: '/images/brands/kia.webp' },
    { name: 'Renault', logo: '/images/brands/renault.webp' },
  ];

  const serviceAreas = [
    'Kundrathur',
    'Anakaputhur',
    'Pammal',
    'Porur',
    'Pallavaram',
    'Mangadu',
    'Gerugambakkam',
    'Poonamalle',
    'Thirumudivakkam',
    'Tambaram',
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-center text-gray-900">
          Trusted by Leading Brands
        </h2>

        {/* Logo Carousel */}
        <div className="relative px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 70,
              },
            }}
            className="w-full py-8"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="!flex items-center justify-center">
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 opacity-90 hover:scale-105 transition-all duration-300 ease-in-out">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 sm:h-12 w-auto max-w-[120px] object-contain"
                    loading="lazy"
                    width={120}
                    height={48}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Service Areas Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-gray-300 mr-4"></div>
              <span className="text-gray-700 font-medium uppercase tracking-wider text-sm">
                Service Areas
              </span>
              <div className="h-0.5 w-12 bg-gray-300 ml-4"></div>
            </div>
            <h2 className="text-4xl font-semibold mb-6 text-gray-900">Serving Your Neighborhood</h2>
            <p className="text-base text-gray-700 mb-6">
              Mobile AC service available in these areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.2316151506168!2d80.11441536977678!3d12.987285958143454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52600a3a85e519%3A0x995e3567925f9948!2sMetro%20Star%20City%201st%20Main%20Rd%2C%20Tiruneermalai%2C%20Tamil%20Nadu%20600069!5e1!3m2!1sen!2sin!4v1748115875274!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Areas List */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-gray-600" />
                <h3 className="text-2xl font-medium mb-6 text-gray-900">Coverage Areas</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-base text-gray-700">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-base text-gray-700">
                  <span className="font-medium text-gray-900">Note:</span> We offer mobile service
                  within a 15-mile radius of our main location. Contact us to confirm coverage for
                  your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
