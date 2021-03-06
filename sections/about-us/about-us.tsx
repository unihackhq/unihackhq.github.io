import styles from './about-us.module.scss';
import Stack from '@components/stack/stack';
import { H2, H3, Text } from '@components/typography/typography';

const AboutUs = () => (
  <section className={styles['about-us']}>
    <div className={styles['about-us-content']}>
      <Stack size="medium">
        <H2>Who are we</H2>
        <H3>
          <i>
            We are Australia's largest and premier student hackathon - run for
            students, by students.
          </i>
        </H3>
        <Text>
          Inspired by the student hackathons in the United States and Europe,
          UNIHACK was created in 2014 by WIRED Monash. Since then, UNIHACK has
          quickly become one of the go-to hackathons for university and TAFE
          students nationwide.
        </Text>
        <Text>
          Teams have 48 hours to design and build something awesome. It can be
          anything - a website, a mobile application, a video game, or even
          something hardware. The important thing is that it needs to work when
          it is presented to the judges.
        </Text>
        <Text>
          Whether you are an avid programmer or a first-time hacker, UNIHACK
          welcomes everyone, regardless of skill level. You will have the
          opportunity to build, collaborate and learn from your fellow hackers
          and mentors at the event. The event will also have a number of quick
          tech talks throughout to help participants learn new or extend their
          existing skills.
        </Text>
      </Stack>
    </div>
  </section>
);

export default AboutUs;
