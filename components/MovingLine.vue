<template>
	<div class="w-screen overflow-hidden">
		<div
			class="mobile:text-[28px] text-[52px] leading-[110%] font-bold italic whitespace-nowrap flex text-stroke"
			ref="textRef"
		>
			<span ref="spanRef">{{ text }}</span>
			<span v-for="i in 5" :key="i">{{ text }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';

defineProps<{ text: string }>();

const textRef = ref<HTMLDivElement | null>(null);
const spanRef = ref<HTMLSpanElement | null>(null);

onMounted(() => {
	if (textRef.value && spanRef.value) {
		gsap.fromTo(
			textRef.value,
			{
				x: 0,
			},
			{
				x: -spanRef.value.clientWidth + 'px',
				ease: 'linear',
				repeat: -1,
				duration: 20,
			}
		);
	}
});
</script>
