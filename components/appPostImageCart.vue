<template>
    <div class="w-full flex justify-center">
        <div class="flex flex-wrap items-center">
            <div class="w-56 ml-8 mt-8" v-for="postimage in filteredUserPost" :key="postimage.id">
                <img class="w-56 h-56" :src="`${postimage.imageURL}`" alt="">
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
