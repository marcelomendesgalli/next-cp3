import Image from "next/image";
import CardFilm from "./components/CardFilm";

export default function Home() {
  return(
    <>
      <main className="flex flex-auto w-full items-center justify-center">

        <div className="flex flex-row flex-wrap align justify-center align items-center">
          <CardFilm
            title="Irish Wish"
            image="img/3pedrasnorim.png"
            link="https://youtu.be/_gKXowSyfjM?si=cr4ermmTLOssMi0t"
          />
          <CardFilm
            title="Spirited Away"
            image="img/4pedradorim.png"
            link="https://youtu.be/ByXuk9QqQkk?si=7V4EagTlAyedLnUW"
          />

          <CardFilm
            title="Oppenheimer"
            image="img/LITERALMENTEIMPORTANTERPG24HRS.png"
            link="https://www.youtube.com/watch?v=bK6ldnjE3Y0"
          />
          <CardFilm
            title="Madame Web"
            image="img/madamefodase.png"
            link="https://youtu.be/s_76M4c4LTo?si=sjFUKSfpx5PGe2Mw"
          />
          <CardFilm
            title="Damsel"
            image="img/roubarammeucelular.png"
            link="https://youtu.be/iM150ZWovZM?si=6NZ_f04uErix7diC"
          />

          <CardFilm
            title="Dune: Part Two"
            image="img/roubaramminhavo.png"
            link="https://youtu.be/Way9Dexny3w?si=FVpjy401q4gGbIs-"
          />


        </div>

      </main>
      
    </>
  );
}