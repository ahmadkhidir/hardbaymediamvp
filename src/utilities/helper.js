export class Status {
    static get idle() {return "idle"}
    static get pending() {return "pending"}
    static get success() {return "succsss"}
    static get failed() {return "failed"}
}

export async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch {
        return false
    }
}