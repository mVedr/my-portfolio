import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin,AiFillTwitterCircle,AiFillLi } from 'react-icons/ai';
import { DiCssdeck, DiStackoverflow } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" , marginBottom:'40px'}}>
          <DiStackoverflow size="3rem" /> <Span>VedCreation</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li><Link href="">
        <NavLink>Projects</NavLink>
      </Link></li>
      <li><Link href="">
        <NavLink>Technologies</NavLink>
      </Link></li>
      <li><Link href="">
        <NavLink>About</NavLink>
      </Link></li>
      <li><Link href="">
        <NavLink>Blog</NavLink>
      </Link></li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/mVedr'> 
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ved-recharla-88a029229/' > 
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/Ved_2805'> 
        <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
