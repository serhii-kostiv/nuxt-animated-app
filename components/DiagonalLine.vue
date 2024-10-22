<template>
	<div
		ref="diagonalLine"
		class="fixed invisible origin-bottom-left pointer-events-none left-5 -bottom-10"
		:class="{ '!visible': isDiagonalLineVisible }"
	>
		<MovingLine class="!w-full scale-[-1]" :text="text" />
		<MovingLine class="!w-full" :text="text" />
	</div>
</template>

<script lang="ts" setup>
import { setupDiagonalLine } from '~/lib/utils';

defineProps<{ text: string }>();

const diagonalLine = ref<HTMLDivElement | null>(null);
const isDiagonalLineVisible = ref(false);

onMounted(async () => {
	await nextTick();
	setupDiagonalLine(diagonalLine.value as HTMLDivElement);
	isDiagonalLineVisible.value = true;
});
</script>

<style></style>
