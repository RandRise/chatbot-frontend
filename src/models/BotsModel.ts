export interface BotsModel {
    id: number;
    domain: string;
    status: number;
    url: string;
    subscriptions: SubscriptionModel[];
    metadata: BotMetadata;
}

export interface SubscriptionModel {
    id: number;
    msgcount: number;
    expirydate: string;
}

export interface BotMetadata {
    title: string | null;
    description: string | null;
    image: string | null;
    url: string | null;
}
