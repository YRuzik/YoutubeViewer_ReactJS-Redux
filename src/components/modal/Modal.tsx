import {BackDrop, Content, WrapperModal} from "./Modal.style";
import {createPortal} from "react-dom";
import OverviewVideo from "../../pages/OverviewVideo";
import {useEffect, useRef} from "react";
import useOnClickOutside from "../../hooks/onClickOutside.hook";
import React from "react";


const Modal = ({isOpen, onClose}: any) => {

    const modalWindow = useRef() as React.MutableRefObject<HTMLInputElement>
    const onClickOutside = useOnClickOutside

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    onClickOutside(modalWindow, () => onClose())

    return createPortal(
        <>
            {isOpen ? <BackDrop>
                <WrapperModal>
                    <Content ref={modalWindow}>
                        <OverviewVideo/>
                    </Content>
                </WrapperModal>
            </BackDrop> : null}
        </>
        ,
        document.getElementById('portal')!
    )
}

export default Modal
