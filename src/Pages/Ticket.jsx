import "../Styles/Ticket.css"
import { useState } from "react";
import { useReducer } from "react";

const ticketReducer = (state, action) => {
    switch (action.value) {
        case "UPDATE": 
            return {
                ...state,
                form: {...state, [action.field]: action.value},
            }
        case "ADD-TICKET" :
            const newTicket = {
                id: state.tickets.length + 1,
                name: action.name,
                text: action.text,
                sendType: state.form.sendType,
                vaziat: "در حال بررسی",
            }
            return {
                ...state,
                tickets: [...state.tickets, newTicket],
                form: {ticketName: "" , sendType: "3", text: " "}
            }
        case "RESET" :
            return{
                ...state,
                form: {ticketName: "", sendType: "3", text: ""}
            }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}


const SendTicket = () => {
    const ticketReducer = (state, action) => {
        switch (action.value) {
            case "UPDATE": 
                return {
                    ...state,
                    form: {...state, [action.field]: action.value},
                }
            case "ADD-TICKET" :
                const newTicket = {
                    id: state.tickets.length + 1,
                    name: action.name,
                    text: action.text,
                    sendType: state.form.sendType,
                    vaziat: "در حال بررسی",
                }
                return {
                    ...state,
                    tickets: [...state.tickets, newTicket],
                    form: {ticketName: "" , sendType: "3", text: " "}
                }
            case "RESET" :
                return{
                    ...state,
                    form: {ticketName: "", sendType: "3", text: ""}
                }
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    }

    const initialState = {
        form: {
          ticketName: "",
          sendType: "3", // Default value
          text: "",
        },
        tickets: [], // Ticket history
      };
    
    const [state, dispatch] = useReducer(ticketReducer, initialState);

    const handleFieldChange = (field, value) => {
        dispatch({ type: "UPDATE", field, value });
    };

    const handleTicketSubmit = () => {
        const { ticketName, text } = state.form;
        if (!ticketName || !text) {
        alert("لطفا موارد را پر کنید");
        return;
        }
        dispatch({ type: "ADD-TICKET", name: ticketName, text });
    };

    return (
        <div className="ticket-container mx-auto w-75 mt-5">
          <div className="ticket-header w-75">
            <div className="ticket-header-container w-25">
              <p style={{ backgroundColor: "#ff5555" }} className="d-block">
                ارسال تیکت
              </p>
            </div>
          </div>
          <div className="ticket-body d-flex">
            <div className="ticket-body-container d-flex">
              <form className="d-flex flex-column gap-5 w-100">
                <div className="ticket-part-one align-items-center d-flex w-100">
                  <label style={{ width: "10%" }}>عنوان تیکت:</label>
                  <input
                    type="text"
                    name="title"
                    value={state.form.ticketName}
                    onChange={(e) =>
                      handleFieldChange("ticketName", e.target.value)
                    }
                  />
                </div>
                <div className="ticket-part-two d-flex w-100 justify-content-between">
                  <div className="d-flex align-items-center">
                    <label htmlFor="type">نوع درخواست: </label>
                    <select
                      id="type"
                      value={state.form.sendType}
                      onChange={(e) => handleFieldChange("sendType", e.target.value)}
                    >
                      <option value="1">پیشنهادات</option>
                      <option value="2">درخواست جدید</option>
                      <option value="3">اعلام اشکال سیستم</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center">
                    <label>فایل پیوست:</label>
                    <input type="file" />
                  </div>
                </div>
                <div className="ticket-part-three w-100 d-flex">
                  <label style={{ width: "10%" }}>توضیحات:</label>
                  <textarea
                    value={state.form.text}
                    onChange={(e) => handleFieldChange("text", e.target.value)}
                    style={{ width: "90%" }}
                    placeholder="متن پیام خود را در این بخش بنویسید..."
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <button className="send-button" onClick={handleTicketSubmit}>
            ارسال تیکت
          </button>
    
          {/* اطلاعات جدول تیکت های قبلی */}
          <div className="ticketHistory">
            <table>
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>عنوان تیکت</th>
                  <th>نوع درخواست</th>
                  <th>توضیحات</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {state.tickets.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.ticketName}</td>
                    <td>{item.sendType}</td>
                    <td>{item.text}</td>
                    <td>{item.vaziat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}
 
export default SendTicket;