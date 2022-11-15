import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface PROPS{
    count:number
    time:number
}

function CounterUp({ count, time }:PROPS) {
    return (
        <>
            <CountUp end={count} duration={time}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef}>count</span>
                    </VisibilitySensor>
                )}
            </CountUp>
        </>
    );
}

export default  CounterUp