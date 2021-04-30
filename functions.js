export function setCharge(value) {
    if (value >= 1 && value <= 3) {
        return './low-battery.png';
    }
    else if (value >= 4 && value <= 6) {
        return './medium-battery.png';
    } else if (value >= 7 && value <= 9) {
        return './high-battery.png';
    }
}
export function setMood(value) {
    if (value >= 1 && value <= 3) {
        return './sad.png';
    }
    else if (value >= 4 && value <= 6) {
        return './neutral.png';
    } else if (value >= 7 && value <= 9) {
        return './happy.png';
    }
}
export function setPoki(value) {
    if (value === 1) {
        return './bulbasaur.png';
    }
    else if (value === 2) {
        return './squirtle.png';
    } else if (value === 3) {
        return './charmander.png';
    }
}

export function setImage(pokemon) {
    if (pokemon === './bulbasaur.png') {
        return 'bulbasaur';
    } else if (pokemon === './squirtle.png') {
        return 'squirtle';
    } else if (pokemon === './charmander.png') {
        return 'charmander';
    }
}