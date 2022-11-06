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
      <Button onClick={()=>window.location='https://github.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;