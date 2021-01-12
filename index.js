function wakeDog(dogName, dogBreed) {
    let response = `Wake ${dogName} the ${dogBreed}`;
    return response;
  }

function leashDog(dogName, dogBreed) {
    let response = `Leash ${dogName} the ${dogBreed}`;
    return response;
}

function walkToPark(dogName, dogBreed) {
    let response = `Walk to the park with ${dogName} the ${dogBreed}`;
    return response;
}

function throwFrisbee(dogName, dogBreed) {
    let response = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return response;
}

function walkHome(dogName, dogBreed) {
    let response = `Walk home with ${dogName} the ${dogBreed}`;
    return response;
}

function unleashDog(dogName, dogBreed) {
    let response = `Unleash ${dogName} the ${dogBreed}`;
    return response;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let exerciseArr = []
    for(let i = 0; i < routine.length; i++) {
        exerciseArr.push(routine[i](dogName, dogBreed))
    }
    return exerciseArr;
}
