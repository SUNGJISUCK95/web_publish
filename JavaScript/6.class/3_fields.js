/**
 * 클래스 정의시 필드(전역변수)는 생성자 함수에서 정의
 * 접근제어가 필요한 필드는 #을 붙여 필드 영역에 정의해야 함
 * 
 */
class Person {
    #empno;
    #name; 
    //#은 클래스 내부에서만 사용가능하도록 접근제어하는 것
    //사용할 때도 #을 붙여줘야 한다.
    //Java에서 private와 같은 제어 기능을 가진다.

    constructor(empno, name, emoji) {
        this.#empno = empno;
        this.#name = name; //this.전역변수
        this.emoji = emoji;
    }
    display = () => {
        console.log(this.#empno, this.#name, this.emoji);
    }
}
let hong = new Person('1234', '홍길동', '(╯°□°）╯︵ ┻━┻');
hong.display();
console.log(hong.empno);
console.log(hong.name);
console.log(hong.emoji);
