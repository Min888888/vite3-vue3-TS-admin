<!-- 组件说明 -->
<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
:deep(.el-aside) {
    background-color: red;
}

:deep(.el-header) {
    background-color: aqua;
}

:deep(.el-container){
    height: 100vh;
}
</style>