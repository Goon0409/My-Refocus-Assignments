function computeTip(foodPrice){
    let tip = .1;
    let totalTip = foodPrice * tip;
    return totalTip;
}

console.log(computeTip(1000));
