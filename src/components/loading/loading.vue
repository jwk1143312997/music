<template>
	<div class="loading_box">
		<img src="./loading.gif"/>
		<p>页面正在努力加载中...</p>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{}
</script>

<style>
	.loading_box>img{
		display: block;
		margin: 60px auto 50px;
		width: 100px;
		height: 100px;
	}
	.loading_box>p{
		font-size: 10px;
		text-align: center;
		color: rgba(0,0,0,0.5);
	}
	
</style>