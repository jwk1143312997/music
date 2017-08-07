<template>
	<div class="radio_list">
		<div>
			<h2 class="radio_title">电台</h2>
			<ul class="list_main">
				<li v-for="item in radioList">
					<a href="javascript:void(0)">
						<div class="list-content">
							<img :src="item.picUrl" alt="" />
							<span></span>
						</div>
						<p>{{item.Ftitle}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="hot_list">
			<h2 class="radio_title">热门歌单</h2>
			<ul class="songs_list" v-show="songsList.length"></ul>
			<p class="song_more"><a href="javascript:void(0);">去客户端发现更多好音乐 ></a></p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		data(){
			return {
				radioList:[],
				songsList:[],
			}
		},
		methods:{
			loading(){
				this.$emit('show','true');
			}
		},
		created(){
			this.$http.get("/static/recommend.json").then((res)=>{
				this.radioList = res.data.data.radioList;
				this.songsList = res.data.data.songList;
				this.loading();
			})
		}
	}
</script>

<style>
	.radio_content{
		
	}
	.radio_list{
		margin: 0 10px 10px 10px;
	}
	.radio_title{
		padding-top: 14px;
		margin: 0 0 11px 0;
		font-size: 16px;
		font-weight: normal;
	}
	.list_main{
		overflow: hidden;
		
	}
	.list_main>li{
		float: left;
		width: 48%;
	}
	.list_main>li:nth-child(1){
		margin-right: 2%;
	}
	.list_main>li:nth-child(2){
		margin-left: 2%;
	}
	.list-content{
		position: relative;
	}
	.list_main img{
		width: 100%;	
	}
	.list_main span{
		position: absolute;
		width: 24px;
		height: 24px;
		right: 5px;
		bottom: 7px;
		background: url(list_sprite.png) no-repeat;
		background-size: 100%;
	}
	.list_main p{
		height: 31px;
		margin-top: -2px;
		line-height: 18px;
		padding: 5px 7px;
		text-align: left;
		font-size: 14px;
		color: #000000;
		background: #FFFFFF;
	}
	.song_more{
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.song_more>a{
		display: inline-block;
		padding: 0 10px;
		font-size: 14px;
		color: rgba(0,0,0,0.6);
	}
</style>