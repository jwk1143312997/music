<template>
	<div class="recommend_content">
		<loading v-if="!cheack"></loading>
		<div class="radio_content" v-show="cheack">
			<swiper></swiper>
			<vradio v-on:show="change"></vradio>
			<vfooter></vfooter>
		</div>
		
	</div>
</template>

<script type="text/ecmascript-6">
	import swiper from '../swiper/swiper'
	import vradio from '../vradio/vradio'
	import vfooter from '../footer/footer'
	import loading from '../loading/loading'
	export default{
		data(){
			return {
				cheack:'false'
			}
		},
		methods:{
			change(val){
				console.log(val)
				this.cheack = val
			}
		},
		components:{
			swiper,
			vradio,
			vfooter,
			loading
		}
	}
</script>

<style>
	.recommend_content{
		padding: 0 0 1px 0;
	}
</style>