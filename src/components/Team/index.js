import React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition } from "react-transition-group";
import '../../App.css';
import graceLee from '../../assets/graceLee.png';
import marjanSafinia from '../../assets/marjanSafinia.png';
import jyotiSarda from '../../assets/jyotiSarda.png';
import avaDuvernay from '../../assets/avaDuvernay.png';
import yorubaRichen from '../../assets/yorubaRichen.png';
import geetaGandbhir from '../../assets/geetaGandbhir.png';
import amberFares from '../../assets/amberFares.png';
import deborahSEsquenazi from '../../assets/deborahSEsquenazi.png';
import anayansiPrado  from '../../assets/anayansiPrado.png';
import ramonaEmerson  from '../../assets/ramonaEmerson.png';

import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import * as styles from './styles';
import { Bio } from './styles';
import * as sharedstyles from '../shared/styles';
import { SectionTitle, LeftArrowContainer } from '../shared/styles';
import Page from '../shared/Page';

const Person = ({ name, title, image, bio}) => {
  const [open, setOpen] = useState(0);

  const showBio = () => {
    setOpen(!open)
  }

  return (
    <div css={styles.personContainerClass}>
      <div css={styles.columnClass}>
        <img src={image} alt="headshot" css={styles.headshotClass} />
        <div css={styles.nameClass}>{name}</div>
        <div css={styles.titleClass}>{title}</div>
      </div> 
      <div css={[sharedstyles.hideDesktop, styles.plusIconClass]} onClick={showBio}>
        Read Bio<FontAwesomeIcon icon={['fas', 'plus']} />
      </div>
      <CSSTransition
        in={open}
        timeout={500}
        classNames="bio"
      >
        <Bio>
          {bio}
        </Bio>
      </CSSTransition>
    </div>
  )
}

const Team = props => {
  return (
    <Page name="team" updateActive={props.updateActive}>
      <LeftArrowContainer css={sharedstyles.hideMobile} isInView={props.isInView}>
        <LeftArrow css={sharedstyles.arrowClass} />
      </LeftArrowContainer>
      <SectionTitle css={sharedstyles.hideMobile} left color="white" isInView={props.isInView}>The Team</SectionTitle>
      <div css={styles.peopleContainerClass}>
        <Person image={graceLee} name="Grace Lee" title="Producer/Director" bio="Grace Lee directed and produced the Peabody Award-winning AMERICAN REVOLUTIONARY: THE EVOLUTION OF GRACE LEE BOGGS about the legendary civil rights activist which The Hollywood Reporter called ”an entertainingly revealing portrait of the power of a single individual to effect change.” The film won multiple festival audience awards and was broadcast on the PBS documentary series POV. Other directing credits include the Emmy-nominated MAKERS: WOMEN IN POLITICS for PBS; the interactive online documentary K-TOWN ‘92 about the 1992 Los Angeles civil unrest, OFF THE MENU: ASIAN AMERICA; and the feature film JANEANE FROM DES MOINES, set during the 2012 presidential campaign, which premiered at the Toronto Film Festival. She has been a Sundance Institute Fellow, a 2017 Chicken & Egg Breakthrough Award winner, an envoy of the American Film Showcase (through USC and the U.S. State Department), and is co-founder of the Asian American Documentary Network."/>
        <Person image={marjanSafinia} name="Marjan Safina" title="Producer/Director" bio="Marjan Safinia is an Iranian documentary whose films examine identity, community and social justice. BUT YOU SPEAK SUCH GOOD ENGLISH explores the first-generation immigrant experience from an insider perspective. SEEDS, tells the story of ten brave teenagers from the world’s most troubled conflict zones living side-by-side for one life-changing summer. Collectively her films have played at over 100 international film festivals and been broadcast in North America, Europe and across the Arab world. Most recently she produced and directed work for Google Founder Sergey Brin, the Obama administration, and Hillary Clinton’s Next Generation. Until 2018, Marjan was the longest-serving President of the Board of Directors of the International Documentary Association (and the only woman of color to lead this organization since it was founded in 1982). She co-hosts the pre-eminent online documentary community, The D-Word, and is a regular juror, programmer, speaker and connector of all things documentary."/>
        <Person image={jyotiSarda} name="Jyoti Sarda" title="Producer" bio="Jyoti Sarda, brings twenty plus years of experience as a senior-level global marketing executive with major studios and blue chip brands to developing impact-creating, documentary and narrative content. She is Co-Executive Producer of EQUAL MEANS EQUAL, an award-winning documentary feature that offers an unflinching examination of the discrimination against women built into the US legal system. Until recently, Jyoti was Vice President of Marketing at Paramount Home Media where she led all facets of global marketing operations for Paramount partner brands, while overseeing international acquisitions. Prior to Paramount, she worked at Twentieth Century Fox Home Entertainment. Jyoti serves on the boards of the ERA Education Project, a single issue organization aimed at the passage of the Equal Right Amendment, GlobalGirl Media, an organization that trains young women to become civically engaged through citizen journalism and LAANE, a leading LA-based social justice nonprofit. This project is an extension of her work with numerous grassroots organizations focused on improving the diversity of elected officials."/>
        <Person image={avaDuvernay} name="Ava DuVernay" title="Executive Producer" bio="Academy Award nominee and winner of the Emmy, the BAFTA and the Peabody, Ava DuVernay is a writer, director, producer and film distributor. Her directorial work includes WHEN THEY SEE US, nominated for 16 Emmys,  the Oscar-winning historical drama SELMA, the Oscar-nominated criminal justice documentary 13TH and Disney’s A WRINKLE IN TIME, with which she became the highest grossing African-American woman director in domestic box office history. She also oversees production of her hit TV series QUEEN SUGAR. Winner of the 2012 Sundance Film Festival's Best Director Prize for MIDDLE OF NOWHERE, DuVernay amplifies the work of people of color and women of all kinds through her independent film collective ARRAY, named one of Fast Company’s Most Innovative Companies. In 2017, she was featured as one of Fortune Magazine's 50 Greatest Culture Leaders and TIME Magazine's 100 Most Influential People.‎ DuVernay sits on the boards of Sundance Institute and Film Independent."/>
        <Person image={yorubaRichen} name="Yoruba Richen" title="Field Director" bio="Yoruba’s work has been featured on PBS, New York Times Op Doc, Frontline, New York Magazine’s website, The Cut, and The Atlantic. Her feature documentary, THE NEW BLACK, won multiple audience awards and best documentary at the Urbanworld Film Festival, was nominated for a NAACP Image Award and a GLAAD Media Award and broadcast on Independent Lens. Yoruba’s previous film PROMISED LAND, received a Diverse Voices Co-Production fund award from the Corporation for Public Broadcasting and won the Fledgling Fund award for social issue documentary. Yoruba is a featured TED Speaker, a Guggenheim and Sundance Fellow and a 2016 recipient of the Chicken & Egg Breakthrough Filmmaker Award. She is director of the documentary program at the CUNY Graduate School of Journalism and most recently directed GREEN BOOK: GUIDE TO FREEDOM for the Smithsonian Channel."/>
        <Person image={geetaGandbhir} name="Geeta Gandbhir" title="Field Director" bio='Director/Producer Geeta Gandbhir has won four Emmys. As editor, her films have been nominated twice for the Academy Award, winning once, and have won four Peabody Awards. Most recently, she co-directed the six-part series "Why We Hate" for Jigsaw Productions and Amblin Entertainment, to air on Discovery in October of 2019. She also co-directed the feature documentary "I Am Evidence" for HBO which has won a 2019 Emmy, DuPont and ATAS Award, and the award - winning short film, "Love the Sinner” which premiered at the 2017 Tribeca Film Festival. Her feature documentary, "Prison Dogs," which she co-directed with Perri Peltz, premiered at the 2016 Tribeca Film Festival, and a feature documentary she directed with Academy Award winning director Sharmeen Obaid-Chinoy, "A Journey of A Thousand Miles: Peacekeepers") premiered at the 2015 Toronto International Film Festival and recently premiered on PBS. She is also currently co-directing and co-producing a "Conversation on Race" series with The New York Times Op-Docs.'/>
        <Person image={amberFares} name="Amber Fares" title="Field Director" bio="Amber directed and shot her film SPEED SISTERS (Hot Docs, 2015) that follows a team of Palestinian women race car drivers and was the Director of Photography on THE JUDGE (TIFF, 2017). She has cinematography credits on several upcoming documentaries in production including LOVE AND STUFF (Judith Helfand), a short film on Standing Rock (THE FRONT), and BASEMENT BHANGRA (Fictionless). Amber has branched into episodic series, working on shows such as AMERICA INSIDE OUT with Katie Couric for National Geographic (Senior Producer and cinematographer), and TRANSPARENT season 4 for Amazon (Associate Producer)."/>
        <Person image={deborahSEsquenazi} name="Deborah S. Esquenazi" title="Field Director" bio="Deborah’s first feature SOUTHWEST OF SALEM: THE STORY OF THE SAN ANTONIO FOUR, won a Peabody, Critic’s Choice Award for 'Best First Feature', an Emmy nomination for 'Outstanding Social Issue Documentary', and a GLAAD Media Award for 'Outstanding Documentary'. The film helped exonerate the ‘San Antonio Four’ a group of Latinas wrongfully accused of rape who were imprisoned for 15 years. Esquenazi is also a Rockwood JustFilms Ford Fellow, Sundance Documentary Film Fellow, Sundance Creative Producing Fellow, and a Firelight Film Fellow. She is a native of Texas and is based in Austin where she lives with her wife and two children. "/>
        <Person image={anayansiPrado} name="Anayansi Prado" title="Field Director" bio="Anayansi Prado was born in Panama and moved to the United States as a teenager. Credits include MAID IN AMERICA (PBS, 2004) about Latina domestic workers; CHILDREN IN NO MAN’S LAND (PBS, 2008) about unaccompanied minors crossing the border; and PARAISO FOR SALE (PBS, 2011) about Americans moving to Panama. In 2006, Prado executive produced and directed the Discovery en Español doc series VOCES DE CAMBIO (Voices of Change) featuring Carlos Santana and Edward James Olmos. Her most recent film is THE UNAFRAID, about a movement of undocumented students in Georgia banned from attending the state’s top public universities."/>
        <Person image={ramonaEmerson} name="Ramona Emerson" title="Field Director" bio="Ramona Emerson is a Diné writer and filmmaker whose work explores the expectations of Native cultural identity, including the 2018 Emmy-nominated THE MAYORS OF SHIPROCK. She has worked as a professional videographer, writer and editor for over twenty years and is currently working on her eighth film project, CROSSING THE LINE about violence against Navajo people in the border towns around the Navajo nation.  She has been a Sundance Native Lab Fellow, a Time-Warner Storyteller Fellow, a Tribeca All-Access Grantee and has been supported by CPB, WGBH and ITVS. She is based in Albuquerque NM where she and her husband run their production company Reel Indian Pictures."/>
      </div>
    </Page>
  )
}

export default Team;