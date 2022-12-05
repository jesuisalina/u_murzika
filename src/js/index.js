const store = {}
const cost = {}

$(document).ready(function () {

    const fruits = "#fruits"
    const beverages = "#beverages"
    const inventory = "#inventory"

    $("#basket-form").dialog({
        autoOpen: false
    });

    $("#main").on('click', function () {
        $("#content").html('<br> <br> <img src="img/lulu.jpeg" height="300" width="500" title="lulu">')
    })

    $(fruits).on('click', function () {
        $("#content").load("list/fruits/fruits.html")
    })

    $(beverages).on('click', function () {
        $("#content").load("list/beverages/beverages.html")
    })

    $(inventory).on('click', function () {
        $("#content").load("list/inventory/inventory.html")
    })

    $('#basket').on('click', function (){
        function row(name, value, cost) {
            return "<tr><td>" + name + "</td><td>" + value + "</td><td>" + cost + "</td></tr>"
        }

        let content = ""
        $('#basket-form-content').html('')
        if (store.apple) {
            let appleRow = row("Яблоки", store.apple, cost.apple)
            $('#basket-form-content').append(appleRow)
            // content = appleRow
        }
        if (store.juice) {
            let juiceRow = row("Сок", store.juice, cost.juice)
            $('#basket-form-content').append(juiceRow)
            // content = content + juiceRow
        }

        if (store.skate) {
            let skateRow = row("Скейт", store.skate, cost.skate)
            $('#basket-form-content').append(skateRow)
         //  content = content + skateRow
        }

        // $('#basket-form-content').html(content)



        $('#basket-form').dialog("open")


        /*if(store.apple) {
            alert('Вы купили яблок в количестве: ' + store.apple + ' штук')
        }
        if(store.juice) {
            alert('Вы купили сок в количестве: ' + store.juice + ' штук')
        }
        if(store.skate) {
            alert('Вы купили скейт в количестве: ' + store.skate + ' штук')
        }
        if (store.apple===undefined && store.juice===undefined && store.skate===undefined) {
            alert('Ваша корзина пуста. Не обижайте Мурзика, купите хотя бы скейт! :)')
        }
        if (store.apple > 0 || store.juice > 0 || store.skate > 0) {
            alert('Мяу мяу! Мурзик доволен :)')
        }*/
    })
})

