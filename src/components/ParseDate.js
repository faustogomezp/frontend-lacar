
export const ParseDate = ({ dateData }) => {
    let dateTime = dateData.getTime();
    let dateTimeReal = dateTime - 18000000;
    dateData.setTime(dateTimeReal);

    return (
        <time>
            { dateData.toLocaleString() }
        </time>
    )
}