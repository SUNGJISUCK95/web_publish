/**
 * 함수에서 정의되는 함수, 무기명(anonymous) 함수
 */

//setTimeout 함수를 포함하고 있는 runDelay 함수 정의
function runDelay(callback, seconds) {
    setTimeout(callback, seconds);
}

runDelay(() => {
        console.log(`1초후 task queue 추가 --> 1`); // 4. setTimeout으로 비동기 방식이므로 callstack 작업이 끝난 후 3초후 실행
    }, 3000);
runDelay(function() {
    console.log(`바로 추가 --> 2`); // 2. callstack에서 heap영역에 있어서 2번 실행
});
runDelay(() => console.log(`1초후 task queue 추가 --> 3`), 1000); // 3. setTimeout으로 비동기 방식이므로 callstack 작업이 끝난 후 1초후 실행

console.log(`-- 종료 --`); // 1. callstack이여서 1번 실행
