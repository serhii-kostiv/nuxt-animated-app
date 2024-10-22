<template>
	<div
		class="flex justify-center items-center text-[52px] leading-[110%] font-bold h-full w-full"
		@mousemove="(e) => moveText(e, mainTextContainerRef)"
	>
		<!-- Background - START -->
		<!-- Moving line -->
		<DiagonalLine text="<SK.DEV/>" />
		<!-- Circle -->
		<Circle class="absolute" />
		<!-- Background - END -->

		<div ref="mainTextContainerRef" class="z-20">
			<NuxtLink to="https://sk-dev-app.vercel.app" target="_blank">
				<MainTitle title="Portfolio" />
			</NuxtLink>
		</div>

		<!-- Floating links -->
		<FloatingLink
			class="xs:hidden"
			:position="LinkPosition.LEFT"
			name="Linkedin"
			to="https://www.linkedin.com/in/serhii-kostiv/"
			target="_blank"
		/>
		<FloatingLink
			class="xs:hidden"
			:position="LinkPosition.RIGHT"
			name="GitHub"
			to="https://github.com/kraiviks/"
			target="_blank"
		/>
		<FloatingLink
			class="xs:hidden"
			:position="LinkPosition.BOTTOM"
			name="Email"
			to="mailto:kostiv.serhii@gmail.com"
		/>
	</div>
</template>

<script lang="ts" setup>
import { moveText } from '~/lib/utils';
import { LinkPosition } from '~/types/positions';

const mainTextContainerRef = ref<HTMLHeadingElement | null>(null);
</script>
