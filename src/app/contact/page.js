import './page.scss';


const Contact = () => {
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>Contact Me</h1>
                    <p>
                        I am interested in growing up as a developer, becoming fullstack in the future and helping other people achieving their goals. Feel free to get in touch with me, I`ll be very happy and thankful for the contact. You can contact me using the form below.
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea className="message-area" placeholder="Message" name="message" required></textarea>
                                </li>
                                <li className="form-button">
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;