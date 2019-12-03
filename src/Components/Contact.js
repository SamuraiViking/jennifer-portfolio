import React from 'react'

const Contact = () => {
    return (
            <section id="contact" class="s-contact ss-dark target-section">
                <div class="contact-container">
                    <h2 class="section-heading">GET IN TOUCH</h2>            
                    <p class="contact-email">
                        <a href="mailto:jennifermikanelson@gmail.com">jennifermikanelson<br/>@gmail.com</a>
                    </p>
                    <p class="section-desc">
                    I'm happy to connect, listen and help. Let's work together and build
                    something awesome. Let's turn your idea to an even greater product.
                    <a href="mailto:jennifermikanelson@gmail.com"> Email Me</a>.
                    </p>
            
                    <div class="contact-infos">
            
                        <div class="contact-phone">
                            <h4>Call Me</h4>
                            <a href="tel:197-543-2345">+197 543 2345</a>
                        </div>
            
                        <div class="contact-social">
                            <h4>Social</h4>
                            <p>
                                <a href="#">Facebook</a>/
                                <a href="#">Twitter</a>/
                                <a href="#">Instagram</a>
                            </p>
                        </div>
            
                    </div>
                </div>
            </section>
    )
}

export default Contact;