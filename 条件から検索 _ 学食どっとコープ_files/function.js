$(function(){
    $('#globalnav ul li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
    $('#fixnav ul li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
});

$(function(){
$(window).scroll(function(){
  if($(this).scrollTop()>180){
    $("#fixnav").removeClass("passive");
    $("#fixnav").addClass("active");
  }else{
    $("#fixnav").removeClass("active");
    $("#fixnav").addClass("passive");
  } 
});
});


$('.hidden_box .hidden_menu input:checkbox').on("change",function(){
  if ($(this).is(':checked')) {
        $("#result .hidden_menu").append("<div class=\"" + $(this).attr("id") + " menu_wrapper\"><div>" + $(this).parent().html() + "</div><div class='like_btn'><a href='#'>いいね！</a><span>10</span></div></div>");
        $("#result .hidden_menu ." + $(this).attr("id") + " input").prop("checked",true);
        $("#result .hidden_menu ." + $(this).attr("id") + " input").attr("id",$(this).attr("id") + "tray");
        $("#result .hidden_menu ." + $(this).attr("id") + " label").attr("for",$(this).attr("id") + "tray");
  } else {
    $("#result .hidden_menu ." + $(this).attr("id")).remove(); 
  }
});

$('.osusume .hidden_menu input:checkbox').on("change",function(){
  if ($(this).is(':checked')) {
        $("#result .hidden_menu").append("<div class=\"" + $(this).attr("id") + " menu_wrapper\"><div>" + $(this).parent().html() + "</div><div class='like_btn'><a href='#'>いいね！</a><span>10</span></div></div>");
        $("#result .hidden_menu ." + $(this).attr("id") + " input").prop("checked",true);
        $("#result .hidden_menu ." + $(this).attr("id") + " input").attr("id",$(this).attr("id") + "tray");
        $("#result .hidden_menu ." + $(this).attr("id") + " label").attr("for",$(this).attr("id") + "tray");
  } else {
    $("#result .hidden_menu ." + $(this).attr("id")).remove(); 
  }
});

$(document).on("change","#result .hidden_menu input:checkbox",function(){
  var str = $(this).attr("id");
  var menu = str.slice(0,-4);
        $(".hidden_box .hidden_menu #" + menu).prop('checked',false);
        $(".osusume .hidden_menu #" + menu).prop('checked',false);
        $("#result .hidden_menu ." + menu).remove(); 
});



// ModalMenu
// -------------------------------------
$(function($) {
  $("#modalmenu").animatedModal({
    animatedIn:  'slideInRight', 
    animatedOut: 'slideOutRight', 
  });
});

//MENUをクリックしたらbody固定
$(function($) {
$( '#modalmenu' ).on( 'click', function(){
  current_scrollY = $( window ).scrollTop(); 

  $( 'body' ).css( {
    position: 'fixed',
    width: '100%',
    height:'auto',
    margin:'0',
    padding:'0 0 62px 0',
    top: -1 * current_scrollY
  } );
  $( '#btn-close-modal' ).css( {
    display:'block'
});
  $( '#animatedModal' ).show();

} );
} );

//MENU閉じたらbody固定解除
$(function($) {
$('#btn-close-modal').on('click', function(){
    $( 'body' ).attr( { style: '' } );
    $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    $( this ).hide();
});
});


/*
//モーダルウィンドウ
$(function() {
    $( 'a[rel*=leanModal]').leanModal();
});
*/
jQuery(function($){
$(".fancybox-inline").fancybox();
});


//
$(function($) {
$(document).ready(function() {
    if("#fair1" == location.hash) {
        $('input[name=tab_item]:eq(0)').prop('checked', true);
    } else if("#fair2" == location.hash) {
        $('input[name=tab_item]:eq(2)').prop('checked', true);
    } else {
      $('input[name=tab_item]:eq(1)').prop('checked', true);
    }
});
});