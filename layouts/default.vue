<template>
	<div
		class="w-screen h-screen overflow-hidden"
		:class="{ 'page-blur': !isLoading, 'page-clear': isLoading }"
	>
		<Header />
		<main class="w-full h-full">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
const isLoading = ref<boolean>(false);

onMounted(() => {
	isLoading.value = true;
});
</script>
