import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import { cBoolean } from './helperFunctions';

const useDetectOutsideClick = (el, initialState, disableScroll, allClicks) => {
    const [isActive, setIsActive] = useState(initialState),
        checkScroll = cBoolean(disableScroll),
        checkAllClicks = cBoolean(allClicks);

    useEffect(() => {
        const pageClickEvent = (e) => {
                // If the active element exists and is clicked outside of
                if (
                    el.current !== null &&
                    !el.current.contains(e.target) &&
                    checkAllClicks
                ) {
                    setIsActive(!isActive);
                }
            },
            handleBrowserEvent = throttle(() => {
                setIsActive(!isActive);
            }, 500);

        // If the item is active (ie open) then listen for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
            window.addEventListener('resize', handleBrowserEvent);
            if (!checkScroll) {
                document.addEventListener('scroll', handleBrowserEvent);
            }
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
            window.removeEventListener('resize', handleBrowserEvent);
            if (!checkScroll) {
                document.removeEventListener('scroll', handleBrowserEvent);
            }
        };
    }, [isActive, el]);

    return [isActive, setIsActive];
};

export default useDetectOutsideClick;
