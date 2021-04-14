<template>
    <app-header />
    <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
    components: {
        appHeader: Header,
    },
};
</script>

<style lang="scss" scoped>
.slide {
    &-enter {
        &-from {
            opacity: 0;
        }
        &-active {
            animation: slide-in 0.5s ease-out forwards;
            transition: opacity 0.5s;
        }
    }
    &-leave {
        &-active {
            animation: slide-out 0.5s ease-out forwards;
            transition: opacity 0.5s;
        }
        &-to {
            opacity: 0;
        }
    }
    &-move {
        transition: transform 0.5s;
    }
}
@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
