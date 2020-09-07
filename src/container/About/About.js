import React, {useState} from 'react';
import './About.css';
import flower from '../../assets/images/inst.png';
import flower2 from '../../assets/images/nysha.png';
import flower3 from '../../assets/images/point.png';
import axiosOrders from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const About = props => {
        const [message, setMessage] = useState({
            name: '',
            email: '',
            message: ''
        });

        const [loading, setLoading] = useState(false);

        const sendHandler = async event => {
            event.preventDefault();
            setLoading(true);

            const send = {
                ...message
            };
            try {
                await axiosOrders.post('/messages.json', send);
            } finally {
                setLoading(false);
                props.history.push('/orders');

            }
        };

        const messageDataChanged = event => {
            const name = event.target.name;
            const value = event.target.value;

            setMessage(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        let form = (<form className='Inputs' onSubmit={sendHandler}>
            <input
                className="Input" placeholder="Enter your name..."
                type="text" name="name"
                value={message.name}
                onChange={messageDataChanged}
            />
            <input
                className="Input" placeholder="Enter your mail..."
                type="email" name="email"
                value={message.email}
                onChange={messageDataChanged}
            />
            <textarea
                className="Input" placeholder="Enter your message..."
                typeof="text" name="message"
                value={message.message}
                onChange={messageDataChanged}
            />
            <button className='Send'>SEND</button>
        </form>);

        if (loading) {
            form = <Spinner/>
        }

        return (
            <>
                <div className="Contacts">
                    <h3 className="Title">About</h3>
                    <p className="Contacts-text">
                        We are always happy to help you and answer all your questions.
                        We are attentive to every request and are available for you around the clock.
                    </p>
                    <div className='Cards'>
                        <div className="Card">
                            <img src={flower} alt='icon'/>
                            <h3>Social networks</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum vitae elit eu nibh ultricies vehicula sed quis neque.
                            </p>
                        </div>
                        <div className="Card">
                            <img src={flower2} alt='icon'/>
                            <h3>Online consultant</h3>
                            <p>
                                Praesent interdum semper est, vel tincidunt magna gravida a.
                                In egestas ligula pellentesque purus malesuada euismod.
                                Nam gravida.
                            </p>

                        </div>
                        <div className="Card">
                            <img src={flower3} alt='icon'/>
                            <h3>Our email</h3>
                            <p>
                                Nunc vel ante in.
                                ligula sodales vestibulum. Nullam porttitor sem nec ligula
                                ultrices pulvinar. Maecenas ut pretium ante.
                            </p>
                        </div>
                    </div>
                    <h3 className="Title">Leave us your review ...</h3>
                    {form}
                </div>
            </>
        );
};

export default About;