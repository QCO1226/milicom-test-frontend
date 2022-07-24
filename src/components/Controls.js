import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faAngleLeft, faAngleRight, faForwardStep } from '@fortawesome/free-solid-svg-icons';

const Controls = props =>{

    return(
        <div className='controls-div'>
            <FontAwesomeIcon icon={faBackwardStep} className="app-controls" onClick={()=>props.changeCurrentComic(1)} />
            {(props.current-1) >= 1 ?(

                <FontAwesomeIcon icon={faAngleLeft} className="app-controls" onClick={()=>props.changeCurrentComic(props.current-1)} />
            ):(
                <FontAwesomeIcon icon={faAngleLeft} className="app-controls-disabled"  />
            )
            }
            {(props.current+1) >props.total ?(
                <FontAwesomeIcon icon={faAngleRight} className="app-controls-disabled"  />
                ):(
                <FontAwesomeIcon icon={faAngleRight} className="app-controls" onClick={()=>props.changeCurrentComic(props.current+1)} />
            )
            }

            <FontAwesomeIcon icon={faForwardStep} className="app-controls" onClick={()=>props.changeCurrentComic(props.total)} />
        </div>
    )
}

export default Controls;