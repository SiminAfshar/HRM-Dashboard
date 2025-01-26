import { useState } from "react";
import "../Styles/Password.css"

const ChangePassword = () => {

    const [passwordValue , setPasswordValue] = useState("");

    const handleSave = () => {
        const password = passwordValue;
        setPasswordValue()
    }

    return ( 
        <div className="password-container">
            <div className="password-titr">
                <p>تغییر رمز کاربری</p>
            </div>
            <div className="password-form">
                <form>
                    <div>
                        <lable>رمز عبور: </lable>
                        <input
                            type="password"
                            
                        />
                    </div>
                    <div>
                        <lable>تکرار رمز عبور: </lable>
                        <input
                            type="password"
                            

                        />
                    </div>
                </form>
                
            </div>
            <div className="password-buttons">
                <button onClick={handleSave}>ذخیره</button>
                <button>خروچ</button>
            </div>
        </div>
    );
}
 
export default ChangePassword;