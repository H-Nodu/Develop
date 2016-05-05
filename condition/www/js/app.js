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
/**/    
  ret = confirm("Yahoo!Japanへ飛びます。宜しいですか？");
  if (ret == true){
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
        //location.href = "http://www.yahoo.co.jp/";

        // 画面遷移
        location.href = "test.html";
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error : ' + errorThrown);
          //console.log(XMLHttpRequest.responseText);
      }
    });      
      
  }
/**/
}        

function loadHello(){

    var day = new Date();
      
    $.ajax({
      type: 'POST',
      dataType:'json',
      url:'./js/db.php',
      data:{
        item:day
      },
      success:function(data, dataType) {
        //結果が0件の場合
        if(data == null) alert('データが0件でした');

        //返ってきたデータの表示
        var $content = $('#content');
        for (var i =0; i<data.length; i++) 
        {
            $content.append("<li>" + data[i].name + "</li>");
        }          
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error : ' + errorThrown);
        console.log(XMLHttpRequest.responseText);
      }
    });            
}
