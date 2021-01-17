import React from 'react';
import styles from './tiers-table.module.scss';
import Table from '@components/table/table';
import { ColumnI } from '@components/table/column/column.interface';
import { CellI } from '@components/table/cell/cell.interface';
import { H2 } from '@components/typography/typography';
import { PackageI } from './package.interface';
import { CustomPerkI } from './custom-perk.interface';
import data from '../../content/2020/sponsorship-packages.json';

const TiersTable = () => (
  <section className={styles['get-involved']}>
    <H2>Get Involved</H2>
    <Table columns={transformPackages(data)} rows={data.perks} />
  </section>
);

const transformPackages = (sponsorshipData: any): ColumnI[] => {
  return sponsorshipData.packages.map((tier: PackageI) => {
    const capacity = parseInt(tier.maxCapacity, 10);
    const subtitle =
      capacity > 0 ? `Max ${capacity} sponsor${capacity > 1 ? 's' : ''}` : '';

    return {
      id: tier.id,
      title: tier.name,
      subtitle,
      accentColour: tier.colour,
      footerText: tier.price,
      cellData: transformPackagePerks(tier, sponsorshipData.perks.length)
    };
  });
};

const transformPackagePerks = (tier: PackageI, totalPerks: number) => {
  const cells: CellI[] = [];

  // Active perks
  tier.perks.map((perk: number) => {
    cells[perk - 1] = {
      key: generateKey(tier.name, perk - 1),
      isChecked: true
    };
  });

  // Custom perks
  tier.customPerks.map((perk: CustomPerkI) => {
    cells[perk.perkID - 1] = {
      key: generateKey(tier.name, perk.perkID - 1),
      content: perk.content
    };
  });

  // Inactive perks
  while (cells.length < totalPerks) {
    cells[cells.length] = {
      key: generateKey(tier.name, cells.length + 1),
      isChecked: false
    };
  }

  return cells;
};

const generateKey = (prefix: string, value: number) => {
  return `${prefix}-${value}`;
};

export default TiersTable;
