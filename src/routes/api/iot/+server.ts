import type { RequestHandler } from '../$types';
import { db } from '$lib/server/database';
import { polusi, type Database } from '$lib/schema/db';

export const GET: RequestHandler = async () => {
    try {    
        const data = await db.select().from(polusi) as Database[];

        return new Response(JSON.stringify({ Data: data }), { status: 200 });
    } catch (error) {
        console.error(error);

        return new Response(JSON.stringify({ Error: error }), { status: 500 });
    }
};

// export const POST: RequestHandler = async ({ request }) => {
//     const body = await request.json() as Database;

//     if (!body || !body.co || typeof body.co !== 'string') {
//         return new Response(JSON.stringify({ Error: 'Invalid body' }), { status: 400 });
//     }

//     try {
//         const [result] = await mysql.execute('INSERT INTO `uas` (`co`) VALUES (?)', [body.co]) as ResultSetHeader[];

//         if (result.affectedRows === 0) {
//             return new Response(JSON.stringify({ Error: 'Failed to insert' }), { status: 500 });
//         }

//         return new Response(JSON.stringify({ Pesan: "Berhasil memasukan data" }), { status: 200 });
//     } catch(error) {
//         console.error(error);

//         return new Response(JSON.stringify({ Error: error }), { status: 500 });
//     }
// }