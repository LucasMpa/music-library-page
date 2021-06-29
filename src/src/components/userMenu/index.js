import React from 'react';
import PlaceholderImage from '../../assets/dog.png'
import {FiSettings, FiMusic,FiRadio} from 'react-icons/fi'
import {BsNewspaper,BsPerson} from 'react-icons/bs'
import {AiOutlineBell, AiFillLinkedin, AiFillGithub, AiOutlineClose} from 'react-icons/ai'
import { Container,UserInformations,Actions,ContainerCloseMenu } from './styles';

import { UseTranslateService } from "../../contexts/translateService";


function userMenu() {
  const { toTranslate, setShowMenu, showMenu } = UseTranslateService();

  return (
    <>
      <Container showMenu={showMenu}>
        <ContainerCloseMenu>
            <AiOutlineClose color={'#e5e5e5e7'} onClick={() => setShowMenu(false)}/>
        </ContainerCloseMenu>
        <UserInformations>
          <img src={PlaceholderImage} alt='userImage'/>
          <div>
            <h2>Lucas Matheus</h2>
            <h3>{toTranslate('editProfile')}</h3>
          </div>
        </UserInformations>
        <Actions>
          <div>
            <div>
              <FiSettings/>
              <h3>{toTranslate('overview')}</h3>
            </div>
            <div>
              <BsNewspaper/>
              <h3>{toTranslate('news')}</h3>
            </div>
            <div>
              <FiMusic/>
              <h3>{toTranslate('playlists')}</h3>
            </div>
            <div>
              <FiRadio/>
              <h3>{toTranslate('discover')}</h3>
            </div>
            <div>
              <AiOutlineBell/>
              <h3>{toTranslate('notifications')}</h3>
            </div>
            <div>
              <BsPerson/>
              <h3>{toTranslate('account')}</h3>
            </div>
          </div>
        </Actions>
         <Actions>
          <div>
            <div onClick={() => window.open('https://github.com/LucasMpa')}>
              <AiFillGithub/>
              <h3>Github</h3>
            </div>
            <div onClick={() => window.open('https://www.linkedin.com/in/lucasmpa/')}>
              <AiFillLinkedin/>
              <h3>Linkedin</h3>
            </div>
          </div>
        </Actions>
      </Container>
    </>
  );
}

export default userMenu;