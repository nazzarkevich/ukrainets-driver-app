import React from 'react';
import { StyleSheet } from 'react-native';

import {
  DarkLogoIcon,
  LogoWordIcon,
  ColorLogoIcon,
  DarkArrowsLogoIcon,
  ColorArrowsLogoIcon,
  ParcelIcon,
  GbFlagIcon,
  UaFlagIcon,
  AddSquareIcon,
  AddUserCircleIcon,
  AddIcon,
  ArchiveIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BoxIcon,
  CarIcon,
  CategoryIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  DotsMenuIcon,
  DriverIcon,
  EditIcon,
  EyeSlashIcon,
  GroupIcon,
  LetterIcon,
  LocationIcon,
  LogOutIcon,
  MinusSquareIcon,
  MoneyBillIcon,
  PhoneIcon,
  PeopleIcon,
  PhoneSquareIcon,
  PointIcon,
  RoutingIcon,
  SearchIcon,
  SettingsIcon,
  SimpleBoxIcon,
  SimpleUserIcon,
  SmallAddIcon,
  TrashIcon,
  TruckIcon,
  TwoWayArrowsIcon,
} from '.';
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
