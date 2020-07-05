import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './styles';

interface propsModal {
  isShowing: boolean;
}

export const Modal: React.FC<propsModal> = ({ children, isShowing }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <Container>
            <div className="modal-overlay" />
            <div
              className="modal-wrapper"
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog"
            >
              <div className="modal">
                <div className="modal-header">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {children}
              </div>
            </div>
          </Container>
        </React.Fragment>,
        document.body,
      )
    : null;

export default Modal;
