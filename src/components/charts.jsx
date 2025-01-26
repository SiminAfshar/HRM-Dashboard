import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = () => {
    const data = [
        { month: 'Jan', salary: 4000, reng:0, morakhasi:3, ezafeKari:1, id:1 },
        { month: 'Feb', salary: 4200, reng:10, morakhasi:6, ezafeKari:3, id:2 },
        { month: 'Mar', salary: 4500, reng:20, morakhasi:7, ezafeKari:2, id:3 },
        { month: 'Apr', salary: 4800, reng:1000, morakhasi:2, ezafeKari:10, id:1 },
        { month: 'May', salary: 5000, reng:5000, morakhasi:5, ezafeKari:1, id:1 },
    ]
    return ( 
        
        <LineChart width={400} height={300} data={data} >
        {console.log(data)}
            
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="month" />
            <YAxis dataKey={data.reng}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="salary" stroke="#8884d8" name='1'/>
            <Line type="monotone" dataKey="morakhasi" stroke="#8884d8" name='2'/>
            <Line type="monotone" dataKey="ezafeKari" stroke="#8884d8"name='3'/>
        </LineChart>
     );
}
 
export default Charts;