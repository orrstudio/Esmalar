// NEXT SOUND PLAY WITH STOP CURRENT SOUND SCRIPT //
document.addEventListener("play", function (e) { for (var t = document.getElementsByTagName("audio"), a = 0, n = t.length; a < n; a++) t[a] != e.target && t[a].pause() }, !0)

// PLAY SOUND SCRIPT //
$(document).ready(function(){
    $('[source]').on('click',
    function(){change( $(this).attr('source'));});});  
    function change(sourceUrl) {
    var audio = document.getElementById("player"),
    source = document.getElementById("mp3_src");
    source.src = sourceUrl;
    audio.load();
    audio.play(); }
    
// STOP SOUND SCRIPT //
    function AllSoundOff() {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();};