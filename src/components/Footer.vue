<template>
    <div class="container">
        <p> © Mario Chacon, 2021 </p>
    </div>
</template>

<script>

export default {
    name:'Footer',
}
</script>

<style scoped>
.container{
    @apply flex md:w-full w-screen m-auto justify-center h-full items-center;
}
p{
    @apply font-text text-xl text-center;
}

</style>