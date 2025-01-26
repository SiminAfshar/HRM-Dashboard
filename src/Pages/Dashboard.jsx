import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';
import '../Styles/Dashboard.css';
import hourglass from '../Images/hourglass.png';
import calendarIcon from '../Images/calendar.png'
import calendar from '../Images/calender.webp';
import exports from '../Images/export.png';
import money from '../Images/money.png';
import Calendar from '../components/Calendar';
import Charts from '../components/charts';
import Taskmanager from '../JavaScripts/Taskmanger';
import Messages from '../JavaScripts/Mesaages';
import Shortcut from '../JavaScripts/Shortcut';


const Dashboard = () => {

    const [button, setButton] = useState([
        {id:1, name:"ساعات حضور در یک ماه",number:"2,780",image:hourglass, unit:"ساعت"},
        {id:2, name:"تعداد مرخصی گرفته شده در 6 ماه",number:"13",image:calendarIcon, unit:"روز"},
        {id:3, name:"ساعات غیبت در یک ماه",number:"1,500",image:exports, unit:"ساعت"},
        {id:4, name:"میانگین دریافتی در یک سال",number:"1,460,000",image:money, unit:"ریال"},
    ])

    const [taskFilter, setTaskFilter] = useState(2);

    return ( 
        <div className="dashboard">
            <div className="dashboard-container ">

                <div className="dashboard-container-first">
                    {button.map((item, index)=> (
                        <div className="dashboard-buttons " key={index}>
                            <div className="dashboard-button">
                                <div className="button-top">
                                    <div className="button-number">
                                        <p>{item.number}</p>
                                        <p>{item.unit}</p>
                                    </div>
                                    <div className="button-icon">
                                        <img src={item.image} />
                                    </div>
                                </div>
                                <div className="button-bottom">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dashboard-container-second">
                    <div className="dashboard-second-right col-6" >
                        <img src={calendar} style={{width:'100%'}} />
                    </div>
                    <div className="dashboard-second-left col-6">
                        <Charts />
                    </div>
                </div>
                <div className="dashboard-container-third">
                    <div className="dashboard-button-task">
                        <p>فیلتر بر اساس :</p>
                        <div className="task-inprogress" onClick={() => setTaskFilter(0)}>
                            <p>در حال بررسی</p>
                        </div>
                        <div className="task-done" onClick={() => setTaskFilter(1)}>
                            <p>انجام شده</p>
                        </div>
                    </div>
                    
                        
                    <Taskmanager filter={taskFilter}/>
                        
                    
                </div>
                <div className="dashboard-container-forth">
                    <div className="container-forth-right">
                        <div className="container-messages">
                            {Messages.map((msg) => {
                                return(
                                    <div className="messages">
                                        <div className='message-image'>
                                            <img src={msg.icon}/>
                                        </div>
                                        <div className='message'>
                                            <div className='message-top'>
                                                <div className='messages-name' >{msg.name}</div>
                                                <div className='messages-time' >{msg.time}</div>
                                            </div>
                                            <div className='message-bottom'>
                                                <div className='messages-details' >{msg.details}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container-forth-left">
                        {Shortcut.map((item) => {
                            return(
                                <div className="shortcut">
                                    <div className="shortcut-icon">{item.icon}</div>
                                    <div className="shortcut-name">{item.name}</div>
                                    <div className="shortcut-link">{item.link}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;