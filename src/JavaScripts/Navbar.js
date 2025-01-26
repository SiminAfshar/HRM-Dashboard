    const navbar = [
        {id:1, name:"داشبورد", icon:"bi bi-list", Link:"/Dashboard"},
        {id:2, name:"کارگزینی", icon:"bi bi-person-workspace" , arrowIcon:"bi bi-chevron-compact-down", subMenu:[
            {name:"اطلاعات پرسنلی", Link:"/Personal-Info"},
            // {name:"قرارداد کار", Link:"/Employment-Contract"},
            {name:"فیش حقوقی", Link:"/PaySlip"}]},
        {id:3, name:"حضور و غیاب", icon:"bi bi-clock-history", arrowIcon:"bi bi-chevron-compact-down", subMenu:[
            {name:"درخواست مرخصی", Link:"/Leave-Info"}
        ]},
        {id:4, name:"چارت", icon:"bi bi-bar-chart-fill", Link:"/Charts"},
        {id:5, name:"تنظیمات سیستم", icon:"bi bi-gear" , arrowIcon:"bi bi-chevron-compact-down", subMenu:[
            {name:"تغییر رمز", Link:"/Change-Password"}
        ]}
        
    ]

    export default navbar;
