<template>
	<NuxtLayout>
		<NuxtRouteAnnouncer />
		<NuxtPage />
		<Preloader />
	</NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
	title: 'Nuxt-TT-App',
});
</script>
