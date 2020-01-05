// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let hQ = 42;
    let distance;
    if (block > hQ) {
        distance = block - hQ;
    } else {
        distance = hQ - block;
    }
    return distance
}

function distanceFromHqInFeet(block) {
    const blockDistance = 264;
    let distance = distanceFromHqInBlocks(block);
    return distance * blockDistance;
}

function distanceTravelledInFeet(start, finish) {
    const blockDistance = 264;
    let distance;
    if (start > finish) {
        distance = (start - finish) * blockDistance;
    }
    else {
        distance = (finish - start) * blockDistance;
    }
    return distance
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0
    } else if (distance >= 400 && distance < 2000){
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500){
        return 25
    } else if (distance > 2500) {
        return 'cannot travel that far'
    }
}

