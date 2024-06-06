export type CustomerReview = {
    customer: string,
    review: string,
    score: number
}

export type WeeklySalesReport = {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export type AmazonProduct = {
    id: number,
    title: string,
    image: string,
    subtitle: string,
    brand: string,
    reviews: CustomerReview[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: WeeklySalesReport[]
};