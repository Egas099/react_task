export interface Replying {
    user: string;
    comment: string;
    replies?: Replying[];
}