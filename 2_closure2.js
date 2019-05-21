function outter() {
    var title = 'coding everybody';
    return function() {
        console.log(title);
    }
}
var inner = outter();
inner();