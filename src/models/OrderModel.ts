export interface CreateOrderModel {
    packageId: number
    domain: string
}

export interface OrderInfoModel {
    id: string
    user_id: string
    package_id: string
    unitprice: string
    createdate: string
    package_name: string
    bot_id: string
    bot_status: number
    subscription_id: string
    subscription_msgcount: string
    subscription_expirydate: string
}