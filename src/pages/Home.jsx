import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-50px)] px-[5%] flex flex-col">
      <main className="h-full sm:h-[50vh] w-full bg-blue-300 rounded-md flex sticky top-0 z-[-1]">
        {/* <div className="w-1/2 flex justify-center items-center">
          <img src="logo.png" alt="logo" className=" h-full object-cover" />
        </div>
        <div className="w-1/2 flex h-full justify-center items-center">
          <h1 className="text-5xl font-medium text-white">
            Belmont Athletic Development Association
          </h1>
        </div> */}
        <img
          src="banner.png"
          alt="banner image"
          className="w-full h-[200px] sm:h-full object-cover rounded-md"
        />
      </main>
      <div className="w-full flex  flex-col gap-6 h-auto bg-white rounded-sm">
        <div></div>
        <article className="min-h-[50vh] w-full flex flex-col-reverse md:flex-row gap-6 ">
          <aside
            className="w-full md:w-1/2 
          flex justify-center items-center
        rounded-md"
          >
            <img
              src="edward.jpg"
              alt="Edward Lech photo"
              className="w-full h-[500px] object-cover rounded-md object-[50%_30%]"
            />
          </aside>
          <div className="w-full md:w-1/2 flex flex-col gap-6 bg-red-300 rounded-md text-white p-[10%] sm:p-[5%] min-h-full">
            <h1 className="text-4xl font-bold">Purpose</h1>
            <p className="text-lg">
              Our organization strives to help young athletes improve their
              skills and take their athletic careers to the next level. Our
              program provides private sessions with experienced coaches who are
              all juniors and seniors on JV and Varsity teams at the high
              school. We offer a wide range of sports to choose from including
              basketball, soccer, volleyball, and tennis. Our private training
              program empowers athletes to reach their full potential and set
              them up for success at the high school level.
            </p>
            <a
              href="https://belmontvoice.org/belmont-high-athletes-launch-program-to-mentor-younger-students/"
              target="_blank"
              className="w-24"
            >
              <button className="cursor-pointer underline">Read More</button>
            </a>
          </div>
        </article>
        <article className="min-h-[50vh] w-full flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-6 bg-purple-300 rounded-md text-white p-[10%] sm:p-[5%] min-h-full">
            <h1 className="text-4xl font-bold">Process</h1>
            <p className="text-lg">
              1. Find a coach from the Contact Us section who you think pairs
              well with your child. 2. Fill out the Google Form to choose who
              you want to pair up with. Choose the sport you want to participate
              in and then choose the coach. 3. After that, we will email you
              about the coach and we will start arranging practice times and
              payment with coaches. 4. Please know that we do not coach during
              the winter season. We will continue coaching starting March 2025.
            </p>
          </div>
          <aside className="w-full md:w-1/2  rounded-md flex justify-center items-center">
            <img
              src="danielchang.png"
              alt="DC Kicking soccer ball"
              className="w-full h-[500px] object-cover object-top rounded-md"
            />
          </aside>
        </article>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
