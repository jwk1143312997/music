<template>
	<div class="swiper_main">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(item,index) in slider">
				<div><a :href="item.linkUrl"><img :src="item.picUrl" alt="" /></a></div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		
	</div>
</template>

<script type="text/ecmascript-6">
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		data(){
			return{
				slider:[],
				swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                pagination: '.swiper-pagination',
                autoplay: 3000,
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }  
			}
		},
		created(){
			this.$http.get("/static/recommend.json").then((res)=>{
				this.slider = res.data.data.slider;
			})
			
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted(){
			//this.swiper.slideTo(0,1000,false);
		},
		methods:{
			
		},
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

<style>
	.swiper_main{
		min-height: 128px;
	}
	.swiper-slide img{
		width: 100%;
		min-height: 128px;
	}
	.swiper-pagination-bullet{
		width: 6px;
		height: 6px;
		background: rgba(144,144,144,0.8);
		opacity: 1;
	}
	.swiper-pagination-bullet-active{
		background: #fff;
	}
</style>