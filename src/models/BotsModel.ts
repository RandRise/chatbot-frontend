export interface BotsModel {
    id: number,
    domain: string
    status: number
    url: string
    subscriptions: SubscriptionModel[]
}

export interface SubscriptionModel {
    id: number
    msgcount: number
    expirydate: string
}
