<template>
	<div v-if="isLoading" class="black-screen" />
</template>

<script lang="ts" setup>
const isLoading = ref<boolean>(false);
const router = useRouter();

const startLoading = () => {
	isLoading.value = true;
};

const stopLoading = () => {
	setTimeout(() => {
		isLoading.value = false;
	}, 1300);
};

onMounted(() => {
	router.beforeEach(() => {
		startLoading();
	});

	router.afterEach(() => {
		stopLoading();
	});
});

onBeforeUnmount(() => {
	router.beforeEach(() => {});
	router.afterEach(() => {});
});
</script>

<style scoped>
.black-screen {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #6b7280;
	z-index: 9999;
	animation: slide-in-out 1.3s forwards;
}

@keyframes slide-in-out {
	0% {
		transform: translateX(-100%);
	}
	40% {
		transform: translateX(0);
	}
	70% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(101vw);
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
