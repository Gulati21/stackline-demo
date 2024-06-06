//This file is written out as if it were pulling from an actual API, for demo purposes. It won't do anything at this time.
const baseUrl = 'https://stackline.com/api/'

export const getData = (): string => {
    return baseUrl + '/data/all';
}

export const getItemData = (itemId: number): string => {
    return baseUrl + '/data/' + itemId;
}