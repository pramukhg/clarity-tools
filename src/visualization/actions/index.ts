export const enum Types {
    SelectSession,
    SelectImpression,
    SelectSnapshot,
    TogglePlayback,
    ToggleSpeed
}

export const selectSession = (session) => {
    return {
        type: Types.SelectSession,
        payload: session
    }
};

export const selectImpression = (impression) => {
    return {
        type: Types.SelectImpression,
        payload: impression
    }
};

export const selectSnapshot = (time) => {
    return {
        type: Types.SelectSnapshot,
        payload: time
    }
};

export const togglePlayback = (isPlaying) => {
    return {
        type: Types.TogglePlayback,
        payload: isPlaying
    }
};

export const toggleSpeed = (isFast) => {
    return {
        type: Types.ToggleSpeed,
        payload: isFast
    }
};
