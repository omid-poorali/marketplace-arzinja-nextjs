import {
  GetProductsRequest,
  GetProductsResponse,
} from './contract';

const products = [
  {
    id: "uuid1",
    category: "uuid1",
    title: "گوشی موبایل سامسونگ مدل Galaxy A34 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت - ویتنام",
    price: 15450000,
    image: {
      src: "/images/products/a54.jpg",
      alt: ""
    }
  },
  {
    id: "uuid2",
    category: "uuid2",
    title: "دمبل رادیس فیت مدل RFP1 وزن 1 کیلوگرم بسته 2 عددی",
    price: 79000,
    image: {
      src: "/images/products/dambel.jpg",
      alt: ""
    }
  },
];

export const get = async (payload: GetProductsRequest) => new Promise<GetProductsResponse>((resolve, reject) => {
  const targetData = products.filter(product => product.category === payload.category)
  resolve({
    data: targetData,
    metaData: {
      lastCursor: 0,
      hasNextPage: false
    }
  });
});