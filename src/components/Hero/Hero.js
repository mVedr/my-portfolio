import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br/>
          My Personal Space
      </SectionTitle>
      <SectionText>
        This site contains all my projects , skills and also my blog !
      </SectionText>
      <div style={{ display: 'flex', gap: '36px', padding: '10px', margin: '10px' }}>
  <Button onClick={() => window.open('https://leetcode.com/VedRecharla/', '_blank')}>Leetcode</Button>
  <Button onClick={() => window.open('https://www.codechef.com/users/ved280503', '_blank')}>Codechef</Button>
  <Button onClick={() => window.open('https://codeforces.com/profile/Fakemvr732', '_blank')}>Codeforces</Button>
  <Button onClick={() => window.open('https://leetcode.com/fakemvr32/', '_blank')}>Leetcode Contests</Button>
</div>



    </LeftSection>
  </Section>
);

export default Hero;