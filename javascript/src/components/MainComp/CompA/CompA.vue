<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';

const CompB = defineAsyncComponent(() => import( '@/components/MainComp/CompB/CompB.vue'))
const CompC = defineAsyncComponent(() => import( '@/components/MainComp/CompC/CompC.vue'))

const showB = ref(false)
export default defineComponent({
    name: "CompA",
    components: {
        CompB,
        CompC,
    },
    data () {
        return {
            showB: false,
            showC: false
        }
    },
    created () {
        this.showC = true
    }
}) 
</script>

<template>
    <div>
        <div>
            <comp-b v-if="showB" />
        </div>
        <comp-c v-if="showC" />
    </div>
</template>