import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { validateFormCheck } from "../utils/validate.js";
import { useAuth } from "../hooks/useAuth.js";
import { AuthContext } from "../context/AuthContext.js";

export function Login() {
    const { isLogin } = useContext(AuthContext);
    console.log("isLogin ==> ", isLogin);
    
    const { handleLogin } = useAuth();
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const navigate = useNavigate();
    
    const initForm = { id:"", pwd:"" };
    const [formData, setFormData] = useState(initForm);
    const [errors, setErrors] = useState(initForm);

    const handleFormChange = (event) => {
        // console.log(`--> ${event.target}`);
        
        const {name, value} = event.target;

        setFormData({...formData, [name]: value});

        setErrors(initForm);
    }

    console.log(formData);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        
        const param = {
            idRef: idRef,
            pwdRef: pwdRef,
            errors: errors,
            setErrors: setErrors
        }

        if(validateFormCheck(param)) {
            // console.log('서버전송 --> ', formData);   
            const did = "test";
            const dpwd = "1234";
            if(did === formData.id && dpwd === formData.pwd){
                handleLogin(formData.id);
                alert("로그인에 성공하였습니다.");                
                navigate("/"); //navigate로 경로를 지정해 이동 // "/"는 메인페이지 이동
            } else {
                alert("로그인 실패, 확인 후 다시 진행해주세요.");
                idRef.current.focus();
            }
        }
        
    }
    
    return(
        <div className="content">
            <div className="center-layout login-form">
                <h1 className="center-title">로그인</h1>
                <form onSubmit={handleLoginSubmit}>
                    <ul>
                        <li>
                            <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <i className="fa-regular fa-user"></i>
                                <input  type="text" 
                                        name="id" 
                                        value={formData.id} 
                                        ref={idRef} 
                                        onChange={handleFormChange} 
                                        placeholder="아이디를 입력해주세요" />
                            </div>
                            <span style={{color: "red", fontSize: "12px"}}>{errors.id}</span>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <i className="fa-solid fa-lock"></i>
                                <input  type="password" 
                                        name="pwd" 
                                        value={formData.pwd} 
                                        ref={pwdRef} 
                                        onChange={handleFormChange} 
                                        placeholder="비밀번호를 입력해주세요"/>
                            </div>
                            <span style={{color: "red", fontSize: "12px"}}>{errors.pwd}</span>
                        </li>
                        <li>
                            <button type="submit"
                                    className="btn-main-color"
                                    >로그인</button>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" name="status"/>
                                <label for="">아이디 저장</label>
                            </div>
                            <div>
                                <a href="#">아이디 찾기</a> 
                                <span>&gt;</span>
                                <a href="#">비밀번호 찾기</a> 
                                <span>&gt;</span>
                            </div>
                        </li>
                        <li>
                            <button className="btn-main-color-naver">네이버 로그인</button>
                        </li>
                    </ul>
                    <div>
                        <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt=""/>
                    </div>
                </form>
            </div>
        </div>
    );
}


