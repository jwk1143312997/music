<template>
  <div id="app">
  	<vheader></vheader>
  	<div class="tab">
  		<router-link to="/recommend" tag="div" class="tab-item"><a>推荐</a></router-link>
  		<router-link to="/rank" tag="div" class="tab-item"><a>排行榜</a></router-link>
  		<router-link to="/search" tag="div" class="tab-item"><a>搜索</a></router-link>
  	</div>
  	<keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
	import vheader from './components/v-header/v-header'
	
export default {
  name: 'app',
  
  components:{
  	vheader
  }
}
</script>

<style>
*{
	padding:0 ;
	margin: 0;
}
ul,li{
	list-style: none;
}
a,img{
	border:none;
	text-decoration: none;
}
body{
	background: #F4F4F4;
}
.tab{
	display: flex;
	height: 40px;
	background: #fff;
}
.tab-item{
	flex: 1;
	position: relative;
	line-height: 40px;
	text-align: center;
}
.tab>.router-link-active>a{
	color: #31c27c;
}
.router-link-active:after{
	content: "";
	display: block;
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	height: 2px;
	background: #31c27c;
}
.tab-item>a{
	color: rgba(0,0,0,0.6);
	font-size: 16px;
}
</style>
