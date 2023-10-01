<script lang="ts">
	import { calculateAscension } from './calculator';

	const result = calculateAscension({ from: 1, to: 80 }, { from: 1, to: 6 });
	console.log(result);
</script>
