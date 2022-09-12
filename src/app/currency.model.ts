export interface Currency {
    motd: {
        msg: string;
            url: string
    },
    success: boolean
        query: {
        from: string
            to: string
                amount: number
    },
    info: {
        rate: number
    },
    historical: boolean
        date: string
            result: number
}
export interface currencies {
    value: string;
  }