export class Alert {
    severity?: AlertType;
    summary?: string;
    detail?: string;
    id?: any;
}

// export enum AlertType {
//     Success = 'success',
//     Error = 'error',
//     Info = 'info',
//     Warning = 'warn'
// }

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}