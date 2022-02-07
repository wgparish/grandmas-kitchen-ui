/**
 * Just some documentation on page names.
 *
 * Home Page: home_page
 * Login Page: login_page
 * Registration Page: register_page
 * Password Reset and Password Reset Success pages: password_reset_page
 * About-Us Page: about_page
 * Account CP Page: account_page
 * Contact Us Page: contact_us_page
 * FAQs page: faq_page
 * Guarantee Page: guarantee_page
 * News Page: news_page
 * Picks Page: picks_page
 * Pricing & Packages Page: pricing_page
 * Promotional Page: promotions_page
 *
 * The Sports pages are different. Sports pages = Pricing & Packages page, but for a single sport:
 * - The default image is obtained using a page name of sport_pricing_page_default (/content/background?pageName=sport_pricing_page_default)
 * - An endpoint called /sport-image-id?sportName=<sport-name> can be used to obtain an image id
 *     > once that image id is obtained, then the image can be downloaded from the general images endpoint using the image id as a parameter
 */

const apiBaseURL = "http://68.183.19.115:8080/";

export default apiBaseURL;
