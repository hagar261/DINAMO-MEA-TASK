export enum UserType {
    Consumer = "consumer",
    Vendor = "vendor",
    Rider = "rider",
    Admin = "admin",
    Teck_Support = "tech_support",
    Sales = "sales"
}

export enum StrategyName {
    JwtUserStrategy = 'JwtUserStrategy',
}


export enum orderStatus {
    Pending = "pending",
    Confirmed = "confirmed",
    Shipped = "shipped",
    Delivered = "delivered",
    cancelled = "cancelled"
}

export enum paymentMethod {
    Credit_Card = "credit_card",
    Cash_On_Delivery = "cash_on_delivery",
    Paypal = "paypal"
}