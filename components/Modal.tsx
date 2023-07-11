import React,{ useEffect } from "react";
import styles from "@/styles/components//modal.module.scss";

interface modalPropTypes {
    data?: any,
    type?: "modal" | "context"
    styling?: React.CSSProperties,
    autoClose?: {
        closeTimeOut: number
    }
    outerClickClose?: boolean
    className?: string
    children?: any;
    outerClickCloseHandler?: () => void
}

export function Modal({data, type, styling, autoClose, outerClickClose, outerClickCloseHandler, className, children }: modalPropTypes):JSX.Element {

    return (
        <div className={`${styles.modal_main_wrapper} ${className ?? ""}`} style={{...styling}} onClick={(e)=>{
            outerClickCloseHandler && outerClickCloseHandler();
        }}>
            {
                data ?
                     <div className={`${styles.modal_content}`} onClick={(e)=>{e.stopPropagation()}}>
                        {data}
                    </div> 
                : children
            }
        </div>
    )
}
