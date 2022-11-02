import Image from "next/image";
import ImgSumicity from "../public/ImgSumicity.png";
import ImgWebby from "../public/ImgWebby.png";
import ImgBlink from "../public/ImgBlink.png";
import ImgGiganet from "../public/ImgGiganet.png";

export const logosProvedores = [
  {
    id: 1,
    imagesOne: `<Image src={ImgSumicity} alt="Logo Provedor parceiro"/>`,
    ImagesTwo:""
  },
  {
    id: 2,
    images: `<Image src={ImgGiganet} alt="Logo Provedor parceiro"/>`,
  },
  {
    id: 3,
    images: `<Image src={ImgBlink} alt="Logo Provedor parceiro"/>`,
  },
  {
    id: 4,
    images: `<Image src={ImgBImgWebbylink} alt="Logo Provedor parceiro"/>`,
  },
];
