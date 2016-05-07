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

    var day = new Date();
      
    $.ajax({
      type: 'POST',
      dataType:'text',
      url:'./js/api.php',
      data:{
        item:day
      },
      success:function(data) {
        // 画面遷移
        location.href = "menu.html";
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error : ' + errorThrown);
          //console.log(XMLHttpRequest.responseText);
      }
    });      
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
        if(data == null){
            alert('データが0件でした');
        } 
          
        for (var i =0; i<data.length; i++){           
            $("#articletable").append(
                $("<tr></tr>")
                    .append($("<th></th>").text(data[i].id))
                    .append($("<td></td>").text(data[i].name))
            );
        }
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error : ' + errorThrown);
        console.log(XMLHttpRequest.responseText);
      }
    });            

}

function hoge(){
    location.href = "report.html";
}

function hoge2(){
    location.href = "sample.html";
}
