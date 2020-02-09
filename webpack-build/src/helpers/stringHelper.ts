function joinNonEmpty(separator: string, ...args: Array<string | null | undefined>) {
    return args
        .filter(x => !!x)
        .join(separator);
}

export default {
    joinNonEmpty
}