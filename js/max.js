$(function(){
    
    $("button:first").click(function() {
        //背景音乐
        var audio1 = HTML5Audio('http://www.imooc.com/upload/media/one.mp3')
        audio1.end(function() {
            alert("音乐结束")
        })
    })
    $("button:last").click(function() {
        //循环播放那
        var url = 'http://www.imooc.com/upload/media/two.mp3';
        HTML5Audio(url, true);
    })

})

/**
 * 背景音乐
 * @param {[type]} url  [description]
 * @param {[type]} loop [description]
 */
function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        }
    }
}
