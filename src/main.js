$(document).ready(function (){

    const store = {
        amount: 0
    }

    var price = 100

    const apple = '#apple'
    const nemoloko = '#nemoloko'
    const latte = '#latte'

    function available(product) {
        const count = $(product + '_available').text()
        return count
    }
    function changeAvailable(product, value) {
        var span = $(product + '_available')
        span.text(value)
    }

    $(apple).on('click', function (){
        var count = available(apple)
        if (count > 0) {
            const next = count - 1
            changeAvailable(apple, next)
            if (next == 0) $(this).prop("disabled", true)
        }
        else {
            alert('apples are finished!!!')
            $(this).prop("disabled", true)
        }
    })

    $(nemoloko).on('click', function (){
        var count = available(nemoloko)
        if (count > 0) {
            const next = count - 1
            changeAvailable(nemoloko, next)
            if (next == 0) $(this).prop("disabled", true)
        }
        else {
            alert('nemoloko are finished!!!')
            $(this).prop("disabled", true)
        }
    })

    $(latte).on('click', function (){
        alert('buy latte button has been pressed. Available:  ' + available(latte))
    })

})