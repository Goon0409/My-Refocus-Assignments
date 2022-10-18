var pulseReading = 78;
var pulseRate = 78;


function pulseOximeterReader(pulseReading){
    if(pulseReading >= 96){
        console.log("Normal reading.");
    }else if(pulseReading === 95){
        console.log("Acceptable to continue home monitoring.");
    }else if((pulseReading === 93) || (pulseReading === 94)){
        console.log("Seek advice from health professionals.");
    }else if(pulseReading <= 92){
        console.log("Seek urgent medical advice.");
    }
}

function pulseRateReader(pulseRate){
    if((pulseRate >= 40) && (pulseRate <= 100)){
        console.log("Normal reading.");
    }else if((pulseRate >= 101) && (pulseRate <= 109)){
        console.log("Acceptable to continue home monitoring.");
    }else if((pulseRate >= 110) && (pulseRate <= 130)){
        console.log("Seek advice from health professionals.");
    }else if(pulseRate >= 131){
        console.log("Seek urgent medical advice.");
    }else{
        console.log("No data found.");
    }
}


pulseOximeterReader(pulseReading);
pulseRateReader(pulseRate);