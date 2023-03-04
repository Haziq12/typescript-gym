import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageText.png";
import SponsorRedBulle from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/HomePageText.png";
import SponsorFortune from "@/assets/HomePageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (vale: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
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
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            ><p>Learn More</p></AnchorLink>
          </div>
        </div>
        {/* Image div */}
        <div>
        <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
    </section>
  );
};

export default Home;
