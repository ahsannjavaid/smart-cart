import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../css/Team.css";

// Import team member images
import Musa from "../images/team-members/Musa-Kaleem.png";
import Talha from "../images/team-members/Talha-Akeel.jpg";
import AhmadAzeem from "../images/team-members/Ahmad-Azeem.png";
import Ali from "../images/team-members/Ali-Azhar.png";
import AhmadRasheed from "../images/team-members/Ahmad-Rasheed.png";
import SanaTaj from "../images/team-members/woman.png";
import HanzalaAkeel from "../images/team-members/Hanzala-Akeel.png";
import WaqasIshfaq from "../images/team-members/Waqas-Ishfaq.png";
import rahimAdnan from "../images/team-members/admin.jpg";

const teamMembers = [
  { name: "Musa Kaleem", role: "Marketing Expert", image: Musa },
  { name: "Talha Akeel", role: "Web Developer", image: Talha },
  { name: "Ahmad Azeem", role: "Social Media Manager", image: AhmadAzeem },
  { name: "Ali Azhar", role: "Video Editor", image: Ali },
  { name: "Ahmad Rasheed", role: "Video Editor", image: AhmadRasheed },
  {
    name: "Sana Taj",
    role: "WordPress Developer & Software Quality Assurance Engineer",
    image: SanaTaj,
  },
  {
    name: "Hafiz Raahim Adnan",
    role: "MERN-Stack Developer",
    image: rahimAdnan,
  },
  { name: "Hanzala Akeel", role: "Video Editor", image: HanzalaAkeel },
  { name: "Waqas Ishfaq", role: "Video Editor", image: WaqasIshfaq },
];

const Team2 = () => {
  return (
    <section className="bg-white py-10 text-center">
      <h2 className="text-3xl font-bold text-customBlue">Meet Our Team</h2>

      <div className="mt-6 max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default: 1 image on mobile
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 3 }, // Tablet (iPad Pro)
            1024: { slidesPerView: 3 }, // Desktop
          }}
          className="swiper-color"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="text-center py-10 px-10">
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 md:w-64 md:h-64 rounded-full border-4 border-customBlue shadow-lg"
                />
                <p className="font-medium mt-3 text-customBlue">
                  {member.name}
                </p>
                <p className="text-sm text-customBlue">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team2;
