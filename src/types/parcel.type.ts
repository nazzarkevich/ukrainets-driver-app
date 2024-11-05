import { Client } from './client.type';
import { Nullable } from './global.type';

export enum ParcelTypeEnum {
  Unknown = 0,
  Regular = 1,
  Passport = 2,
  Document = 3,
  Money = 4,
}

export enum DiscountEnum {
  Number = 1,
  Percent = 2,
}

export enum DeliveryStatusEnum {
  Initial = 1,
  InProgress = 2,
  Delivered = 3,
}

export enum PaymentStatusEnum {
  NotPaid = 1,
  PartiallyPaid = 2,
  Paid = 3,
}

export interface Parcel {
  id: string;
  sender: Client;
  recipient: Client;
  weight: number;
  type: ParcelTypeEnum;
  notes: Nullable<string>;
  isLost: boolean;
  moneyAmount: Nullable<number>;
  pickupDate: Nullable<string>;
  deliveryDate: Nullable<string>;
  journeyId: Nullable<string>;
  isArchived: boolean;
  price: number;
  discount: Nullable<number>;
  discountType: Nullable<DiscountEnum>;
  images: string[];
  hasBorderCheck: boolean;
  isDamaged: boolean;
  deliveryStatus: DeliveryStatusEnum;
  paymentStatus: PaymentStatusEnum;
}
