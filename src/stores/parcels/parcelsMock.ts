import {
  DeliveryStatusEnum,
  ParcelTypeEnum,
  PaymentStatusEnum,
} from 'src/types';

export const PARCELS_MOCK = [
  {
    id: '21',
    sender: {
      id: '1231',
      firstName: 'Андрій',
      lastName: 'Пилипець',
      phone: '7950955123',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Лондон',
        street: 'Brompton Road',
        country: 'Великобританія',
        postCode: 'SW3 1ER',
        building: null,
        apartment: null,
      },
    },
    recipient: {
      id: '32123',
      firstName: 'Роман',
      lastName: 'Цурай',
      phone: '380973341234',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Львів',
        street: 'Заводська',
        country: 'Україна',
        postCode: '79001',
        building: '10',
        apartment: '1',
      },
    },
    weight: 150,
    type: ParcelTypeEnum.Regular,
    notes: null,
    isLost: false,
    moneyAmount: null,
    pickupDate: new Date().toJSON(),
    deliveryDate: '18.08.2023',
    journeyId: '55555',
    isArchived: false,
    price: 72,
    discount: null,
    discountType: null,
    images: [],
    hasBorderCheck: false,
    isDamaged: false,
    deliveryStatus: DeliveryStatusEnum.InProgress,
    paymentStatus: PaymentStatusEnum.Paid,
  },
  {
    id: '22',
    sender: {
      id: '1232',
      firstName: 'Ігор',
      lastName: 'Заремба',
      phone: '7950955124',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Лондон',
        street: 'Cromwell Road',
        country: 'Великобританія',
        postCode: 'SW3 2EB',
        building: null,
        apartment: null,
      },
    },
    recipient: {
      id: '32123',
      firstName: 'Іван',
      lastName: 'Гуда',
      phone: '380973343214',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Тернопіль',
        street: 'Текстильника',
        country: 'Україна',
        postCode: '46001',
        building: '21',
        apartment: '15',
      },
    },
    weight: 150,
    type: ParcelTypeEnum.Passport,
    notes: null,
    isLost: false,
    moneyAmount: null,
    pickupDate: new Date().toJSON(),
    deliveryDate: '03.04.2023',
    journeyId: '55555',
    isArchived: false,
    price: 72,
    discount: null,
    discountType: null,
    images: [],
    hasBorderCheck: false,
    isDamaged: false,
    deliveryStatus: DeliveryStatusEnum.InProgress,
    paymentStatus: PaymentStatusEnum.Paid,
  },
  {
    id: '23',
    sender: {
      id: '1232',
      firstName: 'Ігор',
      lastName: 'Заремба',
      phone: '7950955124',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Лондон',
        street: 'Cromwell Road',
        country: 'Великобританія',
        postCode: 'SW3 2EB',
        building: null,
        apartment: null,
      },
    },
    recipient: {
      id: '32123',
      firstName: 'Іван',
      lastName: 'Гуда',
      phone: '380973343214',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Тернопіль',
        street: 'Текстильника',
        country: 'Україна',
        postCode: '46001',
        building: '21',
        apartment: '15',
      },
    },
    weight: 150,
    type: ParcelTypeEnum.Money,
    notes: null,
    isLost: false,
    moneyAmount: null,
    pickupDate: new Date().toJSON(),
    deliveryDate: '10.07.2023',
    journeyId: '55555',
    isArchived: false,
    price: 72,
    discount: null,
    discountType: null,
    images: [],
    hasBorderCheck: false,
    isDamaged: false,
    deliveryStatus: DeliveryStatusEnum.InProgress,
    paymentStatus: PaymentStatusEnum.Paid,
  },
  {
    id: '24',
    sender: {
      id: '1232',
      firstName: 'Ігор',
      lastName: 'Заремба',
      phone: '7950955124',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Лондон',
        street: 'Cromwell Road',
        country: 'Великобританія',
        postCode: 'SW3 2EB',
        building: null,
        apartment: null,
      },
    },
    recipient: {
      id: '32123',
      firstName: 'Іван',
      lastName: 'Гуда',
      phone: '380973343214',
      isBlocked: false,
      comment: null,
      address: {
        city: 'Київ',
        street: 'Текстильника',
        country: 'Україна',
        postCode: '46001',
        building: '21',
        apartment: '15',
      },
    },
    weight: 150,
    type: null,
    notes: null,
    isLost: false,
    moneyAmount: null,
    pickupDate: new Date().toJSON(),
    deliveryDate: '12.07.2023',
    journeyId: '55555',
    isArchived: false,
    price: 72,
    discount: null,
    discountType: null,
    images: [],
    hasBorderCheck: false,
    isDamaged: false,
    deliveryStatus: DeliveryStatusEnum.InProgress,
    paymentStatus: PaymentStatusEnum.Paid,
  },
];
