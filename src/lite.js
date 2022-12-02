var collection = {
    a: [1,2,3],
    filter: function (predicate) {
        for(var x = 0; x < a.length; x++) {
            if(predicate(a[x])) {
                return a[x]
            }
        }
    }
}
var person = {
    name: "akl",
    surname: "asdf"
};

alert(person.name)

var arr2 = [1,2,3]
function is2(x) {
    return x == 2;
}
collection.filter(is2)





