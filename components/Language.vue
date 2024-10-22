<template>
	<div
		class="fixed top-[24px] left-[20px] z-10"
		@mouseenter="toggleShowLanguages(true)"
		@mouseleave="toggleShowLanguages(false)"
	>
		<div class="relative group">
			<!-- Languages button -->
			<div
				class="xs:p-1 p-3 border border-opacity-15 rounded-full cursor-pointer transition duration-500 group-hover:bg-[--tertiary-color] group-hover:text-black group-hover:border-black hover:border-opacity-0 group-hover:shadow-circle group-hover:shadow-[--tertiary-color] z-20"
			>
				👅
			</div>

			<!-- Languages container -->
			<div
				ref="languagesContainer"
				class="absolute top-[50%] -translate-y-[50%] flex gap-2 pl-10 py-3"
			>
				<span class="z-30 opacity-0 cursor-pointer">RU</span>
				<span class="z-30 opacity-0 cursor-pointer">UA</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';

const showedLanguages = ref<boolean>(false);
const languagesContainer = ref<HTMLElement | null>(null);

const toggleShowLanguages = (state: boolean): void => {
	showedLanguages.value = state;
};

// Tracking visibility change of languages
watch(showedLanguages, (newValue: boolean) => {
	if (languagesContainer.value) {
		const spans = languagesContainer.value.querySelectorAll('span');
		if (newValue) {
			gsap.fromTo(
				spans,
				{ x: 0, opacity: 0 },
				{ x: 30, opacity: 1, stagger: 0.2, duration: 0.5, ease: 'power2.out' }
			);
		} else {
			gsap.fromTo(
				spans,
				{ x: 30, opacity: 1 },
				{ x: 0, opacity: 0, stagger: 0.2, duration: 0.5, ease: 'power2.in' }
			);
		}
	}
});
</script>
