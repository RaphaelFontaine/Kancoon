import CookieConsent from "react-cookie-consent";

export default function Cookies(){
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accepter les cookies"
            cookieName="CookieName"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            enableDeclineButton
            flipButtons
        >
            Ce site utilise des cookies.
        </CookieConsent>
    )
}