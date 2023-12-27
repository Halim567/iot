import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('https://iot-halim567.vercel.app/api/iot');
    const data = await res.json();

    return { data_tabel: data.Data };
};