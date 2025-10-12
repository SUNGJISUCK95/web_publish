import { FaRegUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLogin } from "../feature/auth/authAPI.js";

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [formData, setFormData] = useState({id:'', pwd:''});
    const [errors, setErrors] = useState({id:'', pwd:''});

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value});
        setErrors({id:'', pwd:''});
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const param = {
            idRef: idRef,
            pwdRef: pwdRef,
            setErrors: setErrors,
            errors: errors
        }
        
        const succ = await dispatch(getLogin(formData, param));

        if(succ) {
            alert("로그인에 성공하셨습니다.");
            navigate("/");
        }else {
            alert("로그인에 실패하였습니다. 재입력 해주세요.");
            idRef.current.focus();
        }
    }

    return(
        <div className="content"> 
            <div className="center-layout login-form">
                <form onSubmit={handleLoginSubmit}>
                    <ul>
                        <li>
                            <div className="login-form-input">
                                <FaRegUser />
                                <input type="text"
                                       name="id"
                                       value={formData.id}
                                       ref={idRef}
                                       onChange={handleFormChange}
                                       placeholder="아이디를 입력해주세요" />
                            </div>
                            <span style={{color:"red", fontSize:"0.8rem"}}>{errors.id}</span>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <FaLock />
                                <input type="password"
                                       name="pwd"
                                       value={formData.pwd}
                                       ref={pwdRef}
                                       onChange={handleFormChange}
                                       placeholder="패스워드를 입력해주세요" />
                            </div>
                            <span style={{color:"red", fontSize:"0.8rem"}}>{errors.pwd}</span>
                        </li>
                        <li>
                            <button type="submit"
                                    className="btn-main-color"
                                    >로그인</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}