import { app } from "../../app";
import { AttrConf } from "../../def/attr";

interface UBBData {
    text?: string;
    image?: string;
    b?: boolean; //加粗
    i?: boolean; //斜体
    u?: boolean; //下划线
    e?: string; //回调方法名
    c?: Laya.Color | string; //颜色
    fontSize?: number; //字体大小
    width?: number; //图片宽度
    height?: number; //图片宽度
}

const tlBBCodeStr = ["<color=", "<size=", "<b>", "<i>", "<u>", "<on click", "<outline color"];
export class StringUtil {
    /**
     *
     * @param str 类似 "{0}年{1}月{2}日"
     * @param args 类似 "2018","2","14"
     */
    public static format(str: string, ...args: any[]): string {
        const reg = /{(\d+)}/gm;
        return str.replace(reg, function (match, name) {
            return args[~~name];
        });
    }

    // 截取一定长度字符串,多于的以...代替 (不包含))
    public static cutString(str: string, count: number) {
        const length = str.length;
        if (length > count) {
            str = str.substr(0, count);
            str = str + "...";
        }
        return str;
    }

    //截取字符串 包含中文处理
    //(串,长度,增加...)
    public static cutString2(str: string, len: number, hasDot: boolean = true) {
        let newLength = 0;
        let newStr = "";
        const chineseRegex = /[^\u4E00-\u9FA5]/g;
        let singleChar = "";
        const strLength = str.replace(chineseRegex, "**").length;
        for (let i = 0; i < strLength; i++) {
            singleChar = str.charAt(i).toString();
            if (singleChar.match(chineseRegex) != null) {
                newLength += 2;
            } else {
                newLength++;
            }
            if (newLength > len) {
                break;
            }
            newStr += singleChar;
        }

        if (hasDot && strLength > len) {
            newStr += "...";
        }
        return newStr;
    }

    //字符是否有中文
    public static isCharHaveZH(str: string) {
        const chineseRegex = /[^\u4E00-\u9FA5]/g;
        return str.match(chineseRegex);
    }

    //一个中文算两个长度
    public static getCharLength(str: string) {
        const chineseRegex = /[^\u4E00-\u9FA5]/g;
        const length = str.replace(chineseRegex, "**").length;
        // console.log(length)
        return length;
    }

    //一个中文算三个长度
    public static getCharLength2(str: string) {
        const chineseRegex = /[^\u4E00-\u9FA5]/g;
        const length = str.replace(chineseRegex, "***").length;
        // console.log(length)
        return length;
    }

    /**
     *
     * @param str 类似 "%s年%s月%s日"
     * @param args 类似 "2018","2","14"
     */
    public static formatS(str: string, tlStr: string[]) {
        if (str == null || str == "" || tlStr == null) {
            return str;
        }

        const tlStr_ = str.split("%s");
        const length = tlStr_.length;

        const tlStr_new = [];

        for (let i = 0; i < length; i++) {
            tlStr_new.push(tlStr_[i]);
            if (tlStr[i] != null && i < length - 1) {
                tlStr_new.push(tlStr[i]);
            }
        }

        return tlStr_new.join("");
    }

    public static numbebrToFloatStr(num: number, count: number = 0): string {
        let numStr = num.toString();
        if (count != null) {
            const index = numStr.indexOf(".");
            if (index != -1) {
                if (count == 0) {
                    count = -1;
                }
                numStr = numStr.substr(0, index + 1 + count);
            }
        }
        return numStr;
    }

    /**
     * 过滤数组字 例如：forbidNumber（110000，100000，10000）=》 11万 （数字大于10万过滤）
     * @param num  数字
     * @param limitNumb 限制多少
     * @param convertNumber 转换值 （目前支持万，千） 默认 万
     */
    public static forbidNumber(
        num: number,
        limitNum: number = 10000,
        convertNumber: number = 1000
    ): string {
        if (num >= limitNum) {
            let limitStr: string;
            if (convertNumber == 10000) {
                limitStr = "万";
            } else if (convertNumber == 1000) {
                limitStr = "千";
            } else {
                convertNumber = 10000;
                limitStr = "万";
            }
            const n = Math.floor(num / convertNumber);
            return n.toString() + limitStr;
        }
        return num.toString();
    }

    /**不够位数,在前面填充0 */
    public static paddingNum(num: number, length: number): string {
        const len = (num + "").length;
        const diff = length - len;
        if (diff > 0) {
            return Array(diff + 1).join("0") + num;
        }
        return num.toString();
    }

    public static getNumValue(num_: string | number): number {
        if (typeof num_ == "string") {
            return parseInt(num_);
        }
        return num_;
    }

    /**自动换行 */
    public static autoNewLine(str: string, length: number): string {
        const stringArray = [];
        for (let i = 0; i < 10; i++) {
            const len = str.length;
            if (len > length) {
                const _str = str.substr(0, length);
                str = str.replace(_str, "");
                stringArray.push(_str);
            } else {
                const _str = str.substr(0, len);
                str = str.replace(_str, "");
                stringArray.push(_str);
                break;
            }
        }
        const len = str.length;
        if (len > 0) {
            stringArray.push(str);
        }
        return stringArray.join("\n");
    }

    /**数字转大写字符 0 ~ 9*/
    public static numberToBigNumberStr(num: number): string {
        let bigString: string = "";
        const tlTag: string[] = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        bigString = tlTag[num];
        return bigString;
    }

    /**
     *时间戳转换年月日
     * @param timestamp 时间戳
     * @returns
     */
    public static convertTimestampToYMD(timestamp: number): string {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    public static str2UBB(str: string, ...args: (UBBData | string | number)[]): string {
        const reg = /{(\d+)}/gm;
        return str.replace(reg, function (match, name) {
            // return args[~~name];
            const data = args[~~name];
            if (typeof data == "string") {
                return data;
            } else if (typeof data == "number") {
                return data.toString();
            } else {
                return StringUtil.getUBB(data);
            }
        });
    }

    private static getUBB(data: UBBData): string {
        let str = "";
        if (data.image) {
            str += `<img src='${data.image}'`;
            if (data.width) {
                str += ` width=${data.width}`;
            }
            if (data.height) {
                str += ` height=${data.height} `;
            }
            str += `/>`;
            return str;
        } else if (data.text) {
            if (data.u) {
                str += `<u>`;
            }
            if (data.i) {
                str += `<i>`;
            }
            if (data.b) {
                str += `<b>`;
            }
            str += data.text;
            for (const i of tlBBCodeStr) {
                if (str.indexOf(i) != -1) {
                    str = str + i;
                }
            }
            return str;
        }
        return "";
    }

    public static getAttrStr(attrId: number, val: number): string {
        const row = app.service.table.attr[attrId];
        if (row.show_type == AttrConf.SHOW_TYPE.INTEGER) {
            return `${row.name}:${val}`;
        } else {
            return `${row.name}:${val / 100}%`;
        }
        return "";
    }
}
