/**
 * @file util.js
 * @author shenjp@founder.com
 * @date 2019-03-30 15:14:53
 */
const App = {};

export default (App.utils = {
    /**
     * dateFormat
     *
     * @param {number} time 时间戳
     * @param {string} format 时间格式, 默认'YYYY年MM月DD日'
     * @return {string} 真实数字替换掉YYYY, MM, DD, H, M, S
     */
    dateFormat(time = Date.now(), format) {
        let zeroFill = function(num) {
            return num < 10 ? '0' + num : num;
        };
        let formatStr = format || 'YYYY年MM月DD日';
        // Safari new Date('yyyy-mm-dd hh:mm:ss') => Invalid Date
        let date = new Date(time);
        let year = date.getFullYear();
        let month = zeroFill(date.getMonth() + 1);
        let day = zeroFill(date.getDate());
        let hour = zeroFill(date.getHours());
        let minute = zeroFill(date.getMinutes());
        let second = zeroFill(date.getSeconds());
        const formatArr = ['YYYY', 'MM', 'DD', 'H', 'M', 'S'];
        const dateArr = [year, month, day, hour, minute, second];
        for (let i = 0; i < formatArr.length; i++) {
            formatStr = formatStr.replace(formatArr[i], dateArr[i]);
        }
        return formatStr;
    },
    /**
     *
     * @param {String} value 时间字符串 2018-22-22 11:11:11
     * @return {String}
     */
    formatTime(value) {
        if (!value) {
            console.error('Please input value');
            return;
        }
        let oldData = new Date(value.substr(0, 19).replace(/-/g, '/'));
        // console.log(oldData);
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
    },
    addZero(value) {
        return value > 10 ? value : '0' + value;
    },
    // 格式化视频播放时长 122 => 2:02
    durationTime(value) {
        if (!value) {
            return '00:00';
        }
        if (value < 60) {
            return `00:${value}`;
        }
        let mins = 0;
        let second = 0;
        mins = parseInt(value / 60);
        second = value % 60;
        return `${this.addZero(mins)}:${this.addZero(second)}`;
    },
    // 获取当前时间
    currentTime() {
        return new Date().getTime();
    },
    /**
     * 将字符串转为时间戳 2019-4-25 11:11:11  => 1556161871000
     * @param {String} value 时间字符串
     * @return {Number} 时间戳
     */
    str2Stamp(value) {
        if (!value) {
            console.error('Please input value');
            return '';
        }
        if ((typeof value) !== 'string') {
            console.error('Please input string value');
            return '';
        }
        return new Date(value.replace(/-/g, '/')).getTime();
    }
});
