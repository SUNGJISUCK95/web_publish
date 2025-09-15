import { useState, useRef } from "react";
import { validateLoginCheck } from "../../util/validate.js" 

export function Login2() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        msgIdRef: useRef(null),
        msgPassRef: useRef(null)
    }
    const [form, setForm] = useState({id:'', pass:''}); //폼의 입력데이터 저장
    const [msg, setMsg] = useState({id:'', pass:''});

    const handleChangeForm = (event) => { //handleChangeForm 이벤트가 일어난 값을 받아옴
        const { name, value } = event.target; //event값은 오브젝트(배열) 이기때문에 name과 value로 구조분할함
        setForm({...form, [name]:value}); // form에 name과 동일한 key의 값을 value로 업데이트
        // refs.msgIdRef.current.innerText = "";
        // refs.msgPassRef.current.innerText = "";
        setMsg({id:'', pass:''});
    }

    const handleRestForm = () => {
        setForm({id:'', pass:''}); //초기화 하려면 해당 값의 타입이 맞도록 해야한다.
    }

    const handleSubmit = (event) => {
        //서버전송
        event.preventDefault(); // preventDefault()는 브라우저(DOM 객체)에 event값을 넘기는 것을 방지하는 기능 
                                // 브라우저 이벤트 정지

        if(validateLoginCheck(refs, setMsg)) { //validateLoginCheck로 import해서 함수로 사용
            console.log("submit ==> ", form); //validateLoginCheck 함수에서 return받은 결과값이 true이면 실행

        }
    }

    console.log(form); //useState가 일어나는 부분은 함수 밖에서 값을 찍어주면 좋다.    

    return(
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <lable>아이디</lable>
                        <input type="text" name="id" value={form.id} ref={refs.idRef} onChange={handleChangeForm} />
                        <span ref={refs.msgIdRef}>{msg.id}</span>
                    <li>    
                    </li>
                        <lable>패스워드</lable>
                        <input type="password" name="pass" value={form.pass} ref={refs.passRef} onChange={handleChangeForm} />
                        <span ref={refs.msgPassRef}>{msg.pass}</span>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button type="button" onClick={handleRestForm}>Reset</button>
                    </li>
                </ul>
            </form>
        </>
    );
}