<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script>
import { watch, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from '@/views/layouts/Default.vue';

export default {
    name: 'AppLayout',

    setup() {
        const route = useRoute();
        const layout = shallowRef(DefaultLayout);

        watch(
            () => route.meta,
            async meta => {
                try {
                    const layoutName = meta.layout || 'Default';
                    const component = await import(`@/views/layouts/${layoutName}.vue`);
                    layout.value = component?.default || DefaultLayout;
                } catch (error) {
                    layout.value = DefaultLayout;
                }
            },
            { immediate: true }
        );

        return {
            layout
        }
    }
}
</script>
