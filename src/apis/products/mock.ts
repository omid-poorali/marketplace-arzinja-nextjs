import {
  GetProductsRequest,
  GetProductsResponse,
} from './contract';

export const get = async (_payload: GetProductsRequest) => new Promise<GetProductsResponse>((resolve, reject) => {
  resolve({
    data: [
      {
        id: "uuid",
        title: "title",
        price: 0,
        image: {
          src: "",
          alt: ""
        }
      }
    ],
    metaData: {
      lastCursor: 0,
      hasNextPage: false
    }
  });
});