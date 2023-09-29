import React from 'react';
import { StyleSheet } from 'react-native';

import { StyledView } from '../../components';

import {
  AddIcon,
  AddSquareIcon,
  AddUserCircleIcon,
  ArchiveIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BoxIcon,
  CarIcon,
  CategoryIcon,
  CheckIcon,
  CloseIcon,
  ColorArrowsLogoIcon,
  ColorLogoIcon,
  CopyIcon,
  DarkArrowsLogoIcon,
  DarkLogoIcon,
  DotsMenuIcon,
  DriverIcon,
  EditIcon,
  EyeSlashIcon,
  GbFlagIcon,
  GroupIcon,
  LetterIcon,
  LocationIcon,
  LogOutIcon,
  LogoWordIcon,
  MinusSquareIcon,
  MoneyBillIcon,
  ParcelIcon,
  PeopleIcon,
  PhoneIcon,
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
  UaFlagIcon,
} from '.';

// Helper component to view all the icons
export const AllIcons = () => {
  return (
    <StyledView style={styles.iconsContainer}>
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
    </StyledView>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '50%',
  },
});
