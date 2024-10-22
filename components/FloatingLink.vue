<template>
	<div :class="cn({ absolute: position }, generatePosition(position))">
		<NuxtLink
			:to="to"
			:class="
				cn(
					'leading-[140%] max-lg:text-sm text-base hover:text-white transition duration-500 group underline-animation',
					{
						vertical:
							position === LinkPosition.LEFT || position === LinkPosition.RIGHT,
					}
				)
			"
			:target="target"
		>
			{{ name }}
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils';
import { LinkPosition } from '~/types/positions';

const { name, position, to } = defineProps<{
	name: string;
	position?: LinkPosition | undefined;
	to: string;
	target?: string;
}>();

const generatePosition = (position: LinkPosition | undefined): string => {
	switch (position) {
		case LinkPosition.LEFT:
			return 'left-[19px] [writing-mode:vertical-lr] scale-[-1]';
		case LinkPosition.RIGHT:
			return 'right-[19px] [writing-mode:vertical-lr]';
		case LinkPosition.BOTTOM:
			return 'bottom-[19px]';
		default:
			return '';
	}
};
</script>
