import React from 'react';
import { withTheme } from 'styled-components';
import Modal from 'react-responsive-modal';
import * as styles from  './styles';
import Page from '../shared/Page';
import Nav from '../Nav';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Laurel } from '../../assets/tribecca.svg';
import { ReactComponent as PlayIcon } from '../../assets/playIcon.svg';
import introVideo from '../../assets/introVideo.mp4';
import ReactPlayer from 'react-player'

const Home = props => {
	const [modalIsOpen,setIsOpen] = React.useState(false);

	const openModal = () => {
    setIsOpen(true);
	}
	
	const closeModal = () => {
    setIsOpen(false);
	}
	
	const showTrailer = () => {
		openModal();
	}

	return (
		<Page updateActive={props.updateActive} name="trailer">
			<div css={styles.containerClass}>
				<Modal
					open={modalIsOpen}
					onClose={closeModal}
					styles={{
						modal: { 
							background: '#000',
							width: '80%',
							height: '400px'
						},
						closeIcon: {
							stroke: 'white',
							fill: 'white'
						}
					}}
					center
				>
					<ReactPlayer
						url='https://vimeo.com/367131292'
						playing
						controls
						style={{'margin': '20px auto'}}
						vimeoConfig={{preload: true}}
					/>
				</Modal>
				<div css={styles.logoBlockClass}>
					<div css={styles.logoClass}>
						<Logo />
					</div>
					<div css={styles.taglineClass}>
						A new docuseries from POV
					</div>
					<div css={styles.navClass}>
						<Nav />
					</div>
				</div>
				<div css={styles.trailerBlockClass}>
					<button css={styles.trailerCTAClass} onClick={showTrailer}>
						<div css={styles.playerButtonClass}>
							<PlayIcon />
						</div>
						Watch the full trailer
					</button>
					<div css={styles.laurelClass}>
							<Laurel />
						</div>
					<video width="640" height="320" autoPlay muted loop css={styles.videoPlayerClass}>
						<source src={introVideo} type="video/mp4" />
					</video>
				</div>
			</div>
		</Page>
	)
}

export default withTheme(Home);