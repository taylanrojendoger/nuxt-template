<script setup lang="ts">
// Google OAuth related
const { status, signOut } = useAuth();
const isAuthanticated: Ref<boolean> = computed(() => status.value === 'authenticated');
</script>

<template>
    <div>
        <div class="h-28 shrink-0"></div>
        <header class="fixed top-0 z-30 w-full bg-slate-950/70 backdrop-blur-md banner">
            <nav
                class="h-28 w-full mx-auto px-4 py-2 flex justify-between items-center transition-all duration-500 box-border sm:max-w-[640px] sm:p-4 md:max-w-[768px] md:p-6 lg:max-w-[1024px] lg:p-8 xl:max-w-[1280px] xl:grid xl:grid-cols-[1fr_1fr] xl:p-8">
                <NuxtLink class="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14" to="/">
                    <NuxtImg src="/img/base-img.png" alt="Base Image" width="30" height="48" />
                    <p class="text-violet-300 text-center text-base font-semibold">Base</p>
                </NuxtLink>

                <div class="flex md:hidden"></div>

                <div class="md:flex md:flex-1 md:justify-end md:gap-x-8">
                    <div
                        class="ml-auto flex flex-row items-center justify-center text-gray-100 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
                        <NuxtLink to="https://www.instagram.com/taylanrojen" target="_blank">
                            <Icon name="bi:instagram" />
                        </NuxtLink>
                        <NuxtLink to="https://www.linkedin.com/in/taylan-rojen-doger/" target="_blank">
                            <Icon name="bi:linkedin" />
                        </NuxtLink>
                        <NuxtLink to="https://github.com/taylanrojendoger" target="_blank">
                            <Icon name="bi:github" />
                        </NuxtLink>
                        <button v-if="isAuthanticated" @click="signOut()">
                            <Icon name="material-symbols:logout-sharp" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        <slot />
    </div>
</template>

<style scoped>
.banner {
    --startColorFirst: rgba(182, 81, 200, .35);
    --startColorSecond: rgba(255, 210, 168, .35);
    --endColorFirst: rgba(182, 81, 200, .35);
    --endColorSecond: rgba(138, 212, 255, .35);
}

.banner:after,
.banner:before {
    content: '';
    height: 100%;
    mix-blend-mode: soft-light;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 45%;
}

.banner:before {
    background: radial-gradient(58% 296% at 12% 122%, var(--startColorFirst), rgba(184, 82, 201, 0) 100%), radial-gradient(54% 296% at 38% 78%, var(--startColorSecond), rgba(255, 211, 170, 0) 100%);
    left: 0;
}

.banner:after {
    background: radial-gradient(50% 190% at 90% 100%, var(--endColorFirst), rgba(182, 81, 200, 0) 100%), radial-gradient(52% 250% at 60% 70%, var(--endColorSecond), rgba(138, 212, 255, 0) 100%);
    right: 0;
}
</style>
  