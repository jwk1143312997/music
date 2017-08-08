<template>
	<div class="topList">
		<ul>
			<li v-for="item in topList" :data-id = "item.id" :data-type = "item.type" class="topic_item">
				<div class="topic_main">
					<a href="javascript:;" class="topic_media"> 
						<img :src="item.picUrl"/>
						<span class="listen_count">
							<i class="icon icon_listen"></i>
							{{item.listenCount|changeThousand("万")}}
						</span>
					</a>
					<div class="topic_info">
						<div class="topic_cont">
							<h3 class="topic_tit">{{item.topTitle}}</h3>
							<p v-for="(songList,index) in item.songList">{{index+1}} <span class="text_name">{{songList.songname}}</span>-{{songList.singername}}</p>
						</div>
						<i class="topic_arrow"></i>
					</div>
				</div>
			</li>
		</ul>
		<p class="topic_more"><a href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	Vue.filter('changeThousand',function(value,count){
		return (value/10000).toFixed(1)+count
	})
	export default{
		data(){
			return {
				topList:[]
			}
		},
		created(){
			this.$http.get("../static/topList.json").then((res)=>{
				this.topList = res.data.data.topList;
				console.log(this.topList)
				console.log(this.topList[0].songList)
			})
		}
		
	}
</script>

<style>
	.topList{
		padding: 10px;
	}
	.topic_item{
		margin-bottom: 10px;
    	overflow: hidden;
	}
	.topic_main{
		display: -webkit-box;
    	background: #fff;
	}
	.topic_media{
		position: relative;
    	width: 100px;
    	height: 100px;
    	display: block;
	}
	.topic_media>img{
		display: block;
    	width: 100px;
    	height: 100px;
	}
	.listen_count{
		left: 5px;
	    bottom: 7px;
	    line-height: 12px;
	    color: #fff;
	    opacity: .6;
	    font-size: 9px;
	    z-index: 10;
	    position: absolute;
	    display: block;
	}
	.icon_listen{
		background-image: url(list_sprite.png);
	    background-repeat: no-repeat;
	    background-size: 24px 60px;
	    z-index: 10;
	    display: block;
	    float: left;
	    width: 10px;
	    height: 10px;
	    background-position: 0 -50px;
	    margin-right: 3px;
	}
	.topic_info{
		position: relative;
    	-webkit-box-flex: 1;
    	display: -webkit-box;
    	-webkit-box-align: center;
    	-webkit-box-pack: center;
	}
	.topic_cont{
		-webkit-box-flex: 1;
    	margin: 0 10px 0 15px;
	}
	.topic_tit{
		font-size: 16px;
	    color: #000;
	    font-weight: normal;
	    margin-bottom: 5px;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.topic_cont p{
		font-size: 14px;
	    color: rgba(0,0,0,.5);
	    height: 21px;
    	line-height: 21px;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.text_name{
		color: #000;
	    margin-left: 8px;
	    margin-right: 5px;
	}
	.topic_arrow{
		position: absolute;
	    right: 10px;
	    top: 50%;
	    /* margin-top: -4px; */
	    width: 6px;
	    height: 6px;
	    border-right: 1px solid #b2b2b2;
	    border-bottom: 1px solid #b2b2b2;
	    -webkit-transform: rotate(-45deg);
	}
	.topic_more {
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	}
	.topic_more a {
	    display: inline-block;
	    padding: 0 10px;
	    font-size: 14px;
	    color: rgba(0,0,0,.6);
	}
</style>