import React from 'react';

import { SmallCard } from 'src/components/small-card';
import { Parcel } from 'src/type';

import { ParcelCardDetails } from './parcel-card-details';
import { ParcelCardIcon } from './parcel-card-icon';

export type ParcelCardType = Pick<
  Parcel,
  'id' | 'sender' | 'recipient' | 'type' | 'deliveryDate'
>;

export const ParcelCard = ({
  id,
  sender,
  recipient,
  type,
  deliveryDate,
}: ParcelCardType) => {
  return (
    <SmallCard>
      <ParcelCardIcon type={type} />

      <ParcelCardDetails
        id={id}
        sender={sender}
        recipient={recipient}
        type={type}
        deliveryDate={deliveryDate}
      />
    </SmallCard>
  );
};
