<template>
	<div
		class="relative flex items-center justify-center w-full h-full"
		@mousemove="(e) => moveText(e, h1ContainerRef)"
	>
		<!-- Background - START -->
		<!-- Moving line -->
		<DiagonalLine text="FULL-CYCLE EVENT AGENCY" />
		<!-- Circle -->
		<div class="absolute">
			<Circle class="relative" />
			<ShowReel
				class="absolute -bottom-[60px] -right-[90px] xs:-bottom-[130px] xs:-right-[70px] sm:-bottom-[100px] sm:-right-[70px] sm-scale-75 text-2xl xs:scale-75 cursor-pointer"
			/>
		</div>
		<!-- Background - END -->

		<!-- Main title  -->
		<div class="relative px-14">
			<div ref="h1ContainerRef">
				<MainTitle :title="['FULL-CYCLE', 'EVENT AGENCY']" />
			</div>
		</div>

		<!-- Floating links -->
		<FloatingLink
			class="xs:hidden"
			:position="LinkPosition.LEFT"
			name="where?"
			to="/about"
		/>
		<FloatingLink
			class="xs:hidden"
			:position="LinkPosition.RIGHT"
			name="what?"
			to="/about"
		/>
		<FloatingLink
			class="xs:hidden"
			:position="LinkPosition.BOTTOM"
			name="who?"
			to="/about"
		/>
	</div>
</template>

<script lang="ts" setup>
import { moveText } from '~/lib/utils';
import { LinkPosition } from '~/types/positions';

useHead({
	title: 'My App',
});

const h1ContainerRef = ref<HTMLHeadingElement | null>(null);
</script>
