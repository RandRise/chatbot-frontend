export interface CreateOrderModel {
    packageId: number
    domain: string
}

export interface OrderInfoModel {
    id: number
    package_id: number
    unitprice: number
    createdate: string
    package_name: string
    msgcount: string
    numbofmonths: string
}