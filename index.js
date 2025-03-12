function findMatching(array, string){
    let list = [];
    for(const driver of array){
        if(driver.toLowerCase() === string.toLowerCase()){
            list.push(driver);
        }
    }
    return list;
}

function fuzzyMatch(array, string){
    let driverList = [];
    for(const driver of array){
        if(driver.charAt(0) === string.charAt(0)){
            driverList.push(driver);
        }
    }
    return driverList;
}

function matchName(array, string){
    const filteredList = array.filter(obj => obj.name.toLowerCase() === string.toLowerCase());
    return filteredList;
}