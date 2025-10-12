export const validateFormCheck = ({idRef, pwdRef, setErrors, errors}) => {
    if(idRef.current.value === "") {
        setErrors({...errors, id: "아이디를 입력해주세요."});
        idRef.current.focus();
        return false;
    }else if(pwdRef.current.value === "") {
        setErrors({...errors, pwd: "비밀번호를 입력해주세요."});
        pwdRef.current.focus();
        return false;
    }
    return true;
}