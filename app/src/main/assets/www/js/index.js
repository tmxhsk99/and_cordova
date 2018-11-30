var app = {
    initialize: ()=> {
        app.onCreate();
    },

    onCreate: ()=> {
        app.setContentView();
        var onBtn = $('#onBtn');
               var offBtn = $('#offBtn');
               var bulbimg= $('#bulbimg');
               window.addEventListener("load",()=>{
                    bulbimg
                    .attr('src','https://www.w3schools.com/js/pic_bulboff.gif' )
                    .css('width','100px');
               });
               onBtn.click(()=>{
                    bulbimg
                    .attr('src','https://www.w3schools.com/js/pic_bulbon.gif')
                    .css('width','100px');

               });
               offBtn.click(()=>{
                    bulbimg
                    .attr('src','https://www.w3schools.com/js/pic_bulboff.gif' )
                    .css('width','100px')
                    ;
                    app.member.onCreate();
               });

    },

    setContentView : () =>{
       $('#app').html('<div id="box"><button id="onBtn">ON</button>'+
                   '<img id="bulbimg"/>'+
                   '<button id="offBtn">OFF</button></div>')
                   ;
       $('#box').css('margin-top','100px');

    }
};

app.initialize();

app.member =(()=>{
    var onCreate =()=>{
        setContentView();
        $('#arrow-box').click(e=>{
            e.preventDefault();
            var uid =$('#id').val();
            var pass =$('#password').val();
            $.ajax({
                url : "member.json",
                contentType : "text/plain:charset=utf-8",
                type : "GET",
                data : {uid : uid, pass : pass},
                dataType : 'json',
                success : d => {
                    $.each(d,(i,o)=>{
                         if(o.uid === uid && o.pass === pass){
                            checkval = true;
                            return false;
                         }else{
                            checkval =false;
                         }
                    });
                    if(checkval === true){
                           alert("로그인 성공");
                        //app.list.onCreate();
                    }else{
                        alert("로그인 실패 ");
                        $('#id').val('');
                        $('#password').val('');
                    }
                }
            });
        });
    }
    var setContentView =()=>{
        $('#app').empty();
        $('<div/>').attr('id','wrapper').appendTo($('#app'));
        $('#wrapper')
            .css({
                   'width':'100%',
                   'height':'100%',
                   'padding':'5%'
            })
            .html(
                             '<header>' +
                            '  <div id="back-btn">' +
                            '       <span class="arrow arrow-left"></span>' +
                            '           <div><span class="pw-guide">비밀번호가 생각나지 않으세요?</span></div>' +
                            '  </div>' +
                            '  </header>'+
                            '  <div id="container"><p>로그인</p></div>'+
                            '  <div id="content">' +
                                '  <div class="login-guide">' +
                                    '  <span>이메일 주소</span><br>' +
                                    '  <input type="text" id="id" class="id" placeholder="ID를 입력하세요"/><br>' +
                                '  </div>' +
                            '      <div class="login-guide">' +
                            '          <span>비밀번호</span><br>' +
                            '          <input type="password" id="password" class="password" placeholder="비밀번호를 입력하세요"/><br>' +
                            '      </div>' +
                            '  </div>'+
                            '<footer>' +
                            '   <div id="arrow-box">' +
                            '       <div id="arrow-box2">' +
                            '           <a id="arrow-a" href="#">' +
                            '               <span class="right">로그인</span>' +
                            '           </a>' +
                            '       </div>' +
                            '   </div>' +
                            '</footer>'
            );
            $('header')
                        .css({
                            'position': 'relative',
                            'width': '100%',
                            'padding':'0'
                    });
                    $('.arrow')
                        .css({
                            'box-shadow': '2px -2px 0 0 white inset'
                    });
                    $('#container')
                        .css({
                            'font-size': '2.5em',
                            'color': 'white',
                            'padding': '5px',
                            'margin-top': '20px'
                        });
                    $('footer')
                        .css({
                            'position': 'absolute',
                            'bottom': '1.5em',
                            'right': '2.5em'
                    });
    }
    return {onCreate : onCreate};
})();
