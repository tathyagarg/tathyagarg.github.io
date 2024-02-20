function timeConvert(UNIX) {
    const a = new Date(UNIX * 1000);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    return month + " " + date + ", " + year;
}

export default timeConvert