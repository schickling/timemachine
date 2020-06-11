export const instance: {
    config: (options: {
        dateString?: string
        timestamp?: number
        difference?: number
        tick?: boolean
        keepTime?: boolean
    }) => void
    reset: () => void
}
export default instance
