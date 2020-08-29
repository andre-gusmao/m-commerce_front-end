export interface IOrder {
    order_name?: string;
    id_company?: number;
    id_customer?: number;
    order_item_quantity?: number;
    order_total_price?: number;
    order_status?: number;
    order_payment_status?: number;
    order_payment_method?: string;
    id_payment_method?: number;
}