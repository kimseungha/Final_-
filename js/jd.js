$(document).ready(function(){

  //네비게이션 호버시 슬라이드업다운
  $(".gnb .gnb_ul > li").each(function(i){
    $(this).index();
    var gnbLi =   $(".gnb .gnb_ul > li").eq(i);
    var gnbSubmenu = $(".gnb .gnb_ul li .submenu").eq(i);
    $(gnbLi).hover(function(){
      $(gnbSubmenu).stop().slideToggle("fast");
    })
  })
  //슬라이더 버튼 첫번째 모두 활성화
    $(".main_slider_under_btn a").eq(0).addClass("on");
    $(".notice_slider_under_btn a").eq(0).addClass("on");
    $(".news_slider_btn a").eq(0).addClass("on");

  //1-1메인 슬라이더 좌우버튼
  //1-2메인 슬라이더 무한 롤링
  var num=0;
  var show_num = 3;
  var items = $(".main_slider_showbox .main_slider_items a");
  var itemBox = $(".main_slider_showbox .main_slider_items");
  var copyObj = $('.main_slider_showbox .main_slider_items a:lt('+show_num+')').clone();
  itemBox.append(copyObj);

  var total = $(items).length;


  $(".mainNxt").on("click",function(){
    clearInterval(start);
    if(num==total){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
      num = 0;
      $(itemBox).css("margin-left",num);
    }
    num++;
    var sdIdx=num;
    $(itemBox).stop().animate({marginLeft:-468*num},500);
    // return false;
    if(sdIdx==total){
      sdIdx=0;
    }
    $(".main_slider_under_btn a").removeClass("on");
    $(".main_slider_under_btn a").eq(sdIdx).addClass("on");

  })
  $(".mainPre").on("click",function(){
    if(num==0){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
      num = total;
      $(itemBox).css("margin-left",-468*num);
    }
    num--;
    var sdIdx=num;
    $(itemBox).stop().animate({marginLeft:-468*num},500);
    // return false;
    $(".main_slider_under_btn a").removeClass("on");
    $(".main_slider_under_btn a").eq(sdIdx).addClass("on");
  })

  //1-3메인 슬라이더 자동 슬라이드 setInterval
  var start = setInterval(function(){
    if(num==total){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
      num = 0;
      $(itemBox).css("margin-left",num);
    }
    num++;
    var sdIdx=num;
    $(itemBox).stop().animate({marginLeft:-468*num},500);
    // return false;
    if(sdIdx==total){
      sdIdx=0;
    }
    $(".main_slider_under_btn a").removeClass("on");
    $(".main_slider_under_btn a").eq(sdIdx).addClass("on");

  },2000)

  //2-1 공지사항 슬라이더 버튼
  $(".notice_slider_under_btn a").click(function(){
    $(".notice_slider_under_btn a").removeClass("on");
    $(this).addClass("on");
    var idx = $(this).index();
    slide2(465,idx);
  })

  var noticeidx = 0;
  $(".notice_slider .notice_pre").click(function(){
    noticeidx--;
    var sd2Idx= noticeidx;
    slide2(465,noticeidx);
    if(noticeidx==-1){
      slide2(0,noticeidx);
      noticeidx=0;
    }
    if(sd2Idx==-1){
      sd2Idx=0;
    }
    $(".notice_slider_under_btn a").removeClass("on");
    $(".notice_slider_under_btn a").eq(sd2Idx).addClass("on");
  })

  $(".notice_slider .notice_nxt").click(function(){
    noticeidx++;
    var sd2Idx= noticeidx;
    slide2(465,noticeidx);
    if(noticeidx==4){
      slide2(0,noticeidx);
      noticeidx=0;
    }
    if(sd2Idx==4){
      sd2Idx=0;
    }
    $(".notice_slider_under_btn a").removeClass("on");
    $(".notice_slider_under_btn a").eq(sd2Idx).addClass("on");
  })

  //3-1 뉴스 동영상 슬라이더 버튼
  $(".news_slider_btn a").click(function(){
    $(".news_slider_btn a").removeClass("on");
    $(this).addClass("on");
    var idx = $(this).index();
    slide3(540,idx);
  })
  var newsidx = 0;

  $(".news_video_slider .news_video_slide_pre_btn").click(function(){
    newsidx--;
    var sd3Idx= newsidx;
    slide3(540,newsidx);
    if(newsidx==-1){
      slide3(0,newsidx);
      newsidx=0;
    }
    if(sd3Idx==-1){
      sd3Idx=0;
    }
    $(".news_slider_btn a").removeClass("on");
    $(".news_slider_btn a").eq(sd3Idx).addClass("on");
  })

  $(".news_video_slider .news_video_slide_next_btn").click(function(){
    newsidx++;
    var sd3Idx= newsidx;
      slide3(540,newsidx);
    if(newsidx==3){
        slide3(0,newsidx);
      newsidx=0;
    }
    if(sd3Idx==3){
      sd3Idx=0;
    }
    $(".news_slider_btn a").removeClass("on");
    $(".news_slider_btn a").eq(sd3Idx).addClass("on");
  })

  //4-1 프로모 슬라이더 버튼
  var promoidx = 0;

  $(".promo_ul .pr_pre").click(function(){
    promoidx--;
    slide_promo(1045,promoidx);
    if(promoidx==-1){
      slide_promo(0,promoidx);
      promoidx=0;
    }
  })

  $(".promo_ul .pr_nxt").click(function(){
    promoidx++;
    slide_promo(1045,promoidx);
    if(promoidx==5){
      slide_promo(0,promoidx);
      promoidx=0;
    }
  })

// 슬라이드 함수들
function slide(m,n){
  var k= -m*(n);
  $(".main_slider_items").stop().animate({marginLeft:k},500)
}
function slide2(m,n){
  var k= -m*(n);
  $(".notice_slider_items").stop().animate({left:k},500)
}
function slide3(m,n){
  var k= -m*(n);
  $(".news_video_slider_items").stop().animate({left:k},500)
}
function slide_promo(m,n){
  var k= -m*(n);
  $(".promo_slider_items").stop().animate({left:k},500)
}

// 5-1 공지사항 클릭시 해당 인덱스 리스트 보이기
$(".notice_title_h2 h2").each(function(i,e){
  $(this).index();
  var ntH2 = $(".notice_title_h2 h2").eq(i);
  var list = $(".notice_title div").eq(i+1);
  $(".notice_title div").eq(1).css("display","block");
  $(ntH2).click(function(){
    $(".notice_title div").not(".notice_title_h2").css("display","none");
    $(list).css("display","block");
  })
})

//6-1 SNS 클릭시 해당 인덱스 보이기
$(".news_sns_list li").each(function(i,e){
  $(this).index();
  var ntH2 = $(".news_sns_list li").eq(i);
  var list = $(".news_sns div").eq(i);
  $(ntH2).click(function(){
    $(".news_sns div").not(this).css("display","none");
    $(list).css("display","block");
  })
})

}) //메인 스크립트 닫기
