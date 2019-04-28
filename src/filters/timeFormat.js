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

export const formatTime = value => {
    if (!value) {
        console.error('Please input value');
        return;
    }
    let oldData = new Date(value.substr(0, 19).replace(/-/g, '/'));
    let newData = new Date();
    let diffTime = Math.abs(oldData - new Date());
    if (diffTime > 24 * 3600 * 1000) {
        value = value.toString();
        return value.substring(5, 11);
    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
        let time = newData.getTime() - oldData.getTime();
        let dayNum = Math.floor(time / (60 * 60 * 1000));
        return dayNum + '小时前';
    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
        var time = newData.getTime() - oldData.getTime();
        var dayNum = Math.floor(time / (60 * 1000));
        return dayNum + '分钟前';
    }
}
