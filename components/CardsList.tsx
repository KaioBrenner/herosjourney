"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { stringify } from "querystring";
import Herocard from "./Herocard";

interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearence: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    eyecolor: string;
    hairColor: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

const CardsList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://homologacao3.azapfy.com.br/api/ps/metahumans"
      );

      setData(response.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  const [selectedHeroes, setSelectedHeroes] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedHeroes === 2) {
      alert("KKKKKKKK")
      location.reload()
    }
  }, [selectedHeroes]);

  return (
    <div>
      <div className="flex flex-wrap gap-20 p-8 pr-0 mr-96">
        {data.map((hero: any) => {
          const { powerstats } = hero;

          let totalPower = 0

          for (const attribute in powerstats) {
            if (powerstats.hasOwnProperty(attribute)) {
              totalPower += powerstats[attribute];
            }
          }

          let cardColor = "";

          if (totalPower < 250) {
            cardColor = "zinc";
          } else if (totalPower < 400) {
            cardColor = "green";
          } else if (totalPower < 500) {
            cardColor = "purple";
          } else if (totalPower < 600) {
            cardColor = "yellow";
          } else {
            cardColor = "red";
          }

          return (
            <Herocard
              hero={hero}
              cardColor={cardColor}
              selectedHeroes={selectedHeroes}
              setSelectedHeroes={setSelectedHeroes}
            ></Herocard>
          );
        })}
      </div>
    </div>
  );
};

export default CardsList;
