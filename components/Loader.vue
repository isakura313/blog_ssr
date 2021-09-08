<template>
  <div class="loader_wrap">
    <div class="loader">
      <svg class="icon-loader" viewBox="0 0 100 100">
        <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
      </svg>
    </div>
  </div>
</template>

<style>
.loader_wrap{
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2;
}
.loader{
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
}
.icon-loader{
    width:200px;
    width:200px;
}
.icon-loader path{
    stroke:blue;
    stroke-width:3;
    stroke-dasharray:288.5;
    stroke-linecap:round;
    fill:none;
    transform-origin:50px 50px;
    animation:
    pathStroke 2.75s infinite ease-in-out,
    pathRotate 4.5s infinite cubic-bezier(1,.5,0,.5);
}
@keyframes pathStroke{
    0%{stroke-dashoffset:-288.5;}
    50%{stroke-dashoffset:0;}
    100%{stroke-dashoffset:288.5;}
}
@keyframes pathRotate{
    0%{transform:rotate(0deg);}
    50%{transform:rotate(-540deg);}
    100%{transform:rotate(-1080deg);}
}
</style>
