import styles from './sponsor-title.module.scss';
import { HXL } from '@components/typography/typography'

const SponsorHero = () => (
  <section className={styles['sponsor-title']}>
    <HXL underlineColor='underline-green'>Sponsorship.</HXL>
  </section>
);

export default SponsorHero;