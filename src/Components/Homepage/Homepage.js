import React from 'react'

export default function Homepage() {
    return (
        <div className="homepage">
            <img id="homepage-image-main" src ="https://i.imgur.com/dsJOtsQ.jpg" />
            <div className="review-container">
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/rCP2lph.jpg" />
                </div>
                <div className="review-text-container">
                    <h2>Cornell Big Red Marching Band</h2>
                    <p>Only corps-style marching band in the Ivy League - the rest are scramble bands.</p>
            </div>
            </div>
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/yE0QHCa.jpg" />
                </div>
                <div className="review-text-container">
                    <h2>Johnathan Judes</h2>
                    <p>Band director of Legacy</p>
            </div>
            </div>
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/tM7c4es.jpg" />
                </div>
                <div className="review-text-container">
                    <h2>Marcus Demetri</h2>
                    <p>Band Director for Horizon</p>
            </div>
            </div>
            <div className="review-card">
                <div className="review-image-container">
                    <img src="https://i.imgur.com/0uVDGfN.jpg" />
                </div>
                <div className="review-text-container">
                    <h2>Chaz Bentley</h2>
                    <p>Director of the Colorado Symphony Ochestra</p>
            </div>
            </div>
            </div>
        </div>
    )
}
