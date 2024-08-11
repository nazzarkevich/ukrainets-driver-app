import React from 'react';

import { SmallCard } from 'src/components/small-card';
import { Client } from 'src/type';

import { ClientCardDetails } from './client-card-details';
import { ClientCardImage } from './client-card-image';

export type ClientCardType = Pick<
  Client,
  'firstName' | 'lastName' | 'phone' | 'address'
>;

export const ClientCard = ({
  firstName,
  lastName,
  phone,
  address,
}: ClientCardType) => {
  return (
    <SmallCard>
      <ClientCardImage />

      <ClientCardDetails
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        address={address}
      />
    </SmallCard>
  );
};
