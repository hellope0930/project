$(function(){
    var isTrue = true;
    var course = {};
    course.class = {
        init:function(){
            //console.log(this);
            course.class.courseAbstract();
            course.class.courseTap();
            course.class.alertBox();
        },
        courseAbstract:function(){ //点击展开收缩
            $(".coursePic-right a").unbind("click").bind("click",function(){
                if(isTrue){
                    $(this).text("收起");
                    $(this).parent().prev("aside").find("p").css({overflow:"visible","text-overflow":"clip",whiteSpace:"normal"})
                        .children("span").css({display:"block",marginTop:"30px"});

                    isTrue = false;
                }else{

                    $(this).parent().prev("aside").find("p").css({overflow:"hidden","text-overflow":"ellipsis",whiteSpace:"nowrap"})
                        .children("span").css({display:"inline-block",marginTop:"0"});

                    $(this).text("展开");
                    isTrue = true;
                }

            })
        },
        courseTap:function(){
            $(".courseBLock").css({display:"none"}).eq(0).css({display:"block"});
          $(".course-tab p").unbind("click").bind("click",function(){
              var index = $(this).index();
              $(".course-tab p").removeClass("course-active");
              $(this).addClass("course-active");
              $(".courseBLock").css({display:"none"}).eq(index).css({display:"block"});
          })
        },
        alertBox:function(){
            $(".alert-box").css({display:"none"});
            $(".alertBox").css({display:"none"});
            $(".alertBox a").unbind("click").bind("click",function(){
               // $(".alert-box").css({display:"none"});
                // $(".alertBox").css({display:"none"})
            })
        }
    };
    course.class.init();

});