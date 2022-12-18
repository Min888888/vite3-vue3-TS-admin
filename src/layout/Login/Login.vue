<!-- 组件说明 -->
<template>
    <el-button style="margin:10px;" type="primary" @click="Login">Primary</el-button>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';


const router = useRouter();

const Login = ():void =>{
    router.push('/')
}

</script>

<style scoped lang='scss'>

</style>