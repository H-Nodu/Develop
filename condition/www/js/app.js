
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
        /**/
        container = document.getElementById('example'),  //後ほど表を展開する要素を指定

        hot = new Handsontable(container, {      //以下はデータ指定と表示オプション
            data: data,            //さっき作ったdataを指定
            minSpareRows: 0,       //表の一番下にいくつ空行を表示するか
            fixedRowsTop: 0,
            fixedColumnsLeft: 0,
            cells: function (row, col, prop) {
                var cellProperties = {};
                cellProperties.readOnly = true;
                return cellProperties;
            },
            colHeaders: false,      //カラムの名前を表示するかどうか
            rowHeaders: false,
            contextMenu: true      //セルを右クリックしたときのメニューをすべて表示
        });

        function bindDumpButton() {    //以下は基本的にいじりません
            Handsontable.Dom.addEvent(document.body, 'click', function (e) {
                var element = e.target || e.srcElement;
                if (element.nodeName == "BUTTON" && element.name == 'dump') {
                  var name = element.getAttribute('data-dump');
                  var instance = element.getAttribute('data-instance');
                  var hot = window[instance];
                  console.log('data of ' + name, hot.getData());
                }
            });
        }
          
        bindDumpButton();    //関数実行
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error : ' + errorThrown);
        console.log(XMLHttpRequest.responseText);
      }
    });            

}

function hoge(){
    //location.href = "report.html";
}

function hoge2(){
    location.href = "report.html";
}

function hoge3(){
    location.href = "report.html";
}
