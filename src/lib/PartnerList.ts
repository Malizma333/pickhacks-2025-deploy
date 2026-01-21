import { ISponsor } from "@/interfaces/ISponsor";
import { mosystems, mlh, standoutstickers, stuco } from "./Images";

export const PartnerList: ISponsor[] = [
  //placeholder links
  {
    logo: mlh.src,
    link: "https://mlh.io/",
  },
  {
    logo: mosystems.src,
    link: "https://www.umsystem.edu/",
  },
  {
    logo: stuco.src,
    link: "https://stuco.mst.edu/",
  },
  {
    logo: standoutstickers.src,
    link: "https://www.standoutstickers.com/?utm_campaign=events-league-organizers-fall2023&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro",
  },
  // {
  //     logo: mosystems.src,
  //     link: 'https://ece.mst.edu/'
  // }
];
