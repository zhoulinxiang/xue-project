<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container">
    <ol id="module-breadcrumb" class="breadcrumb">
        <li><a href="#">课程分类</a></li>
        <li class="active">三年级</li>
    </ol>
    <div class="row top m20">
<!--   12栏的用这个    -->
       <div class="col-md-12">
           
       </div>
<!--   12栏结束    -->
<!--   左右分栏的用这个    -->
        <div class="col-md-10 wrap-body wrap-mall">

            <!-- *********************** 内容区域开始 *********************** -->

            <div class="panel panel-default ">
                <div class="panel-body fresh-main-wrapper">
                	<link rel="import" href="../../widget/Dynamic/index.tpl?__inline">
                </div>
            </div>

            <!-- *********************** 内容区域结束 *********************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side wrap-mall">
            <div class="panel panel-default ">
                <div class="panel-body sideright-body">
                	<div class="sideright-hotcourse">
                		<h3>热门新鲜事</h3>
                		<link rel="import" href="../../widget/Dynamic/dynPopular.tpl?__inline">
                	</div>
                    <div class="sideright-hotcourse">
                        <h3>热门老师</h3>
                        <link rel="import" href="../../widget/Public.Module/hot-teacher.tpl?__inline">
                    </div>
                    <div class="sideright-hotcourse">
                        <h3>热门学生</h3>
                        <link rel="import" href="../../widget/Public.Module/hot-students.tpl?__inline">
                    </div>
                </div>
            </div>
        </div>
<!--    左右分栏结束    -->
   
    </div><!-- row end -->
</div>
<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE: 'Mall',
        TITLE: '二级-免费课',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };

</script>


<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">