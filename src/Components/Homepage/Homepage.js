import React from 'react'

export default function Homepage() {
    return (
        <div className="homepage">
            <img id="homepage-image-main" src ="https://www.sacredheart.edu/media/shu-media/performing-arts/band_004_1220x686-1.jpg" alt="mainPic"/>
            <p>Colorado Band Association has been a proud supplier of instruments to local high schools and colleges for over 500 years. We specialize in product delivery and quality assurance.</p>
            <div className="review-container">
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/rCP2lph.jpg" alt="pic1"/>
                </div>
                <div className="review-text-container">
                    <h2>Cornell Big Red Marching Band</h2>
                    <p>Only corps-style marching band in the Ivy League - the rest are scramble bands.</p>
                    <p>We've been using CBA for years and love the ease of ordering and price of the products.</p>
            </div>
            </div>
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/yE0QHCa.jpg" alt="pic2"/>
                </div>
                <div className="review-text-container">
                    <h2>Johnathan Judes</h2>
                    <p>Band director of Legacy</p>
                    <p>We work on a tight schedule. So when we have a last minute student join our band I need an instrument ASAP. I can depend on CBA to get my band the instruments they need on time, every time.</p>
            </div>
            </div>
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/tM7c4es.jpg" alt="pic3" />
                </div>
                <div className="review-text-container">
                    <h2>Marcus Demetri</h2>
                    <p>Band Director for Horizon</p>
                    <p>CBA is the BEST! We love working with the friendly staff whenever we have a question about the products or shipping times.</p>
            </div>
            </div>
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/0uVDGfN.jpg" alt="pic4"/>
                </div>
                <div className="review-text-container">
                    <h2>Chaz Bentley</h2>
                    <p>Director of the Colorado Symphony Ochestra</p>
                    <p>Our go-to place for ordering instruments is CBA. No question. Great products for a great price,</p>
            </div>
            </div>
            </div>
        </div>
    )
}
