$(function(){
    
    $('#play-pause, #video').click(function(){
        if (!$(event.target).is("#video-controls")) {
           if($('#video').get(0).paused == true){
               $('#video').get(0).play();
               $('#play-pause').html("<i class='fa fa-pause'></i>");
            } else{
               $('#video').get(0).pause();
               $('#play-pause').html("<i class='fa fa-play'></i>");
            }
        }
    });
    
    $('#mute').click(function(){
        if($('#video').prop('muted')){
           $('#video').prop('muted', false)
           $('#mute').html("<i class='fa fa-volume-up'></i>");
        } else{
           $('#video').prop('muted', true)
           $('#mute').html("<i class='fa fa-volume-off'></i>");
        }
    });
    
    $('#exit-screen').hide();
    
    $('#full-screen').click(function(){
        $('#exit-screen').show();
        $('#full-screen').hide();
        if (screenfull.enabled) {
            $('#video-player, #video').css('width','100%');
            $('#video-player, #video').css('height','100%');
            screenfull.toggle($('#video-player')[0]);
        }
    });
    
    $('#exit-screen').click(function(){
        screenfull.exit();
        $('#video-player, #video').css('width','640px');
        $('#video-player, #video').css('height','365px');
        $('#exit-screen').hide();
        $('#full-screen').show();
    });
    
    $('#seek-bar').click(function(){
        var video = document.getElementById("video");
        var time = video.duration * (this.value / 100);
        video.currentTime = time;
    });
    
    $('#video').bind('timeupdate', function(){
        var value = (100 / this.duration) * this.currentTime;
        $('#seek-bar').val(value);
        if($('#video').get(0).paused == true){
            $('#play-pause').html("<i class='fa fa-play'></i>");
        }
    })
    
    $('#volume-bar').change(function(){
        $('#video').prop('volume', $(this).val());
    });

});