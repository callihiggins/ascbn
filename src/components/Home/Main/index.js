import React from 'react';
import Modal from 'react-responsive-modal';
import NavLite from './NavLite';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import Page from '../../shared/Page';
import logo from '../../../assets/images/ASCBN-TITLE-HORIZONTAL-DARK-TRANSPARENT.png';
import { ReactComponent as PlayIcon } from '../../../assets/playIcon.svg';
import AFI from '../../../assets/images/afi.png';
import CAM from '../../../assets/images/cam.png';
import TFF from '../../../assets/images/tff.png';
import NAACP from '../../../assets/images/naacp.png';
import introVideo from '../../../assets/introVideo.mp4';
import ReactPlayer from 'react-player'

class Main extends React.Component {

	state = {
		modalIsOpen: false,
	}

	openModal = () => {
		this.setState({
			modalIsOpen: true,
		});
	}

	closeModal = () => {
		this.setState({
			modalIsOpen: false,
		});
	}

	render() {
		return (
			<Page updateActive={this.props.updateActive} name="home">
        <NavLite />
				<div css={styles.containerClass}>
					<Modal
						open={this.state.modalIsOpen}
						onClose={this.closeModal}
						styles={{
							modal: { 
								background: '#000',
								width: '95vw',
								height: '85vh',
								'max-width': 'initial',
							},
							closeIcon: {
								stroke: 'white',
								fill: 'white'
							},
						}}
						center
					>
						<ReactPlayer
							url='https://www.youtube.com/watch?v=96rI5KyLEvg'
							playing
							controls
							style={{'margin': '0 auto'}}
							vimeoConfig={{preload: true}}
							width={'auto'}
							height={'85vh'}
						/>
					</Modal>
					<div css={styles.logoBlockClass}>
						<div css={styles.logoContainerClass}>
							<img src={logo} alt="And She Could Be Next" css={styles.logoClass}/>
						</div>
						<div css={styles.taglineClass}>
							A two-part documentary from POV
						</div>
						<button css={styles.trailerCTAClass} onClick={this.openModal}>
							<div css={styles.playerButtonClass}>
								<PlayIcon />
							</div>
							Watch the full trailer
						</button>
						<div css={styles.laurelsClass}>
							<img src={AFI} alt="AFI" />
							<img src={CAM} alt="CAM" />
							<img src={TFF} alt="Tribecca Film Festival" />
							<img src={NAACP} alt="NAACP" />
						</div>
					</div>
					<div css={styles.arrowUpClass} />
					<div css={styles.bottomBarClass} />
					<div css={styles.videoOverlayClass} />
					<video width="640" height="320" autoPlay muted loop css={[styles.videoPlayerClass, sharedstyles.hideMobile]}>
						<source src={introVideo}/>
					</video>
				</div>
			</Page>
		)
	}

	
}

export default Main;