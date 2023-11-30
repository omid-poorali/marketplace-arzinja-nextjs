import {
  GetCategoriesRequest,
  GetCategoriesResponse,
} from './contract';

export const get = async (_payload: GetCategoriesRequest) => new Promise<GetCategoriesResponse>((resolve) => {
  resolve({
    data: [
      {
        id: "uuid1",
        title: "موبایل",
        image: {
          src: "/images/categories/mobile.png",
          alt: "mobile"
        }
      },
      {
        id: "uuid2",
        title: "ورزشی",
        image: {
          src: "/images/categories/sport.png",
          alt: "sport"
        }
      }
    ]
  });
});