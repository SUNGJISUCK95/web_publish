/**
 * 학생 클래스 정의
 * 필드 : #이름, #나이. #주소, #이모지
 * 메소드 : setter/getter, display
 */
let dataList = [
    {   name : '홍길동', age : 20, address : '서울시', emoji : '(*/ω＼*)' },
    {   name : '김철수', age : 20, address : '부산시', emoji : '(╯°□°）╯︵ ┻━┻' },
    {   name : '박영희', age : 20, address : '인천시', emoji : '(¬‿¬)' },
    {   name : '홍길순', age : 20, address : '수원시', emoji : '(*/ω＼*)' }
]
class Student {
    #name;
    #age;
    #address;

    constructor(name, age, address, emoji){
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    setName = (name) => this.#name = name;
    setAge = (age) => this.#age = age;
    setAddress = (address) => this.#address = address;
    setemoji = (emoji) => this.emoji = emoji;

    getName = () => this.#name;
    getAge = () => this.#age;
    getAddress = () => this.#address;
    getEmoji = () => this.emoji;

    display = () => console.log(this.#name, this.#age, this.#address, this.emoji);
}

let hong = new Student('홍길동', 20, '서울시', '(*/ω＼*)');
hong.display();

//dataList의 학생정보를 이용하여 objList를 생성
//objList에는 Student 클래스를 이용하여 객체 생성 주소 저장
let objList = [];
for(let i=0; i<dataList.length; i++) {
    let obj = dataList[i];
    objList.push(new Student(obj.name, obj.age, obj.address, obj.emoji));
}

let s1 = object[0];
console.log(s1.getName());
