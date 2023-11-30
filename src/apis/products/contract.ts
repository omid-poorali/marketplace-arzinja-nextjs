import * as Models from '@/models';

export type GetProductsRequest = {
    lastCursor?: string;
    category: string;
};

export type GetProductsResponse = {
    data: Models.Product[];
    metaData: {
        lastCursor: number | null;
        hasNextPage: boolean;
    }
};