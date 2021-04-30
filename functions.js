export function setCharge(value) {
    if (value >= 1 && value <= 3) {
        return 'low';
    }
    else if (value >= 4 && value <= 6) {
        return 'medium';
    } else if (value >= 7 && value <= 9) {
        return 'high';
    }
}
export function setMood(value) {
    if (value >= 1 && value <= 3) {
        return 'low';
    }
    else if (value >= 4 && value <= 6) {
        return 'medium';
    } else if (value >= 7 && value <= 9) {
        return 'high';
    }
}
export function setPoki(value) {
    if (value === 1) {
        return 'bulbasaur';
    }
    else if (value === 2) {
        return 'squirtle';
    } else if (value === 3) {
        return 'charizard';
    }
}

export function setImage(pokemon) {
    if (pokemon === 'bulbasaur') {
        return 'bulbasaur image';
    } else if (pokemon === 'squirtle') {
        return 'squirtle image';
    } else if (pokemon === 'charizard') {
        return 'charizard image';
    }
}