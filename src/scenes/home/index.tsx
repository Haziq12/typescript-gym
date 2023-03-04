import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageText.png";
import SponsorRedBulle from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/HomePageText.png";
import SponsorFortune from "@/assets/HomePageText.png";

type Props = {
  setSelectedPage: (vale: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* Image & Main header */}
      <div>
        {/* Main header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
          </div>
        </div>
        {/* Image div */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
