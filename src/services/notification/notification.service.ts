import Toast, { ToastOptions } from 'react-native-toast-message';

export class NotificationService {
  private readonly defaultConfig: ToastOptions = {
    visibilityTime: 4000,
    position: 'top',
  };

  showSuccess({
    message,
    details,
    config,
  }: {
    message: string;
    details?: string;
    config?: ToastOptions;
  }) {
    Toast.show({
      ...this.defaultConfig,
      type: 'success',
      text1: message,
      text2: details,
      ...config,
    });
  }

  showError({
    message,
    details,
    config,
  }: {
    message: string;
    details?: string;
    config?: ToastOptions;
  }) {
    Toast.show({
      ...this.defaultConfig,
      type: 'error',
      text1: message,
      text2: details,
      ...config,
    });
  }
}

export const notificationService = new NotificationService();
