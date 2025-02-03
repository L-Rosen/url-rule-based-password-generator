import { useEffect } from "react";

const DomainFetcher = (props) => {

    useEffect(() => {
        const getDomain = async () => {
          try {
            //Récupération de l'onglet actif
            const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    
            //Récupération du domaine en supprimant tout les sous-domaines
            if(tab?.url) {
              const url = new URL(tab.url);
              props.setDomain(extractMainDomain(url.hostname));
            }
          }
          catch(error) {
            console.error(error);
          }
        }
        getDomain();
      }, [props]);
    
      const extractMainDomain = (hostname) => {
        const parts = hostname.split('.');
        if (parts.length > 2) {
          return parts.slice(-2).join('.'); 
        }
        return hostname;
      };

    return (
        <div>
            <h1>{props.domain}</h1>
        </div>)
    }

export default DomainFetcher;