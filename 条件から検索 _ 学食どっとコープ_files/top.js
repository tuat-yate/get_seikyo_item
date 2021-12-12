$(function(){
var topBtn=$('#pagetop');
var scBtn=$('.menu_shortcut.p');
topBtn.hide();
scBtn.hide();

$(window).scroll(function(){
  if($(this).scrollTop()>80){

    topBtn.fadeIn();
    scBtn.fadeIn();
  }else{

    topBtn.fadeOut();
    scBtn.fadeOut();
  } 
});
 

topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});

});

//スムーズスクロール
jQuery(function(){
	var headerHight = 70;
   // #で始まるアンカーをクリックした場合に処理
   jQuery('.osusume a.button[href^=#],a.skip[href^=#]').click(function() {
	  // スクロールの速度
	  var speed = 400; // ミリ秒
	  // アンカーの値取得
	  var href= jQuery(this).attr("href");
	  // 移動先を取得
	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
	  // 移動先を数値で取得
	  var position = target.offset().top-headerHight;
	  // スムーススクロール
	  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
   });
});