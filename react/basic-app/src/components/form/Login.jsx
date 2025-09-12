import { useState, useRef } from "react";

export function Login() {
    // const DOM객체의 참조변수 = useRef();
    const idRef = useRef(null); //객체을 주소값을 가져옴 //초기엔 없으므로 null선언
    const passwordRef = useRef(null);

    const initForm = {id:"", password:""};
    const [form, setForm] = useState(initForm);

    const handleChangeFrom = (event) => { //event는 실행하는 input개체 자체를 가져온다.
        // console.log("id ---> ", event.target.value); //event.target.value는 변경한 값

        // 매개변수 event의 구조
        // {
        //     "event":{
        //         "target": {
        //             "name": "id",
        //             "value": "t"
        //         }
        //    }   
        // }
            
        console.log(`--> ${event.target}`);

        //const name = event.target.name;
        //const value = event.target.value;
        //위 두줄을 구조분해할당으로 변경하면
        const {name, value} = event.target;
        // console.log(name, value);

        setForm({...form, [name]: value}); //setForm({기존값, [변경위치]: 변경값}); //기존값과 [변경위치]를 비교하여 같은 위치인 변경값 적용
        // object라 {}로 감싸고 
        // form의 내용을 계속 변경되므로 ...(스프레드 연산자)로 표시하고
        // key값(name)과 value값(value)을 지정하여 해당부분 값 변경
    }

    // console.log(form);
    
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        // preventDefault()는 DOM 객체에 event값을 넘기는 것을 방지하는 기능 
        // DOM객체는 브라우저(서버)를 의미한다. 하지만 우리는 react에 넘겨서 처리해야된다.
        // preventDefault()로 인해 로그인버튼 눌러도 URL의 변경이 없음

        if(idRef.current.value === "") { //idRef값이 있는 태그의 속성 중 value값이 빈값("")이면
            alert("아이디를 입력해주세요."); //경고문 출력
            idRef.current.focus(); //idRef값이 있는 태그를 강조(focus)
        } else if(passwordRef.current.value === "") {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current.focus();
        } else {
            console.log('서버연동 전송데이터 --> ', form);        
        }
    }
    
    const handleFormReset = () => {
        setForm(initForm); //const initForm = {id:"", password:""}; 이므로 초기화 됨
    }

    return(
        <>
            <h1>Login</h1>
            <form name="login-form" onSubmit={handleSubmit}> {/*action의 경우 값을 서버로 그냥 넘기므로 react를 거치지 않는다. 그래서 onSubmit사용 */}
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text" name="id" value={form.id} ref={idRef} placeholder="ID를 입력해주세요." onChange={handleChangeFrom}/> 
                        {/*onChange는 값이 변경될때 마다 실행 ex) input에 a가 입력되어있는데 b를 추가입려하면 실행 */}
                        {/*value에 {id}를 넣어줌으로 써 useState로 바뀐값을 바로 value값으로 사용*/}
                        {/*ref는 주소값이다.*/}
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password" name="password" value={form.password} ref={passwordRef} placeholder="PW를 입력해주세요." onChange={handleChangeFrom}/>
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset" onClick={handleFormReset}>재입력</button>
                    </li>
                </ul>
            </form>
        </>
    );
}