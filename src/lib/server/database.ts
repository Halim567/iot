import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { PRIVATE_DATABASE_URL } from '$env/static/private';

const connectionString = PRIVATE_DATABASE_URL;
const client = postgres(connectionString)
export const db = drizzle(client);