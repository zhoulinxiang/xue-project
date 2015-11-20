<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container">
    <ol id="module-breadcrumb" class="breadcrumb findBreadCrumb">
        <li><a href="#">首页</a></li>
        <li class="active">当前页</li>
    </ol>
    <div class="row top m20">
        <div class="col-md-10 wrap-body wrap-mall">

            <!-- *********************** 内容区域开始 *********************** -->

            <div class="panel panel-default ">
                <div class="panel-body findClass">
                <link rel="import" href="../../widget/Mall.FindTeacher/index.tpl?__inline">
                </div>
            </div>

            <!-- *********************** 内容区域结束 *********************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side wrap-mall">
            <div class="panel panel-default">
                <div class="panel-body findClassRight">
                    <span class="findRightTitle">热门新鲜事</span>
                    <div class="">
                        <link rel="import" href="../../widget/Dynamic/dynPopular.tpl?__inline">
                    </div>
                    <span class="findRightTitle">热门专题课</span>
                    <div class="">
                    </div>
                </div>
            </div>
        </div>
    </div><!-- row end -->
</div>
<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE: 'Mall',
        TITLE: '商城首页',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };

</script>


<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">