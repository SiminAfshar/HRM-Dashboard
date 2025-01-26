import '../Styles/MainPage.css';
import { Route,Router,Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Chart from '../Pages/Charts';
import PersonalInfo from '../Pages/Personal-Info';
import EmploymentContract from '../Pages/Employment-Contract';
import PaySlip from '../Pages/PaySlip';
import LeaveRequest from '../Pages/Leave-Info';
import ChangePassword from '../Pages/Change-Password'
import SendTicket from '../Pages/Ticket';


const MainPage = () => {
    return ( 

        <div className='mainPage'>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path="/Charts" element={<Chart />} />
                <Route path="/Personal-Info" element={<PersonalInfo />} />
                <Route path="/Employment-Contract" element={<EmploymentContract />} />
                <Route path="/PaySlip" element={<PaySlip />} />
                <Route path="/Change-Password" element={<ChangePassword />} />
                <Route path="/Leave-Info" element={<LeaveRequest />} />
                <Route path="/Ticket" element={<SendTicket />} />

            </Routes>
        </div>
     );
}
 
export default MainPage;