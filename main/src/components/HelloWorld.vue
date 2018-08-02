<template>
    <div class="main">
        <img :src="GifImg[`index${i}`]" 
            v-for="i in 24" :key="i" 
            class="img-one" 
            :style="{'transform':`translateY(${Math.floor(Math.random()*5 + i * 10)}px)`}">
    </div>
</template>
<style scoped>
    .main {
        width: 100%;
        height: 100%;
        /* background-color: rgb(142, 178, 149) */
        background-color: rgb(165, 200, 142);
    }
    .img-one {
        width: 80px;
        height: 80px;
        transform: translateY(30)
    }

</style>
<script>
    import * as GifImg from  '@/importImage/gifImg'
    export default {
        name: 'HelloWorld',
        components: {
        },
        props: {},
        data() {
            return {
                GifImg,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>
