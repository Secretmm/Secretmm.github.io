<template>
    <div class="main">
        <img :src="GifImg[`index${item.img}`]" 
            v-if="item.img"
            v-for="(item, index) in showImgList"
            :key="item.id"
            :style="item.style"
            class="img-one">
    </div>
</template>
<style scoped>
    .main {
        width: 100%;
        height: 100%;
        /* background-color: rgb(142, 178, 149) */
        background-color: rgba(165, 200, 142, .4);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        position: relative;
        overflow: hidden;
    }
    .img-one {
        width: 80px;
        height: 80px;
        transform: translateY(30);
        position: absolute;
        animation-name: dropDown;
        animation-duration: 7.5s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
        /* animation-iteration-count:infinite */
    }
    @keyframes dropDown
    {
        0%{transform: translateY(0);}
        100%{transform: translateY(1000px);}
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
                showImgList: [],
                addImg: null,
                GifImg,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            // 随机出现的图片
            showImg(id) {
                if(this.showImgList.length <= 15){
                    this.showImgList.push({
                        id: id,
                        img: Math.ceil(Math.random() * 24),
                        style: {
                            top: '-80px',
                            left: `calc(${Math.floor(Math.random() * 100)}% - 40px)`,
                            // animationDelay: `${Math.floor(Math.random() * 9)}`,
                        },
                    });
                } else {
                    this.showImgList.splice(0, this.showImgList.length -15);
                    // this.showImgList.shift();
                }
            },
            showAloneImg() {

            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            let id = 1;
            this.showImg(id);
    
            this.addImg = setInterval(() => {
                if(this.showImgList.length <= 15) {
                    id ++;
                }
                this.showImg(id);
            }, 250);
        }
    }
</script>
