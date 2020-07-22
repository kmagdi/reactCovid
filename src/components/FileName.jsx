import React from 'react';

function FileName(){
        const URL="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/_DATE_.csv";
        const date=new Date()//mindig az aktualis datumal jon letre
        date.setDate(date.getDate()-1)//a tegnapi datum kell nekunk mindig
        const month=date.getMonth()+1   //mert a januarnak 0 felel meg
        const monthPaddid=month<10 ?  `0${month}` : month;
        const day=date.getDay();
        const dayPadded=day<10 ? `0${day}` : day;
        const yesterday= `${monthPaddid}-${dayPadded}-${date.getFullYear()}`;
        const yesterdayURL=URL.replace("_DATE_",yesterday);   
        return yesterdayURL;           
}
export default FileName;