import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('http://localhost:5173/api/iot');
    const data = (await res.json());
    return { data_tabel: data.Data };
};