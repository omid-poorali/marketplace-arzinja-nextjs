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
          src: "/images/mobile.png",
          alt: "mobile"
        }
      },
      {
        id: "uuid2",
        title: "ورزشی",
        image: {
          src: "/images/sport.png",
          alt: "sport"
        }
      }
    ]
  });
});