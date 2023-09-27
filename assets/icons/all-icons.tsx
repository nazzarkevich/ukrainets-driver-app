import React from 'react';
import { StyleSheet } from 'react-native';

import { AddSquareIcon } from './add-square.icon';
import { AddUserCircleIcon } from './add-user-circle.icon';
import { AddIcon } from './add.icon';
import { ArchiveIcon } from './archive.icon';
import { ArrowDownIcon } from './arrow-down.icon';
import { ArrowLeftIcon } from './arrow-left.icon';
import { ArrowRightIcon } from './arrow-right.icon';
import { BoxIcon } from './box.icon';
import { CarIcon } from './car.icon';
import { CategoryIcon } from './category.icon';
import { CheckIcon } from './check.icon';
import { CloseIcon } from './close-icon.icon';
import { CopyIcon } from './copy-icon.icon';
import { DotsMenuIcon } from './dots-menu.icon';
import { DriverIcon } from './driver.icon';
import { EditIcon } from './edit.icon';
import { EyeSlashIcon } from './eye-slash.icon';
import { GbFlagIcon } from './gb-flag.icon';
import { GroupIcon } from './group.icon';
import { LetterIcon } from './letter.icon';
import { LocationIcon } from './location.icon';
import { LogOutIcon } from './log-out.icon';
import {
  ColorArrowsLogoIcon,
  ColorLogoIcon,
  DarkArrowsLogoIcon,
  DarkLogoIcon,
  LogoWordIcon,
} from './logo';
import { MinusSquareIcon } from './minus-square.icon';
import { MoneyBillIcon } from './money-bill.icon';
import { ParcelIcon } from './parcel.icon';
import { PeopleIcon } from './people.icon';
import { PhoneSquareIcon } from './phone-square.icon';
import { PhoneIcon } from './phone.icon';
import { PointIcon } from './point.icon';
import { RoutingIcon } from './routing.icon';
import { SearchIcon } from './search.icon';
import { SettingsIcon } from './settings.icon';
import { SimpleBoxIcon } from './simple-box.icon';
import { SimpleUserIcon } from './simple-user.icon';
import { SmallAddIcon } from './small-add.icon';
import { TrashIcon } from './trash.icon';
import { TruckIcon } from './truck.icon';
import { TwoWayArrowsIcon } from './two-way-arrows.icon';
import { UaFlagIcon } from './ua-flag.icon';
import { View } from '../../components';

// Helper component to view all the icons
export const AllIcons = () => {
  return (
    <View style={styles.iconsContainer}>
      <ColorLogoIcon />
      <ColorArrowsLogoIcon />
      <DarkArrowsLogoIcon />
      <DarkArrowsLogoIcon />
      <DarkLogoIcon />
      <LogoWordIcon />
      <ParcelIcon />
      <GbFlagIcon />
      <UaFlagIcon />
      <AddSquareIcon />
      <AddUserCircleIcon />
      <AddIcon />
      <ArchiveIcon />
      <ArrowDownIcon />
      <ArrowLeftIcon />
      <ArrowRightIcon />
      <BoxIcon />
      <CarIcon />
      <CategoryIcon />
      <CheckIcon />
      <CloseIcon />
      <CopyIcon />
      <DotsMenuIcon />
      <DriverIcon />
      <EditIcon />
      <EyeSlashIcon />
      <GroupIcon />
      <LetterIcon />
      <LocationIcon />
      <LogOutIcon />
      <MinusSquareIcon />
      <MoneyBillIcon />
      <PhoneIcon />
      <PeopleIcon />
      <PhoneSquareIcon />
      <PointIcon />
      <RoutingIcon />
      <SearchIcon />
      <SettingsIcon />
      <SimpleBoxIcon />
      <SimpleUserIcon />
      <SmallAddIcon />
      <TrashIcon />
      <TruckIcon />
      <TwoWayArrowsIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '50%',
  },
});
