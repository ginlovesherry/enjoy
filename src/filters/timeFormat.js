export const normalTime = (time) => {
    if (time) {
        let oDate = new Date();
        oDate.setTime(time);

        let Years = oDate.getFullYear();
        let months = oDate.getMonth() + 1;
        let days = oDate.getDate();

        let hours = oDate.getHours();
        let minute = oDate.getMinutes();
        let seconds = oDate.getSeconds();

        return Years + '-' + months + '-' + days + ' ' + hours + ':' + minute + ':' + seconds;
    }
}
