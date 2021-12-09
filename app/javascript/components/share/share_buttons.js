import React from "react";
import { FacebookShareButton, FacebookIcon, VKShareButton, VKIcon, TelegramShareButton, TelegramIcon, WhatsappShareButton, WhatsappIcon, } from "react-share";
import "../home/home.scss";

export function ShareButtons(props) {
    const url =  props.url;
    const title = props.title;
    const caption = props.caption;
    const image = props.image;

    return (
        <div>
            <div className="share-buttons">
                <VKShareButton url={url} title={title} image={image}>
                    <VKIcon size={40} round={true}/>
                </VKShareButton>
            </div>
            <div className="share-buttons">
                <FacebookShareButton url={url} quote={caption}>
                    <FacebookIcon size={40} round={true}/>
                </FacebookShareButton>
            </div>
            <div className="share-buttons">
                <TelegramShareButton url={url} title={title}>
                    <TelegramIcon size={40} round={true}/>
                </TelegramShareButton>
            </div>
            <div className="share-buttons">
                <WhatsappShareButton url={url} title={title} quote={caption}>
                    <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>
            </div>
        </div>
    )
} 