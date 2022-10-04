import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit})=>{
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr></Hr>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
        </BlogCard> 
      })}
    </GridContainer>
    <h1>Coming Soon ....</h1>
  </Section>
);

export default Projects;