<template>
    <div class="w-full flex justify-center">
        <div class="w-full flex flex-wrap items-center ml-20">
            <div class="w-72 ml-8 mt-8" v-for="postimage in filteredUserPost" :key="postimage.id">
                <img class="w-72 h-72" :src="`${postimage.imageURL}`" alt="">
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props : {
        filteredUserPost : {}
    }
}
</script>
