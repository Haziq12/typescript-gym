import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import ActionButton from "@/shared/ActionButton";
import HomePageText from '@assets/HomePageText.png' 
import HomePageGraphic from '@assets/HomePageText.png' 
import SponsorRedBulle from '@assets/HomePageText.png' 
import SponsorForbes from '@assets/HomePageText.png' 
import SponsorFortune from '@assets/HomePageText.png' 


type Props = {
  setSelectedPage: (vale: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return <div>Home</div>;
};

export default Home;
