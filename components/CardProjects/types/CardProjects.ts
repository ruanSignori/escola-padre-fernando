import { StaticImageData } from "next/image";

export type CardProjects = {
  name: string;
  banner: string;
  description: string;
  img: StaticImageData;
  linkToAcess: string;
};
