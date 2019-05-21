let father = {
    familyName: '김',
    name: '서현',
    blood: 'A',
    sayName() {
        return this.familyName + this.name;
    }
};
let son = {
    name: '유신',
    blood: 'O',
};
let daughter = {
    name: '미실',
    blood: 'AB'
}

son.__proto__ = father;
daughter.__proto__ = father;

console.log(son.familyName, daughter.familyName);
console.log(son.sayName(), daughter.sayName());