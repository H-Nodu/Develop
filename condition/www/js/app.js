(function(){
  'use strict';

  var currentItem = {};

  $(document).on('pageinit', '#detail-page', function() {
    $('.item-title', this).text(currentItem.title);
    $('.item-desc', this).text(currentItem.desc);
    $('.item-label', this).text(currentItem.label);
    $('.add-note-action-item', this).click(function () {
        alert('dummy message');
    });
  });

  $(document).on('pageinit', '#list-page', function() {
    $('.item', this).on('click', function() {
      currentItem = {
        title : $('.item-title', this).text(),
        desc : $('.item-desc', this).text(),
        label : $('.item-label', this).text()
      };

      app.navi.pushPage('detail.html');
    });
  });

})();


function kakunin(){
  ret = confirm("Yahoo!Japanへ飛びます。宜しいですか？");
  if (ret == true){
    //location.href = "http://www.yahoo.co.jp/";
    //var day = $('input[name=date]').val();//インプット欄の日付を取得
      var day = new Date(); 
      
    $.ajax({
      type: 'POST',
      dataType:'text',
      url:'./js/api.php',
      data:{
        item:day
      },
      success:function(data) {
        alert(data);
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error : ' + errorThrown);
          //console.log(XMLHttpRequest.responseText);
      }
    });      
      
/*
    $.ajax({
      type: 'POST',
      dataType:'json',
      url:'api.php',
      data:{
        item:day
      },
      success:function(data) {
        alert(data);
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert("err");
      }
    });      
*/
  }
}        
