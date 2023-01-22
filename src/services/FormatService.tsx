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

    const diff = Math.round(Math.abs(+now - +published) / 60000)
    if (diff < 60) {
        return diff + ' мин.'
    } else if (diff < 1440) {
        return Math.round(1440 / diff) + ' д. назад'
    } else if (diff < 43200) {
        return Math.round(43200 / diff) + ' ч. назад'
    } else if (diff < 525600) {
        return Math.round(525600 / diff) + ' г. назад'
    }
}

export function descriptionFormat(desc: string) {
    return desc.replace(/\n/g, '\r\n')
}
