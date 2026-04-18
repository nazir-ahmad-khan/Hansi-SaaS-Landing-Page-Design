// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination, Autoplay } from "swiper/modules";

// import Sarah from "../../assets/Testimonial/Sarah-Johnson.png?url";
// import Michael from "../../assets/Testimonial/Michael-Chen.png?url";
// import Emily from "../../assets/Testimonial/Emily-Rodriguez.png?url";

// const testimonials = [
//   {
//     text: "This platform transformed our entire workflow. We've automated 80% of our routine tasks and our team is now focused on strategic growth initiatives.",
//     image: Sarah,
//     name: "Sarah Johnson",
//     role: "VP of Operations, TechFlow Solutions"
//   },
//   {
//     text: "The ROI was evident within the first month. We've saved over 200 hours of manual work and improved our data accuracy significantly.",
//     image: Michael,
//     name: "Michael Chen",
//     role: "CTO, DataVantage Corp"
//   },
//   {
//     text: "Implementation was incredibly smooth. The support team was fantastic, and we were up and running in less than a day.",
//     image: Emily,
//     name: "Emily Rodriguez",
//     role: "Director of IT, CloudScale Systems"
//   },
//   {
//     text: "Amazing experience overall. The automation tools helped us scale faster than expected.",
//     image: Sarah,
//     name: "Sarah Johnson",
//     role: "VP of Operations, TechFlow Solutions"
//   }
// ];

// export default function TestimonialSlider() {
//   return (
//     <div className="mt-16 pb-14 relative">

//       <Swiper
//   modules={[Pagination, Autoplay]}
//   spaceBetween={20}
  // slidesPerView={3} // default desktop

  // /* ✅ FIX: responsive breakpoints */
//   breakpoints={{
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//     1280: {
//       slidesPerView: 3,
//     },
//   }}

//   loop={true}
//   speed={800}
//   autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   pagination={{
//     el: ".custom-pagination",
//     clickable: true,
//   }}
// >
//         {testimonials.map((item, i) => (
//           <SwiperSlide key={i} className="h-auto">
//             <div className="bg-[#ffffff] w-full max-w-[413px] h-[240px] rounded-3xl p-6 md:p-6 lg:p-8 flex flex-col justify-between mx-auto">

//               <p className="text-[18px] leading-[24px] text-[#1C1C1C] line-clamp-4">
//                 {item.text}
//               </p>

//               <div className="flex items-center gap-3 mt-6">
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />

//                 <div className="flex flex-col gap-1">
//                   <h4 className="text-[18px] leading-[24px] font-medium text-[#1C1C1C]">
//                     {item.name}
//                   </h4>
//                   <p className="text-[14px] leading-[18px] text-[#5F5F5F]">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* ✅ CUSTOM DOTS OUTSIDE SWIPER */}
//       <div className="custom-pagination flex justify-center gap-2 mt-14"></div>

//       {/* ✅ CSS INSIDE COMPONENT */}
//       <style>
//         {`
//           .custom-pagination .swiper-pagination-bullet {
//             width: 8px;
//             height: 8px;
//             background: #cfcfcf;
//             opacity: 1;
//             border-radius: 999px;
//             transition: all 0.3s ease;
//           }

//           .custom-pagination .swiper-pagination-bullet-active {
//             width: 28px;
//             background: #1c1c1c;
//           }
//         `}
//       </style>

//     </div>
//   );
// }















import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import Sarah from "../../assets/images/Testimonial/Sarah-Johnson.png?url";
import Michael from "../../assets/images/Testimonial/Michael-Chen.png?url";
import Emily from "../../assets/images/Testimonial/Emily-Rodriguez.png?url";

const testimonials = [
  {
    text: "This platform transformed our entire workflow. We've automated 80% of our routine tasks and our team is now focused on strategic growth initiatives.",
    image: Sarah,
    name: "Sarah Johnson",
    role: "VP of Operations, TechFlow Solutions"
  },
  {
    text: "The ROI was evident within the first month. We've saved over 200 hours of manual work and improved our data accuracy significantly.",
    image: Michael,
    name: "Michael Chen",
    role: "CTO, DataVantage Corp"
  },
  {
    text: "Implementation was incredibly smooth. The support team was fantastic, and we were up and running in less than a day.",
    image: Emily,
    name: "Emily Rodriguez",
    role: "Director of IT, CloudScale Systems"
  },
  {
    text: "Amazing experience overall. The automation tools helped us scale faster than expected.",
    image: Sarah,
    name: "Sarah Johnson",
    role: "VP of Operations, TechFlow Solutions"
  }
];

export default function TestimonialSlider() {
  return (
    <div className="mt-10 sm:mt-14 pb-12 relative w-full overflow-hidden">

      {/* SWIPER WRAPPER SAFETY FIX */}
      <div className="w-full overflow-hidden">

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}

          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="h-auto flex justify-center">
              
              <div className="bg-white w-full max-w-[413px] h-[240px] rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between mx-auto overflow-hidden">

                <p className="text-[16px] sm:text-[18px] leading-[24px] text-[#1C1C1C] line-clamp-4">
                  {item.text}
                </p>

                <div className="flex items-center gap-3 mt-5 sm:mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />

                  <div className="flex flex-col gap-1">
                    <h4 className="text-[16px] sm:text-[18px] font-medium text-[#1C1C1C]">
                      {item.name}
                    </h4>
                    <p className="text-[12px] sm:text-[14px] text-[#5F5F5F]">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* DOTS */}
      <div className="custom-pagination flex justify-center gap-2 mt-10"></div>

      {/* DOT STYLING */}
      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #cfcfcf;
            opacity: 1;
            border-radius: 999px;
            transition: all 0.3s ease;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            width: 28px;
            background: #1c1c1c;
          }

          .swiper {
            overflow: hidden !important;
          }
        `}
      </style>

    </div>
  );
}