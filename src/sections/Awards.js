import React from "react";
import NavArrow from "../components/NavArrow";
import codekathon from "../img/codekathon.jpg";
import hackathailand from "../img/hackathailand.jpg";
function Awards() {
  const Award_Card = ({ title, date, desc, web, img, sty }) => {
    return (
      <div className="flex flex-col items-center sm:justify-between justify-center gap-10 rounded-[30px]  shadow-apple sm:flex-row overflow-hidden">
        <div className="px-10 py-8">
          <h5 className="text-grayed">{date}</h5>
          <h4 className="text-xl font-medium">{title}</h4>
          <p className="mb-2 text-grayed">{desc}</p>
          <a
            href={web}
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium hover:underline hover:cursor-pointer"
          >
            Read More<NavArrow />
          </a>
        </div>
        <div className="grid sm:aspect-square sm:rounded-[30px] sm:mx-10 sm:my-8 sm:h-[160px] place-items-center bg-gray-200  shadow-apple overflow-hidden">
          <img src={img} className={`scale-100 object-cover ${sty}`} alt="" />{" "}
          {/*hover:scale-105 transition-all duration-150 ease-out */}
        </div>
      </div>
    );
  };
  return (
    <>
      <h3 className="my-5 text-2xl font-medium">My Recent Awards</h3>
      {/* Activities Cards Container */}
      <div className="flex max-w-full flex-col gap-5">
        {/* Cards */}
        <Award_Card
          date="Aug · 2023"
          title="Winner award HACKaThailand 2023 (Digital Youth Network)"
          desc="by depa (Digital Economy Promotion Agency), MDES Thailand"
          web="https://www.chula.ac.th/en/news/136587/"
          img={hackathailand}
          sty="sm:h-full"
        />
        <Award_Card
          date="Aug · 2022"
          title="Winner (Best of the Best) Award CODEKATHON 2022"
          desc="by depa, Mahasarakham University · Aug 2020"
          web="https://www.codekathon.com/final"
          img={codekathon}
          sty="sm:h-full"
        />
      </div>
    </>
  );
}

export default Awards;
