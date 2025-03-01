import React from "react";
import ImageList from "../components/ImageList";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Footer from "../components/Footer";

const Contact = () => {
  const people = [
    {
      id: 0,
      name: "Thomas Borkowski, Founder",
      sport: "Soccer",
      image: "tz.jpg",
      acc: [
        "Class of 2025 (12th Grade)",
        "9 years of Club - GPS NPL White --> Juventus Academy Boston EDS --> FC Stars ECRL",
        "3x Varsity Goalkeeper - Golden Glove winner of 2022-2023 season",
        "Middlesex Liberty All Star (23-24 season) and Middlesex Honorable mention (22-23 season)",
      ],
      desc: "My name is Thomas Borkowski and I have been the Belmont Varsity starting goalkeeper since my sophomore year. In my earlier years, I played on the Red team for Second Soccer, and then played travel and in-town during middle school. I have additional experience from club, as I have been playing club soccer since the 3rd grade. As a coach I will be able to pass on the lessons and skills that I have learned throughout my soccer career.",
    },
    {
      id: 1,
      name: "Royce Pang, Founder",
      sport: "Basketball",
      image: "rp.jpg",
      acc: [
        "Class of 2025 (12th Grade)",
        "Boys JV Basketball,  AAU: ASA Hoops",
        "ZG Player of the Game (2021), NERR Player of the Game (2023)",
        "BYBA In-town Coach (2022 - present) ",
      ],
      desc: "My name is Royce Pang and I have been playing basketball for 10 years already. I have been playing MetroWest for my middle school years, as well as AAU in the off seasons. Over the past 5 years, I have been private coached, which helped me improve my skills drastically throughout the years. Because of this, I want to help out the youth athletes that want to pursue basketball in high school. Under my coaching, I will pass on my skills that I learned over the years and these young athletes will surpass their previous goals. ",
    },
    {
      id: 2,
      name: "Sophia Pang, Founder",
      sport: "Basketball",
      image: "sp.jpg",
      acc: [
        "Class of 2026 (11th Grade)",
        "Varsity Basketball, AAU - Huskies ",
        "Mt Rushmore Nominee (2021) ",
        "BYBA In-town Coach (2023 - present) ",
      ],
      desc: "My name is Royce Pang and I have been playing basketball for 10 years already. I have been playing MetroWest for my middle school years, as well as AAU in the off seasons. Over the past 5 years, I have been private coached, which helped me improve my skills drastically throughout the years. Because of this, I want to help out the youth athletes that want to pursue basketball in high school. Under my coaching, I will pass on my skills that I learned over the years and these young athletes will surpass their previous goals. ",
    },
    {
      id: 3,
      name: "Eddie Lech",
      sport: "Basketball",
      image: "edward.jpg",
      acc: [
        "Class of 2025 (12th Grade)",
        "Boys JV Basketball Captain (2023-24) ",
        "BYBA Intown Coach (2022-2023)",
        "Chenery Basketball Team (2019-2020) ",
      ],
      desc: "Hi, my name is Eddie and I was first introduced to basketball through the BYBA Rookies Program. Although, I was introduced to Basketball early I did not begin pursuing it seriously until 7th grade. I found a love for the game playing in the BYBA intown and travel program as well as playing AAU in the springs and falls (Boston Bobcats: 2 seasons, EVOlution: 3 seasons, MCIB: 3 seasons). Throughout my basketball journey I have been vary thankful for all the coaches and older players that served as role models and have had a lasting impact on me. Now, as an older player I have enjoyed being on the giving side of this support and impact on younger players. As a coach, I hope to introduce players to new basketball skills and techniques as well as teaching them important lessons and leaving a positive impact on that player.",
    },
    {
      id: 4,
      name: "Jaden Yan",
      sport: "Soccer",
      image: "jy.jpg",
      acc: [
        "Class of 2027 (10th Grade)",
        "Soccer Coach- Midfield, attacking and defensive",
        "Freshman Varsity player",
        "Position: CDM/CAM  ",
        "Former captain of 1st division 7-8th grade travel team (2021-2023)",
        "7 year club soccer player (levels include: ECNL, NAL, NECSL, DA)",
      ],
      desc: "Hi, my name is Jaden Yan and I have been a part of the Belmont Soccer Program for 9 years. From the Maroon team in kindergarten to the 2024 varsity squad, I have accumulated various experiences from multiple grade levels. I have played club soccer for 7 years total on multiple teams (Including: Condors NECSL, NEFC DA, NEFC ECNL, VALEO NAL). Through my time in club I have competed in many tournaments such as the Jefferson cup (NEFC ECNL), Massachusetts state cup (VALEO NAL), and International Ibra cup situated in Barcelona, Spain (VALEO international team). I believe that my relatively younger age will allow me to better relate and assist players in all facets of the game. As a coach,  I aim to share my passion of the game with players, and aid in the understanding and improvement of their abilities.",
    },
    {
      id: 5,
      name: "Maya Bernbeck",
      sport: "Soccer",
      image: "mb.jpg",
      acc: [
        "Class of 2026 (11th Grade)",
        "Outside Back and Center Defensive Mid",
        "FC Stars (2019 - 2022) ",
        "NEFC (2022 - Present)",
      ],
      desc: "Hi, my name is Maya Bernbeck and I've been playing soccer for 10 years. I was on the Red Team for Second Soccer and have been playing club soccer since 5th grade. I played with FC Stars throughout middle school and moved to NEFC in 9th grade. I am a referee for Belmont Youth Soccer and am looking forward to helping young athletes improve.",
    },
    {
      id: 6,
      name: "Daniel Chang",
      sport: "Soccer",
      image: "danielchang.png",
      acc: [
        "Class of 2026 (11th Grade)",
        "BHS Boys Varsity Soccer ",
        "11 years experience playing soccer as a field player",
        "5 years of Club Soccer experience",
        "Position: Wing/Wingback and Center Attacking Mid",
      ],
      desc: "My name is Daniel Chang and I am a rising Junior and a member of the BHS Boys Varsity Soccer Team.  I have been playing soccer since I was 5 years old.  I represented the Light Blue team in Belmont Second Soccer and moved through the town and travel programs in Belmont, up to starting games as a freshman on the Varsity team.  I currently play club soccer for New England Surf on the State Navy 2007 Boys team and have competed in many regional and national competitions.  I’m excited to share my passion for soccer with the community!",
    },
    {
      id: 7,
      name: "Esther Ji",
      sport: "Volleyball",
      image: "esther.jpg",
      acc: [
        "Class of 2026 (11th Grade)",
        "Position: Setter/DS ",
        "SMASH 13s THUNDER (2021-2022)",
        "Gators 14 Black (2022-2023)",
        "Gators 15 Black (2023-2024)",
      ],
      desc: "Hi, my name is Esther Ji and I've been playing volleyball for 3 years. I was on varsity as a freshman and throughout my volleyball life, I've had the privilege of working with many experienced coaches, including a former top libero in New England. My love for the sport led me and a couple others to found the Belmont Boys Volleyball program. I'm excited to share my passion for volleyball with others! ",
    },
    {
      id: 8,
      name: "Sophia Qin",
      sport: "Volleyball",
      image: "sq.jpeg",
      acc: [
        "Class of 2026 (11th Grade)",
        "Position: Setter ",
        "Varsity Volleyball (2022 - Present)",
        "Top 3 in Service Aces (Middlesex League)",
        "Top 3 in Assists (Division 1)",
      ],
      desc: "Hello, I'm Sophia Qin! I've been playing volleyball for around 3 years, I'm the starting setter on the Girl's Volleyball Team. This season, through winning Middlesex League (first time in Belmont history!) I've learnt a lot about the sport and gained experience on how to best improve as a player. I'm looking forward to coaching younger players as Volleyball is a sport I really love and I hope for them to do so as well!",
    },
    {
      id: 9,
      name: "Lillian Shen",
      sport: "Volleyball",
      image: "ls.JPG",
      acc: [
        "Class of 2026 (11th Grade)",
        "Position: Outside ",
        "Boston UVC 14 Gray (2021-2022)",
        "MGA 15 National North (2022-2023)",
        "Boston UVC 16 Northeast (2023-2024)",
      ],
      desc: "Hi! My name is Lillian Shen and I've been playing volleyball for four years. I've been to national-level tournaments and ranked in several regional-level tournaments. As a shorter player, I've had to fine tune my techniques and significantly improve my skill to compete at higher levels. As a coach, I hope to pass down my experience and technique to help players improve quickly. I look forward to working with young athletes!",
    },
    {
      id: 10,
      name: "Ian Choi",
      sport: "Volleyball",
      image: "ianchoi.JPG",
      acc: [
        "Class of 2026 (11th Grade)",
        "Position: Setter ",
        "Floor Captain of Belmont Boys Varsity Volleyball",
        "Smash Volleyball Club's 1's team. Ranked 1st in New England",
        "President of Belmont Boys Volleyball Club",
      ],
      desc: "Hey, my name is Ian Choi. I first started playing volleyball going into high school, and now it's a sport I am extremely passionate about. I hope to help pass down that passion for the game. I have traveled down to Orlando for AAU Nationals in July and have competed in California and Chicago. I helped push for a Belmont Boys Volleyball Team and I'm currently in the starting lineup for the boys team. I've been coached by some of the best collegiate coaches in New England and hope to help your athlete both improve and create a bond with the sport. I look forward to coaching!",
    },
    {
      id: 11,
      name: "Julian Wong",
      sport: "Tennis",
      image: "jw.JPG",
      acc: [
        "Class of 2025 (12th Grade)",
        "Captain of Belmont Boys Varsity Tennis",
        "Member of New England Tennis Academy",
        "Ranked top 20 in New England for class of 25",
        "Most outstanding player award 22-23 season",
        "1st singles",
      ],
      desc: "Hello, my name is Julian Wong. I am currently the captain of the Belmont Boys Varsity Tennis Team. I currently play first singles on the team and train at the New England Tennis Academy. I also compete in many tournaments outside of school. I've coached at the Kings Grant Tennis Club as well as private lessons on the courts of Belmont. I hope to coach avid players who wish to improve their skills and reach the next level. ",
    },
    {
      id: 12,
      name: "Mingfei Ye",
      sport: "Tennis",
      image: "my.png",
      acc: [
        "Class of 2026 (11th Grade)",
        "BHS Boys Varsity Tennis",
        "NETA Gold Program",
      ],
      desc: "Hi, I'm Mingfei Ye! I have been playing tennis for over 8 years and throughout these years, I have trained in many different clubs. I currently train at the New England Tennis Academy, where I develop the singles' skills to compete in USTA and UTR tournaments. For the past 2 years, I've had a lot of fun and have made a lot of progress playing for the Belmont Boys Varsity Tennis Team. As a coach, I strive to help players to both identify and harness their strengths so that they reach their ambitions. ",
    },
    {
      id: 13,
      name: "Katia Polina ",
      sport: "Tennis",
      image:
        "https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg",
      acc: ["Class of 2027 (10th Grade)", "BHS Girls Tennis Team "],
      desc: "Hello my name is Katia Polina! I have been playing tennis since middle school, and was on the BHS Girls Tennis Team. I love this sport and I love training during the off season through different coaches and clinics. I have tutored younger kids before in many fields and I love it! As a coach I'm excited to help younger kids learn about this sport and help them get stronger and more advanced! ",
    },
    {
      id: 14,
      name: "Amy Chen",
      sport: "Tennis",
      image:
        "https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg",
      acc: [
        "Class of 2025 (12th Grade)",
        "Captain of BHS Girls Tennis Team (2025 season)",
        "Varsity First Doubles",
        "Middlesex All Star Team (2024 season)",
      ],
      desc: "Hello, my name is Amy Chen and I have been playing tennis ever since the start of middle school. Currently, I play first doubles for the BHS Girls Varsity Tennis Team, though I have experience in all varsity positions, including both singles and doubles. During the off season, I enjoy training with various clubs and coaches to improve my skills. Throughout high school, I have worked with younger students in a variety of subjects, and I am excited to help players enhance their technique while also having fun with the sport! ",
    },
    {
      id: 15,
      name: "Armela Mahadi",
      sport: "Tennis",
      image:
        "https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg",
      acc: [
        "Class of 2026 (11th Grade)",
        "BHS Varsity Girls Tennis",
        "Varsity 1st/2nd Singles",
        "Middlesex All Star Team (2024 season)",
      ],
      desc: "Hi, I’m Armela Mahadi and I’ve been playing tennis for 8 years. During the off season, I like to continue to improve my skills through attending club practices. I enjoy working with kids and have prior experience in coaching tennis. In my first summer here in Belmont, I’m looking for opportunities to give back to the community and am excited for this opportunity!",
    },
    {
      id: 16,
      name: "Holly Kong",
      sport: "Tennis",
      image:
        "https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg",
      acc: [
        "Class of 2025 (12th Grade)",
        "Captain of BHS Girls Tennis",
        "Varsity third Singles",
      ],
      desc: "My name is Holly Kong and I'm a senior at BHS. I've been playing tennis for over 7 years and this spring will be my third year playing varsity singles on the Belmont girl's tennis team. I've co-taught group lessons for young players who have just started picking up the sport in the past, and now I am focusing on one-on-one support! I look forward to help create foundational skills and solidify techniques for our students.",
    },
  ];

  const [personInView, setPersonInView] = useState(0);
  const imageListRef = React.useRef(null);
  // const [filter, setFilter] = useState("All");

  // const filteredPeople = people.filter((person) => {
  //   if (filter === "All") {
  //     return true;
  //   }
  //   return person.sport === filter;
  // });

  const [filteredPeople, setFilteredPeople] = useState(people);

  function handleFilter(filter) {
    if (filter === "All") {
      setFilteredPeople(
        people.map((person, index) => ({ ...person, id: index }))
      );
    } else {
      const filtered = people
        .filter((person) => person.sport === filter)
        .map((person, index) => ({ ...person, id: index }));
      setFilteredPeople(filtered);
    }
    setPersonInView(0);
  }
  console.log(filteredPeople);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPersonInView(parseInt(entry.target.id));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (imageListRef.current) {
      const elementsToObserve = document.querySelectorAll(".idImage");
      elementsToObserve.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      if (imageListRef.current) {
        const elementsToObserve = document.querySelectorAll(".idImage");
        elementsToObserve.forEach((element) => {
          observer.unobserve(element);
        });
      }
      observer.disconnect();
    };
  }, [filteredPeople]);

  const variantAnimation = {
    initial: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      y: -20,
      opacity: 0,
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      opacity: 1,
    },
    exit: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      y: 20,
      opacity: 0,
    },
  };

  return (
    <div className="w-full min-h-[calc(100vh-50px)] px-[5%] flex flex-col">
      <main className="h-[50vh] w-full bg-blue-300 rounded-md flex sticky top-0 z-[-1]">
        <img
          src="contactbanner.avif"
          alt="Sessions"
          className="w-full h-full object-cover object-[50%_20%] absolute rounded-md"
        />
        <div
          className="text-7xl font-medium  z-[1] flex justify-center items-center w-full 
        text-white
        "
        >
          <p className=" ">Coaches</p>
        </div>
      </main>

      <div className=" w-full bg-white pt-10">
        <h1 className="text-3xl font-medium text-black text-center">
          General Contact
        </h1>
        <Footer />
      </div>
      <div className=" w-full bg-white pt-10 flex gap-4 flex-col sm:flex-row justify-center">
        <h3>Filter: </h3>
        <form
          action=""
          className="flex  flex-col sm:flex-row gap-3 items-center"
        >
          <span className="flex gap-2 items-center">
            <input
              type="radio"
              name="filter"
              id="all"
              value="All"
              checked={filteredPeople.length === people.length}
              onChange={(e) => handleFilter(e.target.value)}
            />
            <label htmlFor="all">All</label>
          </span>
          <span className="flex gap-2 items-center">
            <input
              type="radio"
              name="filter"
              id="soccer"
              value="Soccer"
              checked={
                filteredPeople.length > 0 &&
                filteredPeople.every((person) => person.sport === "Soccer")
              }
              onChange={(e) => handleFilter(e.target.value)}
            />
            <label htmlFor="soccer">Soccer</label>
          </span>
          <span className="flex gap-2 items-center">
            <input
              type="radio"
              name="filter"
              id="tennis"
              value="Tennis"
              checked={
                filteredPeople.length > 0 &&
                filteredPeople.every((person) => person.sport === "Tennis")
              }
              onChange={(e) => handleFilter(e.target.value)}
            />
            <label htmlFor="tennis">Tennis</label>
          </span>
          <span className="flex gap-2 items-center">
            <input
              type="radio"
              name="filter"
              id="volleyball"
              value="Volleyball"
              checked={
                filteredPeople.length > 0 &&
                filteredPeople.every((person) => person.sport === "Volleyball")
              }
              onChange={(e) => handleFilter(e.target.value)}
            />
            <label htmlFor="volleyball">Volleyball</label>
          </span>
          <span className="flex gap-2 items-center">
            <input
              type="radio"
              name="filter"
              id="basketball"
              value="Basketball"
              checked={
                filteredPeople.length > 0 &&
                filteredPeople.every((person) => person.sport === "Basketball")
              }
              onChange={(e) => handleFilter(e.target.value)}
            />
            <label htmlFor="basketball">Basketball</label>
          </span>
        </form>
      </div>
      <div className="min-h-[200vh] w-full bg-white flex gap-6">
        <div
          className=" h-screen w-1/2 sticky top-0 bg-white hidden md:flex flex-col justify-center items-start
          text-sm
        "
        >
          <AnimatePresence mode="wait">
            <motion.div
              variants={variantAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              key={personInView}
              className="flex flex-col gap-4 w-5/6"
            >
              <h1 className="text-3xl font-medium">
                {filteredPeople[parseInt(personInView)].name}
              </h1>
              <h2 className="text-xl font-medium">
                {filteredPeople[parseInt(personInView)].sport}
              </h2>
              <ul className="list-disc pl-5">
                {filteredPeople[parseInt(personInView)].acc.map((acc) => (
                  <li key={acc} id={acc} className="!important">
                    {acc}
                  </li>
                ))}
              </ul>
              <p>{filteredPeople[parseInt(personInView)].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="min-h-screen w-full md:w-1/2 flex flex-col gap-20 md:gap-0"
          ref={imageListRef}
        >
          <div className="block md:hidden"></div>
          {filteredPeople.map((person) => (
            <>
              <ImageList
                key={person.id}
                source={person.image}
                alt={person.name}
                id={person.id}
              />
              <div
                key={person.id}
                className="flex flex-col  md:hidden w-full items-center"
              >
                <div className="flex flex-col gap-4 w-3/4 ">
                  <h1 className="text-3xl font-medium">{person.name}</h1>
                  <h2 className="text-xl font-medium">{person.sport}</h2>
                  <ul className="list-disc pl-5">
                    {person.acc.map((acc) => (
                      <li key={acc} id={acc} className="!important">
                        {acc}
                      </li>
                    ))}
                  </ul>
                  <p>{person.desc}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
