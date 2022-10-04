 import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href="tel:+91 73824 69050">+91 73824-69050</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href="mailto:vedrecharla@gmail.com">vedrecharla@gmail</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
        <Slogan></Slogan>
      </CompanyContainer>
      <SocialIcons href='https://github.com/mVedr'> 
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ved-recharla-88a029229/' > 
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/Ved_2805'> 
        <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
