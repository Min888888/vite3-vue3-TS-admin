<!-- 组件说明 -->
<template>
    <div>
        <!-- <i-ep-add-location class="theme-color" />
        <div>{{ num }}</div>
        <ElButton @click="click">我是按钮</ElButton> -->
        <el-row>
            <el-col :span="12">
                <div id="barChart1" style="height:500px"></div>
            </el-col>
            <el-col :span="12">
                <div id="barChart2" style="height:500px"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import { echarts, EChartsOption } from '@/lib/echart/barChart'
import { useSystem } from '@/store/system'

const system = useSystem();


onMounted(() => {
    var chartDom1 = document.getElementById('barChart1')!;
    var chartDom2 = document.getElementById('barChart2')!;
    var myChart1 = echarts.init(chartDom1);
    var myChart2 = echarts.init(chartDom2);
    var option: EChartsOption;

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };

    option && myChart1.setOption(option);
    option && myChart2.setOption(option);

    setTimeout(() => {
        system.isLoading = false
    }, 2000);
})

// const num = ref<number>(8)



// const click = () => {
//     num.value++
//     ElMessage({
//         message: "服务器异常！",
//         type: "error",
//     });
// }

</script>

<style scoped lang='scss'>

</style>