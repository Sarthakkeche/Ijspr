import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg3 from "../assets/abg.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import fule from "../assets/fule.png";
import Dhoke from "../assets/dhoke.jpg";
import Kewatkar from "../assets/kewatkar.png";
import vivek from "../assets/vivek.png";
import trupti from "../assets/trupti.jpg";
import mujtaba from "../assets/mujtaba.jpg";
import bhimte from "../assets/bhimte.jpg";
import sakshi from "../assets/sakshi.jpg";
import jaya from "../assets/jaya.jpg";
import priyanka from "../assets/priyanka.jpg";

const members = [
  {
    role: "Editor-in-Chief",
    name: "Dr. Ritesh A. Fule",
    title: "M. Pharm., PhD Tech in Pharmaceutics",
    position: "Associate Professor, Department of Pharmaceutics",
    institute: "Dadasaheb Balpande College of Pharmacy, Nagpur",
    email: "drriteshfule1984@gmail.com",
    image: fule,
  },
  {
    name: "Dr. Subodhkumar V. Dhoke",
    title: "M.Tech. Structural Engineering, Ph.D.(P)",
    position: "Assistant Professor, Department of Civil Engineering",
    institute: "P. R. Pote Patil College of Engineering and Management, Amravati",
    image: Dhoke,
  },
  {
    role: "Senior Editorial Member",
    name: "Dr. Shailesh M. Kewatkar",
    title: "M. Pharma, Ph.D.",
    position: "Associate Professor & Head, Dept. of Pharmacognosy",
    institute: "Rajarshi Shahu College of Pharmacy, Buldana",
    email: "kewatkar.shailesh@gmail.com",
    image: Kewatkar,
  },
  {
    name: "Dr. Vivek V. Paithankar",
    title: "M. Pharm, Ph.D.",
    position: "Associate Professor & HOD, Department of Pharmacology",
    institute: "Vidyadhari College of Pharmacy, Amravati",
    email: "vivek62@gmail.com",
    image: vivek,
  },
  {
    name: "Prof. Trupti A. Nimburkar",
    title: "M.Pharma.",
    position: "Assistant Professor, Department of Pharmacology",
    institute: "P. R. Pote College of Pharmacy, Amravati",
    email: "truptinimburkar@gmail.com",
    image: trupti,
  },
  {
    name: "Dr. Md. Ali Mujtaba",
    title: "Ph.D (Pharmaceutics), M. Pharma",
    position: "Associate Professor, Dept. of Pharmaceutics",
    institute: "Faculty of Pharmacy, Northern Border University, Saudi Arabia",
    email: "sajanqa@gmail.com",
    image: mujtaba,
  },
  {
    name: "Prof. Vaishali Venudhar Bhimte",
    title: "M.Tech., PhD (pursuing)",
    position: "Assistant Professor, Dept. of E&TC Engineering",
    institute: "Anantrao Pawar College of Engineering and Research, Pune",
    image: bhimte,
  },
  {  role: "	Associate Editorial Members ",
     name: "Ms. Sakshi Anil Keche ",
    title: "M Pharmacy in pharmacology ",
    
    institute: "Vidya Bharati College of Pharmacy Amravati , 444602 Maharashtra",
    email:"kecheanilsakshi2001@gmail.com",
    image: sakshi,
  },
 {  role: "	Associate Editorial Members ",
     name: "Ms. Jaya Gajanan Kirdak  ",
    title: "M Pharmacy in pharmacology ",
    
    institute: "Vidya Bharati College of Pharmacy Amravati , 444602 Maharashtra",
    email:" jayakirdak@gmail.com ",
    image: jaya,
  },
  {    role: "	Associate Editorial Members ",
     name: "Ms. K. M. Priyanka ",
    title: "M Pharmacy in pharmacology ",
    
    institute: "Vidya Bharati College of Pharmacy Amravati , 444602 Maharashtra",
    email:"kmpriyanka98@gmail.com ",
    image: priyanka,
  },
];

  

const EditorialBoard = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const editorInChief = members.filter((m) => m.role === "Editor-in-Chief");
  const seniorEditorial = members.filter((m) => m.role === "Senior Editorial Member");
  const others = members.filter((m) => !m.role);
  const associate = members.filter((m) => m.role=="	Associate Editorial Members ");

  const renderMembers = (list) =>
    list.map((member, index) => (
      <motion.div
        key={member.name}
        className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full border-2 border-blue-500 mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.title}</p>
          <p className="text-sm text-gray-700">{member.position}</p>
          <p className="text-sm text-gray-700">{member.institute}</p>
          {member.email && (
            <p className="text-sm mt-1 text-blue-600">
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
          )}
        </div>
      </motion.div>
    ));

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-blue-900 text-white pt-[130px] mt-33 z-10 pb-20 px-4 md:px-20 "
        style={{
          backgroundImage: `linear-gradient(rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${bg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="relative z-1000 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Editorial <span className="text-orange-400">Board</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            Meet the experts behind IJSRI—our editorial board ensures the highest standards of
            integrity, quality, and innovation across scientific disciplines.
          </p>
        </div>
      </section>

      {/* Members */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {editorInChief.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Editor-in-Chief</h3>
            <div className="space-y-6 mb-10">{renderMembers(editorInChief)}</div>
          </>
        )}

        {seniorEditorial.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Senior Editorial Members</h3>
            <div className="space-y-6 mb-10">{renderMembers(seniorEditorial)}</div>
          </>
        )}

        {others.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Editorial Members</h3>
            <div className="space-y-6">{renderMembers(others)}</div>
          </>
        )}

        {associate.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Associate Editorial Members </h3>
            <div className="space-y-6 mb-10">{renderMembers(associate)}</div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default EditorialBoard;
