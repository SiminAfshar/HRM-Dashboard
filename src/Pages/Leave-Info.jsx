import { useState, useEffect } from "react";
import "../Styles/LeaveInfo.css"


const LeaveRequest = () => {

    const [selectedValue, setSelectedValue ] = useState ("")

    const handleRadioSelect = (value) => {
        setSelectedValue(value)
    }

    const leaveTypes = [
        { id: "مرخصی استحقاقی", label: "مرخصی استحقاقی" },
        { id: "مرخصی استعلاجی", label: "مرخصی استعلاجی" },
        { id: "مرخصی بدون حقوق", label: "مرخصی بدون حقوق" },
    ];

    const [startDay, setStartDay] = useState();
    const [endDay, setEndDay] = useState();
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if(startDay && endDay) {
            const start = new Date(startDay);
            const end = new Date(endDay);

            const differenceInTimes = end - start;
            const differenceInDay = differenceInTimes / (1000 * 3600 * 24);

            if (differenceInDay >= 0) {
                setDuration(differenceInDay + 1)
            }else{
                setDuration(0)
            }
        }
    }, [startDay, endDay])
    

    const [activeTab , setActiveTab] = useState("Daily")
    

    const resteData = () => {
        setSelectedValue("option-one");
        setStartDay();
        setEndDay();
        setDuration(0)
    }

    const [morakhasiList, setMorakhasiList] = useState([
        {id:"", sharhMorakhasi: "", morakhasiDuration: "", morakhasiType:"", confirm: "", },
    ])

    const handleSave = () => {
        const EntiryValue = 
            {
                id: morakhasiList.length ,
                sharhMorakhasi: SharhMorakhasi,
                morakhasiDuration: duration,
                morakhasiType: selectedValue,
                confirm: "true",

            };
        setMorakhasiList([...morakhasiList, EntiryValue])
        
    }

    const [SharhMorakhasi, setSharhMorakhsi] = useState("")

    return ( 
        <div className="leaveRequest-container">
            <div className="switch-tab">
                <div className="leave-request-buttons-container">
                    <button className={`daily-Morakhasi ${activeTab === "Daily" ? "active" : ""}`} onClick={() =>setActiveTab("Daily")}>مرخصی روزانه</button>
                    <button className={`hourly-Morakhasi ${activeTab === "Hourly" ? "active" : ""}`} onClick={() =>setActiveTab("Hourly")}>مرخصی ساعتی</button>
                </div>
            </div>
            <div className="main-tab">
                {activeTab === "Daily" && (
                    <div className="leave-request-form-daily w-100 gap-5 flex-column d-flex">
                        <div className="daily-part-one my-2">
                            <div className="daily-one">
                                <div>
                                    <p>نام پست سازمانی:</p>
                                </div>
                                <div>
                                    <p>واحد سازمانی:</p>
                                </div>
                            </div>

                            <div className="daily-two">
                                <form>
                                    <label>نوع مرخصی: </label>
                                    {leaveTypes.map((type) => (
                                        <div key={type.id}>
                                            <label htmlFor={type.id}>{type.label}</label>
                                            <input
                                                type="radio"
                                                name="leaveType"
                                                id={type.id}
                                                checked={selectedValue === type.id}
                                                onChange={() => handleRadioSelect(type.id)}
                                            />
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </div>
                        <div className="daily-part-two d-flex">
                            <div className="w-50 d-flex gap-2 align-items-center">
                                <p className="m-0">مدت مرخصی:</p>
                                <input
                                    className="morakhasi-duration" 
                                    type="number" 
                                    name="duration" 
                                    id="duration"
                                    value={duration}
                                    readOnly />
                            </div>
                            <div className="daily-date w-50 d-flex gap-2 align-items-center">
                                <p className="m-0">تاریخ مرخصی:</p>
                                از
                                <input 
                                    className="morakhasi-duration" 
                                    type="date" 
                                    name="Date" 
                                    value={startDay}
                                    onChange={(e) =>{
                                        setStartDay(e.target.value);
                                    }} />
                                تا
                                <input
                                    className="morakhasi-duration" 
                                    type="date"
                                    name="endDay"
                                    value={endDay}
                                    onChange={(e) => {
                                        setEndDay(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="daily-part-three">
                            <form className="d-flex flex-column gap-3">
                                <label className="ml-2 m-0">شرح مرخصی: </label>
                                <textarea 
                                    className="textarea"
                                    value={SharhMorakhasi}
                                    onChange={(e) => setSharhMorakhsi(e.target.value)}
                                >

                                </textarea>
                            </form>
                        </div>
                        <div className="daily-part-four mt-5">
                            <button onClick={handleSave} className="daily-save" >ذخیره</button>
                            <button onClick={resteData} className="daily-new" >جدید</button>
                        </div>
                        <div className="daily-part-five mt-5">
                            <table>
                                <thead>
                                    <tr className="d-flex">
                                        <th></th>
                                        <th>شرح مرخصی</th>
                                        <th>مدت مرخصی</th>
                                        <th>نوع مرخصی</th>
                                        <th>تائید</th>
                                        <th>تاریخ ثبت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {morakhasiList.map((item, index) => (
                                        <tr key={index} className="d-flex justify-content-between">
                                            <td>{item.id}</td>
                                            <td>{item.sharhMorakhasi}</td>
                                            <td>{item.morakhasiDuration}</td>
                                            <td>{item.morakhasiType}</td>
                                            <td>{item.confirm}</td>
                                            <td>{Date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                )}

                {/* مرخصی ساعتی */}

                {activeTab === "Hourly" && (
                    <div className="leave-request-form-saati">
                        <h3>مرخصی ساعتی</h3>
                        <p>فرم مرخصی ساعتی در اینجا نمایش داده می‌شود...</p>
                        <div>
                            <label>مدت زمان مرخصی (ساعت):</label>
                            <input type="number" placeholder="مثلاً 4 ساعت" />
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default LeaveRequest;