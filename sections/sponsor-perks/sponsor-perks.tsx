import styles from './sponsor-perks.module.scss';
import Perk from './perk/perk';
import perkData from '../../content/perks.json';
import { H2 } from '@components/typography/typography';

const SponsorPerks = () => {
  const perks = perkData.map(perk => (
    <Perk
      key={perk.title}
      className={styles['perk-item']}
      title={perk.title}
      imgSrc={perk.imgSrc}
      listItems={perk.listItems}
    >
      {perk.desc}
    </Perk>
  ));

  return (
    <section className={styles['sponsor-perks']}>
      <div className={styles['sponsor-perks-container']}>
        <div className={styles['sponsor-perks-header']}>
          <H2>Perks</H2>
        </div>
        <div className={styles['sponsor-perks-content']}>
          <div className={styles.perks}>{perks}</div>
        </div>
      </div>
    </section>
  );
};
export default SponsorPerks;
