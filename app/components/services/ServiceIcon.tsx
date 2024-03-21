'use client';

import React from 'react';
import { ServiceCategory } from '../../lib/constants/service';
import { MdCleaningServices, MdPlumbing, MdLocalShipping } from 'react-icons/md';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { FaPaintRoller } from 'react-icons/fa';
import { IoHammer } from 'react-icons/io5';

interface ServiceIconProps {
  type: ServiceCategory;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ type }) => {
  return (
    <>
      {type === ServiceCategory.cleaning && <MdCleaningServices />}
      {type === ServiceCategory.repairing && <HiMiniWrenchScrewdriver />}
      {type === ServiceCategory.painting && <FaPaintRoller />}
      {type === ServiceCategory.plumbing && <MdPlumbing />}
      {type === ServiceCategory.appliance && <IoHammer />}
      {type === ServiceCategory.shifting && <MdLocalShipping />}
    </>
  );
};

export default ServiceIcon;
