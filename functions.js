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
    if (value >= 1 && value <= 3) {
        return 'bulbasaur';
    }
    else if (value >= 4 && value <= 6) {
        return 'squirtle';
    } else if (value >= 7 && value <= 9) {
        return 'charizard';
    }
}