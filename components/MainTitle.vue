<template>
	<h1
		ref="h1Ref"
		class="xl:text-[82px] xs:text-[34px] sm:text-[34px] text-[58px] xs:min-w-[333px] min-w-[690px] leading-[110%] font-bold text-center"
	>
		<template v-if="Array.isArray(title)">
			<span v-for="(line, index) in title" :key="index"
				>{{ line }}<br v-if="index !== title.length - 1"
			/></span>
		</template>
		<template v-else>{{ title }}</template>
	</h1>
</template>

<script lang="ts" setup>
defineProps<{ title: string | string[] }>();
</script>
