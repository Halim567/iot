<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

    console.log(data.data_tabel);
</script>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>CO</th>
            <th>Created At</th>
        </tr>
    </thead>
    <tbody>
        {#each data.data_tabel as item}
            <tr>
                <td>{item.id}</td>
                <td>{item.co}</td>
                <td>{item.created_at}</td>
            </tr>
        {/each}
    </tbody>
  </table>