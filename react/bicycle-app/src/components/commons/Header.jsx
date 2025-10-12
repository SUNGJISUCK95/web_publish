import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaBicycle } from "react-icons/fa";
import { getLogout } from '../../feature/auth/authAPI.js';

export function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.auth.isLogin);

    console.log(isLogin);
    const handleLogout = () => {
        const succ = dispatch(getLogout());
        const loginInfo = localStorage.getItem("loginInfo");
        if(succ && loginInfo === null) {
            alert("로그아웃 되셨습니다.");
            navigate("/");
        }
    }

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FaBicycle />
                </Link>
                <nav className='header-center'>
                    <Link to="/buy">구매</Link>
                    <Link to="/travel">여행</Link>
                    <Link to="/rental">대여</Link>
                </nav>
                <nav className='header-right'>
                    { isLogin &&
                        <Link to="/support">
                            <button type="button">고객지원</button>
                        </Link>
                    }
                    { !isLogin &&
                        <Link to="/login">
                            <button type="button">로그인</button>
                        </Link>
                    }
                    { isLogin &&
                        <button type="button" onClick={handleLogout}>로그아웃</button>
                    }
                </nav>
            </div>
        </div>
    );
}