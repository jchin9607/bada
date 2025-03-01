import React from "react";
import ListBox from "../components/ListBox";

const Sessions = () => {
  return (
    <div className="w-full min-h-[calc(100vh-50px)] px-[5%] flex flex-col">
      <main className="h-[50vh] w-full bg-blue-300 rounded-md flex sticky top-0 z-[-1]">
        <img
          src="skyline.jpg"
          alt="Sessions"
          className="w-full h-full object-cover object-[50%_20%] absolute rounded-md"
        />
        <div className="text-7xl font-medium text-white z-[1] flex justify-center items-center w-full ">
          <p className=" ">Sessions</p>
        </div>
      </main>
      <div className="w-full flex flex-col gap-6 h-auto bg-white">
        <div></div>
        <div className="min-h-[300px] w-full flex flex-col gap-3 justify-start p-[10%] sm:p-[5%] bg-red-300 rounded-md text-white">
          <p>
            Note: These sessions will be held in public areas unless further
            stated.
          </p>
          <p>
            Reminder: Tennis Lessons will have different prices due to court
            rentals. These public areas include:
          </p>
          <p>These public areas include:</p>
          <ul className="list-disc flex flex-col gap-2 pl-5">
            <li>
              <p>
                <span>Chenery</span>
              </p>
            </li>
            <li>
              <p>
                <span>Winn Brook</span>
              </p>
            </li>
            <li>
              <p>
                <span>Grove Street Park</span>
              </p>
            </li>
            <li>
              <p>
                <span>Pequosette Park</span>
              </p>
            </li>
            <li>
              <p>
                <span>Harris Field</span>
              </p>
            </li>
            <li>
              <p>
                <span>Town Field</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-[50vh] w-full text-white bg-white z-[1] flex flex-col gap-6">
        <div></div>
        <div className="min-h-[500px] w-full rounded-md flex flex-col md:flex-row gap-6">
          <ListBox
            name="One-on-One Sessions"
            price1="30/hour"
            price2="50/2 hours"
            link="https://docs.google.com/forms/d/1PWQ2X7GiNAxvaB8KFtfEc9phKcpLgv2vMNr2-Xg8nX4/edit"
            linkText="1 Person Sessions Form"
            image={
              "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <ListBox
            name={"Two-Person Sessions"}
            price1={"25/hour per person"}
            price2={"40/2 hours per person"}
            link={
              "https://docs.google.com/forms/d/1TKHCUnjne4-4q1K_VBMDz6DiBL3RLkyf6lfv_O8k1Ss/edit"
            }
            linkText={"2 Person Sessions Form"}
            image={
              "https://plus.unsplash.com/premium_photo-1661963855258-218cbf2dadaa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="min-h-[500px] w-full rounded-md flex flex-col md:flex-row gap-6 ">
          <ListBox
            name={"Three-Person Sessions"}
            price1={"23/hour per person"}
            price2={"37/2 hours per person"}
            link={
              "https://docs.google.com/forms/d/1BExLsDykiQXb3Hj5GJnw0Y7RFTMdp5bEw6yXBaO0_fs/edit"
            }
            linkText={"3 Person Sessions Form"}
            image={
              "https://images.unsplash.com/photo-1528292531647-de2434b8e1ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <ListBox
            name={"Group Sessions (4-6 people)"}
            price1={"$$ prices vary on group size"}
            price2={""}
            link={
              "https://docs.google.com/forms/d/17TPQsNERISwUvbZ7aQ8bB2j7fO-T8ZmJxvtWws5_6R0/edit"
            }
            linkText={"Group Sessions Form"}
            image={
              "https://plus.unsplash.com/premium_photo-1708696237348-74a10a04a41a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sessions;
