import type { Database } from "$lib/schema/db";
import { writable } from "svelte/store";

export const data_db = writable<Database>();