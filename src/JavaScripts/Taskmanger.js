import { useState } from "react";
import "../Styles/Taskmanager.css"

const Taskmanager = ({filter}) => {

    const [tasks] = useState ([
        {id:1, taskName:"ثبت گواهی", details:"گواهی اشتغال مامورین به خدمت ثبت شد و به اداره مالیات ارسال شد", personelCode:"2403", date:"1403/09/04", status:1, statusName:"انجام گرفته" },
        {id:2, taskName:"اسناد ضمانت", details:"", personelCode:"2211", date:"1403/09/01", status:0, statusName:"در حال بررسی" },
        {id:3, taskName:"ماموریت", details:"", personelCode:"2098", date:"1403/09/02", status:0, statusName:"در حال بررسی" },
        {id:4, taskName:"ثبت گواهی", details:"گواهی ها در سیستم امور مالی ثبت گردید", personelCode:"2098", date:"1403/08/30", status:1, statusName:"انجام گرفته" },
        {id:5, taskName:"استخدام مامورین", details:"مامورین خدمت با شرکت قرارداد بستند", personelCode:"2302", date:"1403/08/29", status:1, statusName:"انجام گرفته" },
        {id:6, taskName:"اسناد ضمانت", details:"", personelCode:"2458", date:"1403/09/03", status:0, statusName:"در حال بررسی" },
    ])

    const handleTask = filter === 2 ?tasks :tasks.filter(task => task.status === filter)

    const [isOpen , setItOpen] = useState(null);

    const openPopup = (task) => {
        setItOpen(task);
    }

    const closePopup = (task) => {
        setItOpen(null);
    }

    return(
        <div className="Taskmanager">
            {handleTask.map(tasks => (
                <div onClick={openPopup} className="tasklist" id={tasks.id}>
                    <div className="taskName">{tasks.taskName}</div>
                    <div className="details">{tasks.details}</div>
                    <div className="personelCode">{tasks.personelCode}</div>
                    <div className="date">{tasks.date}</div>
                    <div className="statusName">{tasks.statusName}</div>
                </div>
            ))}

            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-popup" onClick={closePopup}>
                            ×
                        </button>
                        <h3>جزئیات وظیفه</h3>
                        <p><strong>نام وظیفه:</strong> {isOpen.taskName}</p>
                        <p><strong>جزئیات:</strong> {isOpen.details || "ندارد"}</p>
                        <p><strong>کد پرسنلی:</strong> {isOpen.personelCode}</p>
                        <p><strong>تاریخ:</strong> {isOpen.date}</p>
                        <p><strong>وضعیت:</strong> {isOpen.statusName}</p>
                    </div>
                </div>
            )}
            

        </div>
    )   
}

export default Taskmanager;