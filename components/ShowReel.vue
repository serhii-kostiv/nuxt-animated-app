<template>
  <svg width="130" height="130" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" ref="svgRef" @mouseenter="animate" @mouseleave="stopAnimation">
    <defs>
      <path id="circlePath" d="M 65, 65 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
    </defs>
    <text font-size="12" fill="white" ref="textRef">
      <textPath href="#circlePath" startOffset="50%" text-anchor="middle">
        <tspan dx="5">showreel</tspan>
        <tspan dx="10">showreel</tspan>
        <tspan dx="10">showreel</tspan>
      </textPath>
    </text>
    <circle cx="65" cy="65" r="5" fill="black" />
  </svg>
</template>

<script lang="ts" setup>
import gsap from 'gsap';

const textRef = ref<SVGTextElement | null>(null);
let rotation = 0;
let animation: gsap.core.Tween | null = null;

const animate = () => {
  if (textRef.value) {
    if (animation) {
      animation.kill();
    }
    animation = gsap.to(textRef.value, {
      rotation: rotation - 360,
      transformOrigin: 'center',
      duration: 5,
      repeat: -1,
      ease: 'none',
      onUpdate: () => {
        rotation = gsap.getProperty(textRef.value, "rotation") as number;
      }
    });
  }
};

const stopAnimation = () => {
  if (animation) {
    animation.kill();
    animation = null;
  }
};
</script>
