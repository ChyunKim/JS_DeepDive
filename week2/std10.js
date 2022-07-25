// 일급객체 (first-class citizen)
/*
    일급객체 조건
    1. 무명의 리터럴로 생성가능 => 런타임에 생성 가능
    2. 변수나 자료구조(객체, 배열)등에 저장 가능
    3. 함수의 매개변수에 전달 가능
    4. 함수의 반환값으로 사용 가능
*/

// 1. 함수는 무명의 리터럴로 생성 가능
// 2. 함수는 변수에 저장 가능
// 런타임 (할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당
const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

// 2. 함수 객체에 저장 가능
const axus = {increase, decrease}

// 3. 함수는 매개변수에게 함수를 전달 가능
// 4. 함수의 반환값으로 사용 가능
function makeCounter(aux) {
    let num = 0;

    return function() {
        num = aux(num);
        return num;
    }
}


