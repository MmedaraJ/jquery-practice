$(document).ready(function(){
var dojo = ['dojo', 'mountai view', 'bootcamp'];

    console.log(dojo);

    $('a').click(function(){
        alert('You are now leaving this page!!');
    })
    $('p').hide();
    $('#hide').click(function(){
        $('p').hide();
    })
    $('#show').click(function(){
        $('p').show();
    })
    $('h3').hover(function(){
        $('h2').text('go see the Space Needle')
    })/* , function(){
        alert('new invoking the second function!')
    }) */
    $('.append').click(function(){
        $('.result').append('<h4>.append adds HTML!</h4>')
    })
    $('button').click(function(){
        $('button').css('background-color', 'yellow')
    })
})