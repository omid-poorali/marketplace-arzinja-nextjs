import * as Models from '@/models';

export type GetCategoriesRequest = void;

export type GetCategoriesResponse = {
    data: Models.Category[];
};