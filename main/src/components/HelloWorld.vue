<template>
    <div class="main">
        <img :src="GifImg[`index${item.img}`]" 
            v-if="item.img"
            v-for="(item, index) in showImgList"
            :key="item.id"
            :style="item.style"
            class="img-one"
            draggable="true"
            @dragstart="startDrag($event, item)">
        <div class="main-enter" 
            :class="dragarea ? 'main-drag-area' : ''"
            @drop="drop" @dragover="dragover">
            <template v-if="!dropList.length">
                拖只团子到这里，即可拥有神秘入口
            </template>
            <template v-else>
                <img v-for="(item, index) in dropList" 
                    class="main-drag-img"
                    :key="item.id"
                    :src="GifImg[`index${item.img}`]">
            </template>
        </div>
    </div>
</template>
<style scoped>
    .main-drag-area {
        border: 1px solid #18a2ea !important;
        /* box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .1); */
    }
    .main-drag-img {
        width: 190px;
        height: 190px;
    }
    .main-enter {
        border: 1px solid #fff;
        transition: all .5s;
        position: absolute;
        bottom: 50px;
        right: 50px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 4px;
    }
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
        cursor: pointer;
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
                dropList: [],
                addImg: null,
                dragarea: false,
                GifImg,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            // 拖动到可释放目标区域时触发
            dragover(ev) {
                ev.preventDefault();
                ev.dataTransfer.dropEffect = "move";
                this.dragarea = true;
            },
            // 拖动放置到可释放目标时
            drop(ev) {
                const item = ev.dataTransfer.getData("item");
                // this.dropList.push(JSON.parse(item));
                this.dropList = [(JSON.parse(item))];
                this.dragarea = false;
            },
            // 开始拖动图片
            startDrag(ev, item) {
                // console.log(item);
                // ev.preventDefault();
                ev.dataTransfer.setData('item', JSON.stringify(item));
                ev.dropEffect = 'move';
            },
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
        },
        created() {
        },
        destroyed() {
        },
        beforeDestroy() {
            window.clearInterval(this.addImg);
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
            document.addEventListener("visibilitychange", () => {
                if(document.visibilityState === 'visible') {
                    console.log(88);
                    this.addImg = setInterval(() => {
                        if(this.showImgList.length <= 15) {
                            id ++;
                        }
                        this.showImg(id);
                    }, 250);
                    document.title = '团子大大';
                } else {
                    document.title = '团子等你回来哦~';
                    window.clearInterval(this.addImg);
                }
            });
        }
    }
</script>
