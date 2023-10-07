import Contact from '../sections/contact';
import Container from "../elements/container";
import Heading from "../elements/heading";
import { Link } from "react-router-dom";
import List from "../elements/list";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";
const Policy = () => {
    return (
        <div className="pb-[40px]">
            <section id="policy">
                <Container className="pb-[20px]">
                    <SectionTitle children="privacy policy" />
                    <Paragraph type='policy'> This privacy policy ("policy") will help you understand how<span className="text-red">The Gaucho BBQ </span> ("us", "we", "our") uses and protects the data you provide to us when you visit and use thegauchobbq.com (catering service). </ Paragraph>
                    <Paragraph type='policy' children='We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.' />
                    <Paragraph type='policy' children='When you visit the web site, we may collect the following data:' />
                    <Heading level='h5' children='What User Data We Collect' />
                    <List className='font-narrow self-start text-[17px]'>
                        <li> ● Your IP address. </li>
                        <li> ● Your contact information and email address. </li>
                        <li> ● Other information such as interests and preferences. </li>
                        <li> ● Data profile regarding your online behavior on our blog.</li>
                    </List>
                    <Heading level='h5' children='Why We Collect Your Data' />
                    <Paragraph type='policy' children='We are collecting your data for several reasons:' />
                    <List className='font-narrow self-start text-[17px]'>
                        <li> ● To better understand your needs. </li>
                        <li> ● To improve our services and products. </li>
                        <li> ● To send you promotional emails containing the information we think you will find interesting. </li>
                        <li> ● To contact you to fill out surveys and participate in other types of market research.</li>
                        <li> ● To customize our blog according to your online behavior and personal preferences.</li>
                    </List>
                    <Heading level='h5' children='Safeguarding and Securing the Data' />
                    <Paragraph type='policy'><span className="text-red">The Gaucho BBQ</span> is committed to securing your data and keeping it confidential. The Gaucho BBQ has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
                    </Paragraph>
                    <Heading level='h5' children='Our Cookie Policy' />
                    <Paragraph type='policy' children='Once you agree to allow our blog to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you visit and spend the most time on).' />
                    <Paragraph type='policy' children='The data we collect by using cookies is used to customize our blog to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.' />
                    <Paragraph type='policy' >
                        Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.
                        If you want to disable cookies, you can do it by accessing the settings of your internet browser. You can visit <Link to='https://www.internetcookies.com' className="underline" target="_blank">https://www.internetcookies.com</Link>, which contains comprehensive information on how to do this on a wide variety of browsers and devices.
                    </Paragraph>
                    <Heading level='h5' children='Links to Other Websites' />
                    <Paragraph type='policy' children='Our blog contains links that lead to other websites. If you click on these links The Gaucho BBQ is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
Restricting the Collection of your Personal Data
At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:' />
                    <Paragraph type='policy' children="When you are filling the forms on the blog, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.
If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you." />
                    <Paragraph type='policy'><span className="text-red">The Gaucho BBQ</span> will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.</Paragraph>
                </Container>
            </section>
            <Contact />
        </div>
    )
}
export default Policy;