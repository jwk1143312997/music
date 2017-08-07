<template>
	<div class="header">
		<i class="music-logo"></i>
		<a href="javascript:void(0);" class="btn-download">下载APP</a>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{}
</script>

<style>
	.header{
		height: 44px;
		width: 100%;
		background: #31c27c;
		overflow: hidden;
	}
	.music-logo{
		display: inline-block;
		width: 90px;
		height: 25px;
		margin: 9px 0 0 10px ;
		background: url(logo.png) no-repeat;
		background-size:contain ;
	}
	.btn-download{
		float: right;
		height: 28px;
		padding: 0 10px;
		margin: 9px 10px 0 0 ;
		line-height: 28px;
		text-align: center;
		border-radius: 99px;
		background: #149c5a;
		color: #fff;
		font-size: 14px;
		
		
	}
</style>