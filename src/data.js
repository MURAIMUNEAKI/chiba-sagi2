export const scenario = [
    {
        id: 1,
        title: "1. 市役所からの電話",
        text: "自宅の電話が鳴り、「市役所の健康保険課」を名乗る職員から、「累積医療費の過払い金が23,000円あります」と連絡が入りました。",
        image: "images/refund_fraud_call.png",
        choices: [
            {
                text: "「お金が戻ってくるなら嬉しい」と喜び、手続きをお願いする",
                nextId: 2,
                isSafe: false,
                feedback: "「過払い金がある」という電話は詐欺の典型的な入り口です。市役所が電話で還付金を通知することはありません。"
            },
            {
                text: "心当たりがないので、「書類で送ってください」と伝え、一度電話を切る",
                nextId: 2,
                isSafe: true,
                feedback: "素晴らしい対応です。電話だけで話を進めようとするのは詐欺です。必ず公的な書類を確認しましょう。"
            }
        ]
    },
    {
        id: 2,
        title: "2. 今日が期限！？",
        text: "「以前、青い封筒を送りましたが、期限が今日までなんです。今すぐ手続きをすれば間に合います」と相手は焦らせてきます。",
        image: "images/refund_fraud_urgency.png",
        choices: [
            {
                text: "「今日までなんて大変！」と焦り、急いで手続きを進める",
                nextId: 3,
                isSafe: false,
                feedback: "「今日中」「今すぐ」と急かすのは、冷静な判断力を奪うためのテクニックです。"
            },
            {
                text: "「期限が今日まで」という話は怪しいと思い、慌てずに確認する",
                nextId: 3,
                isSafe: true,
                feedback: "正解です。本当に還付金があるなら、期限が過ぎても窓口で手続きできるはずです。"
            }
        ]
    },
    {
        id: 3,
        title: "3. 窓口へは行くな？",
        text: "「コロナの影響で窓口は予約制です。お急ぎなので、お近くのスーパーやコンビニのATMで手続きしてもらえますか？」と言われました。",
        image: "images/refund_fraud_atm_lure.png",
        choices: [
            {
                text: "確かに窓口は混んでそうだし、ATMなら便利だと納得する",
                nextId: 4,
                isSafe: false,
                feedback: "ATMで還付金が戻ってくることは絶対にありません。「ATMで手続き」と言われたら100%詐欺です。"
            },
            {
                text: "役所が還付金の手続きでATMを指定することは絶対にない、と気づく",
                nextId: 4,
                isSafe: true,
                feedback: "その通り。役所がコンビニのATMへ行くように指示することは絶対にありません。"
            }
        ]
    },
    {
        id: 4,
        title: "4. 誰にも言うな",
        text: "「ATMに着いたら、こちらの番号に電話してください。店員や他の人に聞かれると、個人情報保護のため手続きが停止します」と釘を刺されました。",
        image: "images/refund_fraud_walking_to_atm.png",
        choices: [
            {
                text: "大事な個人情報だから、誰にも聞かれないようにこっそり行く",
                nextId: 5,
                isSafe: false,
                feedback: "周囲に相談させないよう孤立させるのが犯人の手口です。"
            },
            {
                text: "「誰にも言うな」は詐欺の決まり文句。家族や店員に相談する",
                nextId: 5,
                isSafe: true,
                feedback: "大正解です。少しでも不審に思ったら、周りの人や警察（#9110）に相談しましょう。"
            }
        ]
    },
    {
        id: 5,
        title: "5. ATMに到着",
        text: "コンビニのATMに到着しました。指示通り携帯電話をつないだまま、ATMの画面の前に立ちます。",
        image: "images/refund_fraud_at_atm_phone.png",
        choices: [
            {
                text: "親切に教えてくれるから安心だと思い、言われた通りにする",
                nextId: 6,
                isSafe: false,
                feedback: "携帯電話で通話しながらATMを操作している人は、詐欺の被害者である可能性が高いです。"
            },
            {
                text: "携帯電話で通話しながらATMを操作するのはおかしいと気づく",
                nextId: 6,
                isSafe: true,
                feedback: "正しい判断です。銀行や警察も「通話しながらのATM操作」を止めるよう呼びかけています。"
            }
        ]
    },
    {
        id: 6,
        title: "6. 謎のボタン指示",
        text: "「操作を案内します。まずは残高照会をして...次に『振込』ボタンを押してください。これは『受け取り承認』のボタンです」",
        image: "images/refund_fraud_atm_instruction.png",
        choices: [
            {
                text: "機械は難しいから、「振込」が「承認」の意味なのだろうと信じる",
                nextId: 7,
                isSafe: false,
                feedback: "「振込」はお金を「送る」ボタンです。「受け取る」ためのボタンではありません！"
            },
            {
                text: "「振込」ボタンは相手にお金を送るボタンだ！とはっきり断る",
                nextId: 7,
                isSafe: true,
                feedback: "その通り。「還付金を受け取るために振込ボタンを押して」というのは明らかな嘘です。"
            }
        ]
    },
    {
        id: 7,
        title: "7. 暗証コードの入力",
        text: "「では、あなたの受付番号を入力します。『498000』と入力して、『確認』を押してください」と言われました。",
        image: "images/refund_fraud_input_code.png",
        choices: [
            {
                text: "受付番号だと思い、疑いなく「498000」と入力する",
                nextId: 8,
                isSafe: false,
                feedback: "それは受付番号ではありません！「49万8000円」という送金額を入力させられています。"
            },
            {
                text: "それは金額入力画面だ！約50万円を送金させようとしていると見抜く",
                nextId: 8,
                isSafe: true,
                feedback: "お見事です。犯人は「コード」や「番号」と偽って、金額を入力させようとします。"
            }
        ]
    },
    {
        id: 8,
        title: "8. 送金先の確認",
        text: "「画面に振込先の名義が表示されますが、これは当面の『管轄センター』の名前です。そのまま実行ボタンを押してください」",
        image: "images/refund_fraud_at_atm_phone.png",
        choices: [
            {
                text: "役所の委託先なのかな？と思い、実行ボタンを押す",
                nextId: 9,
                isSafe: false,
                feedback: "振込先が個人名義や全く関係ない法人名義である場合、それは犯人の口座です。"
            },
            {
                text: "振込先が個人名義や知らない会社名なら、100%詐欺だと判断して中止する",
                nextId: 9,
                isSafe: true,
                feedback: "正解です。公的機関が一般の口座を指定することは絶対にありません。"
            }
        ]
    },
    {
        id: 9,
        title: "9. エラーが出た？",
        text: "操作を終えると、「エラーが出ましたね。手続きが完了していません」と言われました。しかし、口座からはお金が減っている気がします...",
        image: "images/refund_fraud_receipt_fail.png",
        choices: [
            {
                text: "失敗したなら、もう一度最初からやり直そうとする",
                nextId: 10,
                isSafe: false,
                feedback: "「エラーが出た」と嘘をつき、何度も送金させるのも手口の一つです。"
            },
            {
                text: "「エラー」と言って複数回送金させる手口だ！すぐに銀行に連絡する",
                nextId: 10,
                isSafe: true,
                feedback: "賢明な判断です。すぐに行員を呼ぶか、警察に通報してください。"
            }
        ]
    },
    {
        id: 10,
        title: "10. キャッシュカードの交換",
        text: "後日、「あなたのカードは磁気が古いためエラーが出ました。職員が新しいカードを持って交換に伺います」と連絡がありました。",
        image: "images/refund_fraud_card_swap.png",
        choices: [
            {
                text: "新しいカードにしてくれるなら親切だと思い、自宅で待つ",
                nextId: "result",
                isSafe: false,
                feedback: "これは「預貯金詐欺」です。カードを騙し取り、暗証番号を聞き出して現金を引き出されます。"
            },
            {
                text: "これは詐欺の「追い打ち」だ。カードを渡すなんて絶対におかしい！",
                nextId: "result",
                isSafe: true,
                feedback: "完璧です。絶対に他人にキャッシュカードを渡したり、暗証番号を教えてはいけません。"
            }
        ]
    }
];

export const results = {
    safe: {
        title: "還付金詐欺を撃退！",
        text: "素晴らしい防犯意識です！\n「ATMで還付金」は100%詐欺。\nこの鉄則を知っているだけで、被害は防げます。\nぜひ、ご家族やご友人にも教えてあげてください。",
        image: "images/result_safe.png",
        advice: "【対策】ATMに行く前に、必ず家族や警察（#9110）に相談しましょう。「携帯で通話しながらATM」は詐欺のサインです！"
    },
    scammed: {
        title: "その言葉、詐欺かも...",
        text: "「お金が戻る」「今日中」という言葉に心が揺らいでしまいましたね。\n犯人は言葉巧みに焦らせてきます。\n電話でお金の話が出たら、まずは「詐欺」を疑ってください。",
        image: "images/result_scammed.png",
        advice: "【対策】市役所がATMの操作をお願いすることは絶対にありません。怪しい電話はすぐに切り、公式の番号にかけ直しましょう。"
    }
};
