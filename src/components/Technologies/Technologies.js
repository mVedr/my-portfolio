import React from 'react';
import { DiAndroid, DiApple, DiCss3, DiFirebase, DiHtml5, DiJava, DiJavascript, DiJavascript1, DiLinux, DiMysql, DiNodejs, DiNpm, DiPostgresql, DiReact, DiUbuntu, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiJavascript1 size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js , Next.js , HTML , CSS and Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPostgresql size="3rem" />
          <DiMysql size="3rem" />
          <DiNpm size="3rem" />
        </picture >
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs , npm and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiApple size="3rem" />
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile App Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native - A popular cross platform development tool
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Object Oriented Languages like C++ and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUbuntu size="3rem" />
          <DiLinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
          <ListParagraph>
            Experience with <br />
            Debian - Based Systems like Ubuntu and Kali Linux .
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;