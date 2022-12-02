"use strict"
$(document).ready(function (){
    const $apple = $('#apple')
    const $nemoloko = $('#nemoloko')

    $('#send-form').on('click', function (){
       $('#content').html(
           '<h3>Хороший выбор</h3> <p>Вы купили яблок ' + $apple.val() + '</p> '  + 'Немолоко '  + $nemoloko.val()
       )
    })
})