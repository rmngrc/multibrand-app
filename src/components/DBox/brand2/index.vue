<template>
  <div>
    <div class="box">
      This is the box component for {{ brand }}
    </div>
    <div class="box">
      The box component for this brand has 2 boxes haha
    </div>
  </div>
</template>

<script src="@/components/DBox"></script>

<style scoped>
 .box {
   display: inline-block;
   background-color: lightpink;
   border: 1px solid #ccc;
   color: white;
   padding: 50px;
   margin: 50px;
 }
</style>
