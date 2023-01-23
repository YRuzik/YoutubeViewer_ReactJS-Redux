export function viewsFormat(labelValue: string) {
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + " млн"
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + " тыс"
                : Math.abs(Number(labelValue));
}

export function publishedFormat(data: string) {
    const now = new Date()
    const published = new Date(data)

    const diff = Math.round(Math.abs(+now - +published))
    let seconds = Math.floor((diff / 1000) % 60),
        minutes = Math.floor((diff / (1000 * 60)) % 60),
        hours   = Math.floor((diff / (1000 * 60 * 60)) % 24),
        days    = Math.floor(diff / (1000 * 60 * 60 * 24) % 30),
        months  = Math.floor(diff / (1000 * 60 * 60 * 24 * 30) % 12),
        years   = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

    if (years === 0 && months !== 0) {
        return months + ' мес. назад'
    } else if (years === 0 && months === 0 && days !== 0) {
        return days + ' д. назад'
    } else if (years === 0 && days === 0 && months === 0 && hours !== 0) {
        return hours + ' ч. назад'
    } else if (years === 0 && days === 0 && hours === 0 && months === 0 && minutes !== 0) {
        return minutes + ' мин. назад'
    } else if (years === 0 && days === 0 && hours === 0 && minutes === 0 && months === 0 && seconds !== 0) {
        return seconds + ' сек. назад'
    }
    return years + ' г. назад'
}

export function descriptionFormat(desc: string) {
    return desc.replace(/\n/g, '\r\n')
}
