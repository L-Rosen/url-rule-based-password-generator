import { useEffect } from "react";

const DomainFetcher = (props) => {

    useEffect(() => {
        const getDomain = async () => {
            try {
                const [tab] = await getActiveTab();

                if (doUrlExist(tab)) {
                    const url = new URL(tab.url);
                    setDomainFromURL(url);
                }
            } catch (error) {
                console.error(error);
            }
        };

        const extractMainDomain = (hostname) => {
            const parts = hostname.split('.');
            if (parts.length > 2) {
                return parts.slice(-2).join('.');
            }
            return hostname;
        };

        const doUrlExist = (tab) => {
            return tab?.url;
        };

        const getActiveTab = () => {
            return chrome.tabs.query({ active: true, currentWindow: true });
        };

        const setDomainFromURL = (url) => {
            props.setDomain(extractMainDomain(url.hostname));
        };

        getDomain();
    }, [props]);

    return (
        <div>
            <h1>{props.domain}</h1>
        </div>
    );
};

export default DomainFetcher;
