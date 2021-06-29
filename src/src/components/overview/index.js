import React from 'react';
import { 
  Container,
  FeaturedPlaylists, 
  ScrollableContent, 
  ProfileView,
  Tracks,
  ContentProfile,
  TracksContent,
  SelectLanguage
} from './styles';

import { UseTranslateService } from "../../contexts/translateService";

import Playlist1 from '../../assets/playlist1.jpg'
import Playlist2 from '../../assets/playlist2.jpg'
import Playlist3 from '../../assets/playlist3.jpg'
import Playlist4 from '../../assets/playlist4.jpg'

import View1 from '../../assets/view1.jpg'
import View2 from '../../assets/view2.jpg'
import View3 from '../../assets/view3.jpg'


import Track1 from '../../assets/track1.jpg'
import Track2 from '../../assets/track2.jpg'
import Track3 from '../../assets/track3.jpg'
import Track4 from '../../assets/track4.jpg'
import Track5 from '../../assets/track5.jpg'
import Track6 from '../../assets/track7.jpg'


import BrazilFlag from '../../assets/brazil-flag.png'
import EuaFlag from '../../assets/eua-flag.png'

function Overview() {
  const { toTranslate,setLinguageForTranslate, linguageForTranslate } = UseTranslateService();
  return(
    <Container>
      <FeaturedPlaylists>
        <SelectLanguage theme={linguageForTranslate}>
          <div onClick={() => {setLinguageForTranslate('portuguese')}}>
            <img src={BrazilFlag} width="40px"/>
          </div>
          <div onClick={() => {setLinguageForTranslate('english')}}>
            <img src={EuaFlag} width="40px"/>
          </div>
        </SelectLanguage>
       
        <h1>{toTranslate('featuredPlaylists')}</h1>
        <ScrollableContent>
          <div>
            <img src={Playlist1} alt='Playlist Image'/>
            <div>
              <h2>Only STARDUST</h2>
              <h5>10 {toTranslate('songs')}</h5>
            </div> 
          </div>
          <div>
            <img src={Playlist2} alt='Playlist Image'/>
            <div>
              <h2>Mike Vella</h2>
              <h5>25 {toTranslate('songs')}</h5>
            </div> 
          </div>
          <div>
            <img src={Playlist3} alt='Playlist Image'/>
            <div>
              <h2>The Best Singles</h2>
              <h5>09 {toTranslate('songs')}</h5>
            </div> 
          </div>
          <div>
            <img src={Playlist4} alt='Playlist Image'/>
            <div>
              <h2>Indie</h2>
              <h5>120 {toTranslate('songs')}</h5>
            </div> 
          </div>
          <div>
            <img src={Track4} alt='Playlist Image'/>
            <div>
              <h2>Rock Hits</h2>
              <h5>20 {toTranslate('songs')}</h5>
            </div> 
          </div>
        </ScrollableContent>
      </FeaturedPlaylists>
      <ContentProfile>
       <ProfileView>
          <h2>{toTranslate('profileViews')}</h2>
          <div>
            <img src={View1}/>
            <div>
              <h4>Jenny Villa</h4>
              <h5>1 {toTranslate('day')} {toTranslate('ago')}</h5>
            </div>            
          </div>
          <div>
            <img src={View2}/>
            <div>
              <h4>Jenny Villa</h4>
              <h5>4 {toTranslate('days')} {toTranslate('ago')}</h5>
            </div>            
          </div>
          <div>
            <img src={View3}/>
            <div>
              <h4>Aquila</h4>
              <h5>2 {toTranslate('weeks')} {toTranslate('ago')}</h5>
            </div>            
          </div>
        </ProfileView>
        <Tracks>
          <h2>{toTranslate('tracks')}</h2>
          <TracksContent>
          <div>
            <img src={Track1} alt='Playlist Image'/>
            <div>
              <h2>Mahara Bon</h2>
              <h5>Sexy In Paris</h5>
            </div> 
          </div>
          <div>
            <img src={Track2} alt='Playlist Image'/>
            <div>
              <h2>Donna</h2>
              <h5>Pseudo-life</h5>
            </div> 
          </div>
          <div>
            <img src={Track3} alt='Playlist Image'/>
            <div>
              <h2>Avven</h2>
              <h5>Magic</h5>
            </div> 
          </div>
          <div>
            <img src={Track4} alt='Playlist Image'/>
            <div>
              <h2>Cony Matt</h2>
              <h5>Living in hell</h5>
            </div> 
          </div>
          <div>
            <img src={Track5} alt='Playlist Image'/>
            <div>
              <h2>Claudia Cany</h2>
              <h5>Remember</h5>
            </div> 
          </div>
          <div>
            <img src={Track6} alt='Playlist Image'/>
            <div>
              <h2>Pacify</h2>
              <h5>Portrait</h5>
            </div> 
          </div>
        </TracksContent>
        </Tracks>
      </ContentProfile>
     
    </Container>
  );
}

export default Overview;