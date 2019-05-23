// private variable 비밀변수
// 클로저보다 조금 더 실용적이라네요.

function factory_movie(title) {
    return {
        get_title : function () {
            return title;
        },
        set_title : function (_title) {
            title = _title
        }
    }
}
ghost = factory_movie('ghost in th shell');
matrix = factory_movie('matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());
ghost.set_title('공각기동대');

console.log(ghost.get_title());
console.log(matrix.get_title());

// set_title 로 변수를 수정하고
// get_title 로 불러올 수 있다.
// title 이라는 매개변수가 안전하게 수정되고 안전하게 사용될 수 있다.