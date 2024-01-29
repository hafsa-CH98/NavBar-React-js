import React, { useState } from "react";
import profil from "./assest/profil.png";

const Card = ({name, type, email, children}) => {
  return (
    <div className="bg-zinc-400	rounded-md p-[20px]	 ">
      <p>{children}</p>
      <div className="flex items-center gap-[10px]">
        <img src={profil} alt="profil" className="rounded-full	w-[70px] " />
        <div>
          <h1 className="text-xl">{name} </h1>
          <p className="text-md">{type || "unkonnu"}</p>
        </div>
      </div>
      <div className="mt-[30px] ">
        <p>{email} </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime
          nostrum at voluptate. Doloremque facere eaque suscipit, iure tenetur
          temporibus quidem voluptatibus ratione molestiae, dolorem nam harum,
          soluta quas assumenda?
        </p>
      </div>
    </div>
  );
};

const Cards = () => {
  const students = [
    { name: "Omar", email: "omar@test.com", type: "MERN Student" },
    { name: "Rashid", email: "rashid@test.com", type: "Fullstack Student" },
    { name: "Hafsa", email: "hafsa@test.com", type: "Python Student" },
    { name: "Meriem", email: "meriem@test.com", type: "Fullstack" },
    { name: "yassine", email: "yassine@test.com", type: "Fullstack" },
    { name: "saad", email: "saad@test.com" },
  ];



  const [name, testName] = useState("yassine")
  const handleClick = () => {
    testName("hafsa")
  }

  





  return (
    <section className=" grid grid-cols-3 gap-[20px] m-[50px]  ">
      <Card name={name} type="fullstack" >hello world</Card>
      <Card name="saad" type="fullstack" >bonsoir</Card>
      <Card name="meriem" type="fullstack" >bonjour</Card>
      <Card name="omar" type="fullstack" >bonjour</Card>
      <button className="bg-red-500 w-[70px] h-[70px] " onClick={handleClick} >Changer name</button>
    </section>
  );
};

export default Cards;
