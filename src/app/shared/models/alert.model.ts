import { AlertType } from '../enums';

export interface Alert {
  alertType: AlertType,
  message: string,
  timeout?: number
  value?: any,
}
