export const scenario = [
    {
        id: 1,
        title: "1. 警察署からの着信？",
        text: "あなたの携帯に「千葉県警捜査二課」や「＋１」から始まる番号から着信がありました。自動音声で「あなたの携帯電話が詐欺に使われています」と流れます。",
        image: "images/phone_ring_suspicious_anime.png",
        choices: [
            {
                text: "警察からの電話なら大変だ！と思い、ガイダンスに従う",
                nextId: 2,
                isSafe: false,
                feedback: "警察が自動音声で電話をかけることは絶対にありません。これは詐欺の入り口です。"
            },
            {
                text: "警察署の代表番号を自分で調べて、かけ直す",
                nextId: 2,
                isSafe: true,
                feedback: "正解です。表示された番号を鵜呑みにせず、必ず公式の番号を確認しましょう。"
            }
        ]
    },
    {
        id: 2,
        title: "2. 偽刑事の登場",
        text: "ガイダンスに従うと、低い声の男が出ました。「私は捜査二課のタカハシという刑事だ。あなたを詐欺の容疑者として捜査している」",
        image: "images/fake_police_officer_anime.png",
        choices: [
            {
                text: "「容疑者！？」と動揺し、無実を証明しようと必死になる",
                nextId: 3,
                isSafe: false,
                feedback: "「刑事」「容疑者」という言葉で威圧し、冷静さを奪うのがニセ警察官の手口です。"
            },
            {
                text: "「所属と階級、職員番号を教えてください」と冷静に聞く",
                nextId: 3,
                isSafe: true,
                feedback: "良い対応です。本物の警察官なら答えられるはずですが、詐欺師は誤魔化します。"
            }
        ]
    },
    {
        id: 3,
        title: "3. 偽りの取調べ",
        text: "自称・刑事は畳み掛けます。「無実なら協力できるはずだ。今からあなたの身元引受人などの調査を行う。名前と生年月日を言いなさい」",
        image: "images/fake_police_officer_anime.png",
        choices: [
            {
                text: "警察にお願いされているのだから協力する",
                nextId: 4,
                isSafe: false,
                feedback: "電話で個人情報を聞き出す「電話取調べ」は行われません。"
            },
            {
                text: "「電話では答えられない。警察署に出頭します」と伝える",
                nextId: 4,
                isSafe: true,
                feedback: "大正解。電話だけで捜査が進むことはありません。出頭を申し出ると彼らは嫌がります。"
            }
        ]
    },
    {
        id: 4,
        title: "4. メッセージで届く逮捕状",
        text: "「出頭する時間はない！もう逮捕状が出ているんだ！」そう言って、LINEで『逮捕状』の画像が送られてきました。",
        image: "images/personal_info_leak.png",
        choices: [
            {
                text: "逮捕状の写真を見て、本物だと信じてしまう",
                nextId: 5,
                isSafe: false,
                feedback: "逮捕状をLINEやメールで送ることは法律上ありえません。画像は偽造です。"
            },
            {
                text: "「そんな手続きはおかしい」と気づき、無視する",
                nextId: 5,
                isSafe: true,
                feedback: "ご名答。警察がSNSを使って公文書を送ることは絶対にありません。"
            }
        ]
    },
    {
        id: 5,
        title: "5. ビデオ通話での監視誘導",
        text: "「逃亡の恐れがあるため、ビデオ通話を繋ぎなさい。私の顔を見れば本物の警察官だとわかるはずだ」男は制服姿でビデオ通話に現れました。",
        image: "images/video_call_surveillance.png",
        choices: [
            {
                text: "制服を着ているから本物の警官だと信じる",
                nextId: 6,
                isSafe: false,
                feedback: "制服は通販で買えます。画面越しの制服姿に騙されてはいけません。"
            },
            {
                text: "「本物の警察はいちいちビデオ通話などしない」と考える",
                nextId: 6,
                isSafe: true,
                feedback: "その通り。ビデオ通話は、あなたの顔や背景から居場所を特定するための罠です。"
            }
        ]
    },
    {
        id: 6,
        title: "6. 資産の潔白証明",
        text: "「あなたの口座にある金が、犯罪収益でないことを証明する必要がある。全ての資産を警察が一時的に預かり、鑑識に回す」",
        image: "images/asset_declaration.png",
        choices: [
            {
                text: "疑いを晴らすため、言われた通りにする",
                nextId: 7,
                isSafe: false,
                feedback: "警察が現金を預かったり、鑑識に回すために送金させることは絶対にありません。"
            },
            {
                text: "「令状を持って家に来てください」と要求する",
                nextId: 7,
                isSafe: true,
                feedback: "正解です。資産の押収には必ず裁判所の令状が必要で、現場で行われます。"
            }
        ]
    },
    {
        id: 7,
        title: "7. 捜査用保全口座",
        text: "「裁判所の許可を得た『捜査用保全口座』を用意した。ここへ送金すれば、あなたの金は国によって守られる」",
        image: "images/fake_transfer_screen_anime.png",
        choices: [
            {
                text: "国が守ってくれるなら安全だと思い、送金に同意する",
                nextId: 8,
                isSafe: false,
                feedback: "「安全口座」「保全口座」といった名目で警察が送金を指示するのは詐欺の典型です。"
            },
            {
                text: "警察が一般の銀行口座を指定するのはおかしいと気づく",
                nextId: 8,
                isSafe: true,
                feedback: "お見事。振込先が個人名義や一般企業の口座であれば、100%詐欺です。"
            }
        ]
    },
    {
        id: 8,
        title: "8. 共犯の銀行員",
        text: "「銀行の窓口には行くな。あそこの行員は詐欺グループの一味としてマークしている。気取られずにネットバンキングで送金しろ」",
        image: "images/net_banking_login.png",
        choices: [
            {
                text: "警察の言うことだから信じて、誰にも言わずに操作する",
                nextId: 9,
                isSafe: false,
                feedback: "銀行員を敵に仕立て上げ、詐欺を阻止されないように完全に孤立させる手口です。"
            },
            {
                text: "銀行員が共犯なんて映画みたいな話は信じない",
                nextId: 9,
                isSafe: true,
                feedback: "冷静な判断です。銀行は警察と連携して詐欺を防ぐ立場にあります。"
            }
        ]
    },
    {
        id: 9,
        title: "9. 極秘捜査員への任命",
        text: "「あなたは今から民間の『協力捜査員』だ。この任務は国家機密であり、家族に漏らせば守秘義務違反で逮捕される」",
        image: "images/urgency_clock.png",
        choices: [
            {
                text: "捜査員に任命された責任感から、秘密を守る",
                nextId: 10,
                isSafe: false,
                feedback: "一般人を電話一本で『捜査員』に任命することは絶対にありません。"
            },
            {
                text: "「そんな漫画みたいな話があるか」と笑い飛ばす",
                nextId: 10,
                isSafe: true,
                feedback: "その通り！特別感を演出して、誰にも相談させないための芝居です。"
            }
        ]
    },
    {
        id: 10,
        title: "10. 最後の命令",
        text: "「犯人逮捕の瞬間が迫っている！今すぐATMへ行き、捜査本部と通話を繋いだまま、指示通りに現金を確保（送金）しろ！」",
        image: "images/atm_operation_danger.png",
        choices: [
            {
                text: "犯人逮捕に協力するため、急いでATMへ向かう",
                nextId: "result",
                isSafe: false,
                feedback: "警察がATMを操作させて捜査協力を求めることはありません。それは詐欺です！"
            },
            {
                text: "「詐欺だ！」と確信し、電話を切って#9110へ通報",
                nextId: "result",
                isSafe: true,
                feedback: "完璧な対応です。ニセ警察官の言葉に惑わされず、自分の財産を守り抜きました。"
            }
        ]
    }
];

export const results = {
    safe: {
        title: "ニセ警察官を撃退！",
        text: "見事です！あなたは警察を騙る卑怯な詐欺師の嘘を全て見抜きました。\n警察官が「口座」「暗証番号」「送金」の話をすることは絶対にない。\nこの鉄則を、ぜひ周りの人にも広めてください。",
        image: "images/result_safe_anime.png",
        advice: "【対策】犯人は録音を嫌がります。留守電設定や、通話録音機の設置が最強の防犯です。"
    },
    scammed: {
        title: "偽の権威に騙されないで...",
        text: "「逮捕」「捜査」という言葉に動揺してしまいましたね。\nそれが詐欺師の狙いです。彼らは警察官の制服や専門用語を使って、あなたを信じ込ませようとします。",
        image: "images/result_scammed_anime.png",
        advice: "【対策】「警察です」と電話があったら、一度切って、必ず警察署の番号を調べてかけ直してください。"
    }
};
