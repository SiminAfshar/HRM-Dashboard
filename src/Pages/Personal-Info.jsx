import { useState } from "react";
import SearchIcon from "../Images/search.svg";
import "../Styles/Personal-Info.css";
import arrowRight from "../Images/svg/arrowRight.svg";
import arrowLeft from "../Images/svg/arrowLeft.svg";

const PersonalInfo = () => {


  const headData = [
    {hokmCodeTitr:"کد حکم", sharhHokmTitr: "شرح حکم", ejraDataTitr: "تاریخ اجرا", sodurDataTitr: "تاریخ صدور", details: "جزئیات"} 
  ]

  const [data, setData] = useState([
    {hokmCode: 13, sharhHokm: "ارزیابی عملکرد", ejraData: "1403/08/14", sodurData: "1403/08/30", icon: SearchIcon },
    {hokmCode: 63, sharhHokm: "افزایش سنوات", ejraData: "1403/06/15", sodurData: "1403/07/30", icon: SearchIcon },
    {hokmCode: 200, sharhHokm: "مرخصی بدون حقوق", ejraData: "1403/02/30", sodurData: "1403/04/05", icon: SearchIcon },
    {hokmCode: 8, sharhHokm: "افزایش سالیانه", ejraData: "1403/01/01", sodurData: "1403/02/30", icon: SearchIcon },
    {hokmCode: 43, sharhHokm: "اضافه مزایا", ejraData: "1402/02/01", sodurData: "1402/05/30", icon: SearchIcon },
    {hokmCode: 13, sharhHokm: "ارزیابی عملکرد", ejraData: "1402/09/23", sodurData: "1402/03/12", icon: SearchIcon },
    {hokmCode: 12, sharhHokm: "ارزیابی آزمون", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 142, sharhHokm: "کاهش ریسک", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 8, sharhHokm: "افزایش سالیانه", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 200, sharhHokm: "مرخصی بدون حقوق", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 153, sharhHokm: "مهارت سنجی", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 12, sharhHokm: "ارزیابی آزمون", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 43, sharhHokm: "اضافه مزایا", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
    {hokmCode: 8, sharhHokm: "افزایش سالیانه", ejraData: "1402/01/01", sodurData: "1402/03/01", icon: SearchIcon },
  ])

  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 8

  const totalPages = Math.ceil(data.length / rowPerPage);

  const startIndex = (currentPage - 1) * rowPerPage;
  const currentData = data.slice(startIndex, startIndex + rowPerPage)

  const goToPage = (page) => {
    if(page > 0 && page <= totalPages) setCurrentPage (page)
  }

  return ( 
    <div className="personalInfo-container">
      <table>
        <thead>
          {headData.map((header) => (
            <tr>
              <th>{header.hokmCodeTitr}</th>
              <th>{header.sharhHokmTitr}</th>
              <th>{header.ejraDataTitr}</th>
              <th>{header.sodurDataTitr}</th>
              <th>{header.details}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {currentData.map((item, index) => (
          <tr>
            <td>{item.hokmCode}</td>
            <td>{item.sharhHokm}</td>
            <td>{item.ejraData}</td>
            <td>{item.sodurData}</td>
            <td><img src={item.icon} /></td>
          </tr>
          ))}
        </tbody>

        <div className="pagination-controls" style={{ marginTop: "2.5rem", textAlign: "center" }}>
          
            <img src={arrowRight} onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
            
          <span style={{ margin: "0 15px" }}>
            صفحه {currentPage} از {totalPages}
          </span>

          <img src={arrowLeft} onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />

        </div>
      </table>
    </div>
   );
}
 
export default PersonalInfo;