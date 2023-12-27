import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export interface Database {
    id: number;
    co: string;
    created_at: Date;
}

export const polusi = pgTable('polusi', {
    id: serial('id').primaryKey(),
    co: text('kandungan_udara'),
    created_at: timestamp('created_at'),
});