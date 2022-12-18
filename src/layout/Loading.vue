<!-- 组件说明 -->
<template>
    <div class="loading-content">
        <div class="g-container">
            <div class="g-first"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang='scss'>
$count: 7;

.loading-content{
    position: fixed;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    display: flex;
    filter: blur(4px) contrast(8);
    background: #fff;
    z-index: 9;
}

.g-container {
    margin: auto;
    position: relative;
    width: 3vmin;
    height: 3vmin;
}

.g-ball,
.g-first {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(8, 165, 158);
    border-radius: 50%;
    transform: translate(-700%, 0);
    opacity: 0;
    // animation: move 3s infinite linear;
}

@for $i from 0 through $count {
    .g-ball:nth-child(#{$i}) {
        animation: move 3s infinite #{$i * 0.2 + 0.1}s linear;
    }
}

.g-first {
    animation: scaleMove 3s infinite linear;
}

@keyframes move {
    25% {
        opacity: 1;
        transform: translate(-1vw, 0);
    }

    50% {
        opacity: 1;
        transform: translate(1vw, 0);
    }

    75%,
    100% {
        opacity: 0;
        transform: translate(700%, 0);
    }
}


@keyframes scaleMove {
    25% {
        opacity: 1;
        transform: translate(-1vw, 0);
    }

    35% {
        opacity: 1;
        transform: scale(1);
    }

    70% {
        opacity: 1;
        transform: translate(1vw, 0) scale(2);
    }

    90%,
    100% {
        opacity: 0;
        transform: translate(1vw, 0) scale(1);
    }
}
</style>