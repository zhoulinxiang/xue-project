<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container top m20">
<!--   12栏的用这个    -->
	<div class="col-md-12">
			<link rel="import" href="../../widget/courseInfor/courseBackInfor.tpl?__inline">
	</div>
	<!--   12栏结束    -->
	 <div class="row">
	      <div class="col-md-10 wrap-body wrap-mall">
            <!-- *********************** 内容区域开始 *********************** -->
            <div class="panel panel-default ">
                <div class="panel-body">
                    <link rel="import" href="../../widget/courseInfor/courseInforBottom.tpl?__inline">
                 </div>
            </div>
            
            <!-- *********************** 内容区域结束 *********************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side wrap-mall">
            <div class="panel panel-default ">
            	<div class="panel-header">相关课程</div>
                <div class="panel-body panel-heading">
                    <link rel="import" href="../../widget/Public.Module/hot-students.tpl?__inline">
                </div>
            </div>
        </div>
    
    </div>
</div>
<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE: 'Mall',
        TITLE: '商城首页--课程详情页',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">