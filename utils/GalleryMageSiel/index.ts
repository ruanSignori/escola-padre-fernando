import { GalleryMageSielTypes } from "./GalleryMageSielTypes";

import FirstImageGalery from "../../public/images/magesiel/galery-1.webp";
import SecundImageGalery from "../../public/images/magesiel/galery-2.webp";
import ThirdImageGalery from "../../public/images/magesiel/galery-3.webp";
import FourthImageGalery from "../../public/images/magesiel/galery-4.webp";
import FifthImageGalery from "../../public/images/magesiel/galery-5.webp";
import SixthImageGalery from "../../public/images/magesiel/galery-6.webp";
import SeventhImageGalery from "../../public/images/magesiel/galery-7.webp";

export const galleryMageSiel: GalleryMageSielTypes[] = [
  {
    id: crypto.randomUUID(),
    src: FirstImageGalery,
    alt: "Inimigo do jogo MageSiel rascunho",
  },
  {
    id: crypto.randomUUID(),
    src: SecundImageGalery,
    alt: "Inimigo do jogo MageSiel arte pronta",
  },
  {
    id: crypto.randomUUID(),
    src: ThirdImageGalery,
    alt: "Inimigo do jogo MageSiel desenho",
  },
  {
    id: crypto.randomUUID(),
    src: FourthImageGalery,
    alt: "Inimigo do jogo MageSiel rascunho",
  },
  {
    id: crypto.randomUUID(),
    src: FifthImageGalery,
    alt: "Inimigo do jogo MageSiel arte pronta",
  },
  {
    id: crypto.randomUUID(),
    src: SixthImageGalery,
    alt: "Inimigo do jogo MageSiel rascunho",
  },

  {
    id: crypto.randomUUID(),
    src: SeventhImageGalery,
    alt: "Inimigo do jogo MageSiel arte pronta",
  },
];
