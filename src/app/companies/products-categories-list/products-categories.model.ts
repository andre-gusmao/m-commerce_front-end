export interface ProductsCategories {
    success: boolean;
    result: [{
        id_product_category?: number;
        id_company?: number;
        product_category_name?: string;
    }]
}