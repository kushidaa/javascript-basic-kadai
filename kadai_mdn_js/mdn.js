// 今日の日付を取得してフォーマットするアロー関数
const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 月は0から始まるため+1する
    const day = today.getDate();

    return `${year}年${month}月${day}日`;
};

// アロー関数を使ってコンソールに出力
console.log(`今日の日付: ${getTodayDate()}`);
