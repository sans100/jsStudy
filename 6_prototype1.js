// 프로토타입 (원형)
function bic (){}
bic.prototype.prop = true;

function mid (){}
mid.prototype = new bic();

function sml (){}
sml.prototype = new mid();

var o = new sml();
console.log(o.prop);