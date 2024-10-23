<template>
	<div class="hidden xs:block">
		<button
			@click="toggleMenu"
			class="fixed top-[24px] right-[20px] p-2 z-30 flex flex-col gap-2"
		>
			<span class="w-[22px] h-[1px] bg-black"></span>
			<span class="w-[22px] h-[1px] bg-black"></span>
		</button>
		<div
			class="fixed top-0 right-0 bg-gray-500 h-screen w-[250px] transition-transform transform duration-1000 z-50"
			:class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
			ref="targetRef"
		>
			<ul class="flex flex-col items-end gap-3 p-4 text-white">
				<Logo class="mb-10" />

				<div v-if="!isAboutPage" class="flex flex-col items-end gap-3">
					<FloatingLink to="/about" name="Where?" />
					<FloatingLink to="/about" name="What?" />
					<FloatingLink to="/about" name="Who?" />
				</div>
				<div v-else class="flex flex-col items-end gap-3">
					<FloatingLink to="https://sk-dev-app.vercel.app" name="Portfolio" />
					<FloatingLink to="https://www.linkedin.com/in/serhii-kostiv/" name="Linkedin" />
					<FloatingLink to="https://github.com/kraiviks" name="GitHub" />
					<FloatingLink to="mailto:kostiv.serhii@gmail.com" name="Email" />
				</div>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
const targetRef = ref<HTMLDivElement | null>(null);
const router = useRouter();

const isAboutPage = computed(() => router.currentRoute.value.path === '/about');

const isOpen = ref<boolean>(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};

onClickOutside(targetRef, () => {
	isOpen.value = false;
});

router.afterEach(() => {
	isOpen.value = false;
});
</script>
