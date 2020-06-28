import React from 'react';
import Modal from 'react-responsive-modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import * as styles from './styles';
import { PersonContainer, Name, ModalName } from './styles';
import theme from '../../../../theme';

const Person = ({ data }) => {
  const { name, bio, order, title, photo } = data;
  const url = photo?.url
  const photoTitle  = photo?.title;

  const [modalIsOpen, setIsOpen] = React.useState(false);

	const openModal = () => {
    setIsOpen(true);
	}
	
	const closeModal = e => {
    e.stopPropagation();
    setIsOpen(false);
	}
	
  return (
    <PersonContainer onClick={openModal} order={order}>
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        onRequestClose={closeModal}
        styles={{
          modal: { 
            background: theme.colors.navy,
            width: '95vw',
            height: '85vh',
            'maxWidth': 'initial',
          },
          closeIcon: {
            stroke: theme.colors.cream,
            fill: theme.colors.cream,
            cursor: 'pointer',
          },
        }}
        center
      >
        <div css={styles.modalContainerClass}>
          <div css={styles.leftSideClass}>
            <ModalName name={name}>
              {name}
            </ModalName>
            <div css={styles.modalTitleClass}>
              {title}
            </div>
            <div css={styles.modalPhotoClass}>
              <img src={url} alt={photoTitle}/>
            </div>
          </div>
          <div css={styles.bioClass}>
            { documentToReactComponents(bio.json) }
          </div>
        </div>
      </Modal>
      <div css={styles.photoClass}>
        <img src={url} alt={photoTitle}/>
      </div>
      <div css={styles.bottomBlockClass}>
        <div css={styles.titleClass}>
          {title}
        </div>
        <Name name={name}>
          {name}
        </Name>
      </div>
    </PersonContainer>
  )
}
  
export default Person;
