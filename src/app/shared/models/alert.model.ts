import { AlertType } from '../enums';

export interface Alert {
  alertType: AlertType,
  message: string,
  timeOut?: number
  value?: any,
}
