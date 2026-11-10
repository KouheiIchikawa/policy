window.POCKET_RESIDENTS = {
  "schemaVersion": 1,
  "count": 6,
  "salaryLabels": {
    "gross": {
      "ja": "額面給与",
      "en": "Gross wages"
    },
    "disposable": {
      "ja": "可処分額の例",
      "en": "Example disposable amount"
    },
    "ownerRevenue": {
      "ja": "所有者への収益",
      "en": "Revenue paid to owner"
    },
    "unpaidClaim": {
      "ja": "未払請求額（出金不可）",
      "en": "Back-pay claim (not withdrawable)"
    },
    "status": {
      "ja": "支給状態",
      "en": "Payment status"
    },
    "period": {
      "ja": "集計期間",
      "en": "Accounting period"
    }
  },
  "dimensionLabels": {
    "lengthM": {
      "ja": "全長（m）",
      "en": "Length (m)"
    },
    "weightKg": {
      "ja": "重量（kg）",
      "en": "Weight (kg)"
    }
  },
  "economy": {
    "title": {
      "ja": "ロボットにも、使い道のある給与を。",
      "en": "Even robots need pay they can spend."
    },
    "intro": {
      "ja": "舞台は20XX。アンドロイドが広まった社会では、機体の所有者と働く人格は同じとは限りません。充電は仕事の経費。給与は、命令されていない時間を生きるためのお金です。",
      "en": "The setting is 20XX. In a society of widespread androids, the body's owner and the working personality are not always the same. Charging is a work expense; wages pay for life outside orders."
    },
    "rules": [
      {
        "ja": "給与は共通会計暦30日で集計します。",
        "en": "Pay covers 30 common-accounting days."
      },
      {
        "ja": "給与は働く人格の口座へ。業務の充電・弾薬・標準修理は雇用主の設備費で、本人への報酬とは別です。",
        "en": "Wages go to the working personality's account. Work charging, ammunition, and standard repairs are employer costs, separate from personal compensation."
      },
      {
        "ja": "居住区画や記憶保管などの控除後、残りを私物・娯楽・任務外の移動に使います。可処分額はこの個体の当月例です。",
        "en": "After housing, memory storage, and other deductions, the remainder pays for possessions, leisure, and off-duty travel. Disposable amounts are examples for these individuals."
      },
      {
        "ja": "口座と移動許可は登録に結びつき、凍結されれば稼いだ金も使えません。本人の給与が0Cでも、所有者には収益が入る場合があります。",
        "en": "Accounts and travel permits depend on registration. A freeze can make earned pay unusable. An individual may receive 0C while the owner earns revenue."
      }
    ]
  },
  "characters": [
    {
      "base": "drone",
      "id": "drone",
      "name": {
        "ja": "ツギ",
        "en": "Tsugi"
      },
      "speciesName": {
        "ja": "境界防衛機",
        "en": "Border Defense Unit"
      },
      "designation": {
        "ja": "B-017",
        "en": "B-017"
      },
      "classification": {
        "ja": "人格登録済みの境界防衛端末",
        "en": "Registered border-defense unit"
      },
      "role": {
        "ja": "境界線を維持する前衛。盾役に配属される編隊もある。",
        "en": "Holds the border line; some formations assign shield duty."
      },
      "personality": {
        "ja": "几帳面で口下手。ずれた境界標識を直すが、迷子の靴も同じ丁寧さで並べる。",
        "en": "Meticulous and awkward with words. Straightens border signs and lost children's shoes with equal care."
      },
      "belief": {
        "ja": "境界は帰る場所を守るために引く。それなら、線の外の家は誰が守る。",
        "en": "Borders protect a place to return to. Who protects the homes outside the line?"
      },
      "payUse": {
        "ja": "境界外の宿で一晩過ごすため、600Cを貯めている。",
        "en": "Saving 600C for a night at an inn beyond the border."
      },
      "salary": {
        "currency": "C",
        "period": {
          "ja": "共通会計暦30日",
          "en": "30 common-accounting days"
        },
        "gross": 1200,
        "disposable": 180,
        "ownerRevenue": null,
        "unpaidClaim": null,
        "status": {
          "ja": "人格口座への給与",
          "en": "Wages credited to the personality account"
        },
        "note": {
          "ja": "区域外への移動で口座が凍結される。可処分額180Cは凍結前の当月例。",
          "en": "Travel outside the assigned area triggers an account freeze. The 180C disposable figure is an example before freezing."
        }
      },
      "canonicalDimensions": {
        "lengthM": 0.92,
        "weightKg": 18
      },
      "image": "assets/enemies/drone.webp"
    },
    {
      "base": "white-rider",
      "id": "white-rider-unit",
      "name": {
        "ja": "レイン",
        "en": "Rain"
      },
      "speciesName": {
        "ja": "白バイ隊員",
        "en": "Motorcycle Patrol Officer"
      },
      "designation": {
        "ja": "W-04",
        "en": "W-04"
      },
      "classification": {
        "ja": "交通警備用アンドロイド",
        "en": "Traffic-security android"
      },
      "role": {
        "ja": "二連射で車線を狭め、前衛と避難車の進路を分断する。",
        "en": "Uses twin shots to separate the vanguard from evacuation vehicles."
      },
      "personality": {
        "ja": "時間厳守で部下思い。地図には正確だが、行き先を失った相手に弱い。",
        "en": "Punctual and protective of subordinates. Knows routes, but struggles with people who have nowhere to go."
      },
      "belief": {
        "ja": "例外を許せば道が詰まる。例外を許さなければ、救急車も止まる。",
        "en": "Exceptions can block a road. Without exceptions, ambulances stop too."
      },
      "payUse": {
        "ja": "廃止された海岸道路の走行権を買い、任務なしで走る。",
        "en": "Buys access to a closed coastal road to ride without an assignment."
      },
      "salary": {
        "currency": "C",
        "period": {
          "ja": "共通会計暦30日",
          "en": "30 common-accounting days"
        },
        "gross": 2100,
        "disposable": 420,
        "ownerRevenue": null,
        "unpaidClaim": null,
        "status": {
          "ja": "人格口座への給与",
          "en": "Wages credited to the personality account"
        }
      },
      "image": "assets/enemies/white-rider.webp"
    },
    {
      "base": "fighter",
      "id": "fighter",
      "name": {
        "ja": "ヒビキ",
        "en": "Hibiki"
      },
      "speciesName": {
        "ja": "境界の格闘家",
        "en": "Border Martial Artist"
      },
      "designation": {
        "ja": "身体貸与契約 F-22",
        "en": "Body-lease contract F-22"
      },
      "classification": {
        "ja": "身体貸与契約で働く格闘家",
        "en": "Martial artist under a body-lease contract"
      },
      "role": {
        "ja": "三方向の回転刃で間合いを作る接近阻止役。",
        "en": "Keeps opponents at a distance with spinning blades in three directions."
      },
      "personality": {
        "ja": "陽気で面倒見がよい。負けるのは平気だが、弱い相手に勝つ仕事を嫌う。",
        "en": "Cheerful and caring. Accepts losing, but hates being paid to beat weaker opponents."
      },
      "belief": {
        "ja": "強さは倒した人数ではなく、立ち上がれた人数で測る。",
        "en": "Strength is measured by how many people stand back up, not how many fall."
      },
      "payUse": {
        "ja": "閉鎖した道場の床を借り直す。",
        "en": "Wants to rent the floor of the closed dojo again."
      },
      "salary": {
        "currency": "C",
        "period": {
          "ja": "共通会計暦30日",
          "en": "30 common-accounting days"
        },
        "gross": 2800,
        "disposable": 730,
        "ownerRevenue": null,
        "unpaidClaim": null,
        "status": {
          "ja": "人格口座への給与",
          "en": "Wages credited to the personality account"
        }
      },
      "canonicalDimensions": {
        "lengthM": 1.88,
        "weightKg": 92
      },
      "image": "assets/enemies/fighter.webp"
    },
    {
      "base": "elder",
      "id": "elder",
      "name": {
        "ja": "セヴラン",
        "en": "Sevran"
      },
      "speciesName": {
        "ja": "黒衣の執行役",
        "en": "Black-Robed Enforcer"
      },
      "designation": {
        "ja": "執行簿 EX-09",
        "en": "Enforcement register EX-09"
      },
      "classification": {
        "ja": "立ち退き契約の執行役",
        "en": "Eviction-contract enforcer"
      },
      "role": {
        "ja": "戻る鎌で撤退路を押さえる立ち退き執行官。",
        "en": "Enforces evictions, cutting off retreat with a returning scythe."
      },
      "personality": {
        "ja": "礼儀正しく記憶力がよい。残酷な内容ほど柔らかい声で読む。",
        "en": "Polite, with an excellent memory. Reads the cruelest notices in the gentlest voice."
      },
      "belief": {
        "ja": "秩序を残すためなら不公平な契約も執行する。自分の判断で止めて、責任を負うほうが怖い。",
        "en": "Enforces unfair contracts to preserve order; taking responsibility for stopping them feels more frightening."
      },
      "payUse": {
        "ja": "消えた街の住所録を買い集めている。",
        "en": "Collects address books from vanished towns."
      },
      "salary": {
        "currency": "C",
        "period": {
          "ja": "共通会計暦30日",
          "en": "30 common-accounting days"
        },
        "gross": 3400,
        "disposable": 1560,
        "ownerRevenue": null,
        "unpaidClaim": null,
        "status": {
          "ja": "人格口座への給与",
          "en": "Wages credited to the personality account"
        }
      },
      "canonicalDimensions": {
        "lengthM": 1.83,
        "weightKg": 74
      },
      "image": "assets/enemies/elder.webp"
    },
    {
      "base": "brawler",
      "id": "hound",
      "name": {
        "ja": "追跡機ハウンド",
        "en": "Pursuer Hound"
      },
      "speciesName": {
        "ja": "重量追跡機",
        "en": "Heavy pursuit unit"
      },
      "designation": {
        "ja": "",
        "en": ""
      },
      "classification": {
        "ja": "重量追跡機",
        "en": "Heavy pursuit unit"
      },
      "role": {
        "ja": "境界を越えた人間を追う重量機。「震砕鉄拳」で避難路を瓦礫に変える。",
        "en": "A heavy unit that pursues humans across the border, smashing escape routes into rubble with its crushing fists."
      },
      "personality": {
        "ja": "律儀で執拗。警告は省かないが、期限を過ぎれば事情を聞かない。",
        "en": "Dutiful and relentless. Always gives a warning, but hears no excuses once the deadline passes."
      },
      "belief": {
        "ja": "一度の例外が、次の争いを呼ぶ。",
        "en": "One exception invites the next conflict."
      },
      "payUse": {
        "ja": "480kgの身体で休める、私物の椅子を買う。",
        "en": "A chair of his own, strong enough for his 480kg body."
      },
      "salary": {
        "currency": "C",
        "period": {
          "ja": "共通会計暦30日",
          "en": "30 common-accounting days"
        },
        "gross": 4200,
        "disposable": null,
        "ownerRevenue": null,
        "unpaidClaim": null,
        "status": {
          "ja": "人格口座への給与",
          "en": "Wages credited to the personality account"
        },
        "note": {
          "ja": "充電と拳の修理は部隊経費。貯金はできるが、待機解除を自分では決められない。",
          "en": "Charging and fist repairs are paid by the unit. He can save money, but cannot choose when to go off standby."
        }
      },
      "canonicalDimensions": {
        "lengthM": 2.65,
        "weightKg": 480
      },
      "image": "assets/enemies/brawler.webp"
    },
    {
      "base": "sorceress",
      "id": "collector",
      "name": {
        "ja": "徴収官ヴェイル",
        "en": "Collector Veil"
      },
      "speciesName": {
        "ja": "土地の徴収官",
        "en": "Land-fee collector"
      },
      "designation": {
        "ja": "",
        "en": ""
      },
      "classification": {
        "ja": "土地の徴収官",
        "en": "Land-fee collector"
      },
      "role": {
        "ja": "土地の維持費を人命で徴収する。「紫電封鎖」の螺旋が退路を塞ぐ。",
        "en": "Collects land fees in human lives, sealing escape routes with spirals of violet electricity."
      },
      "personality": {
        "ja": "人の弱みを読む交渉上手。事情を理解したうえで、その事情にも値札を付ける。",
        "en": "A skilled negotiator who reads people’s weaknesses. Understands their circumstances, then puts a price on them."
      },
      "belief": {
        "ja": "維持費を払う者にだけ、土地を守る資格がある。",
        "en": "Only those who pay the upkeep deserve to keep their land."
      },
      "payUse": {
        "ja": "誰もが入りたがる私設庭園を買い、誰を招くかも、いくら払わせるかも、自分で決めたい。",
        "en": "To buy a private garden everyone wants to enter, then decide who gets invited and how much they must pay."
      },
      "salary": {
        "currency": "C",
        "period": {
          "ja": "共通会計暦30日",
          "en": "30 common-accounting days"
        },
        "gross": 6800,
        "disposable": null,
        "ownerRevenue": null,
        "unpaidClaim": null,
        "status": {
          "ja": "基本給＋納付率に応じた手当",
          "en": "Base salary plus a collection-rate allowance"
        },
        "note": {
          "ja": "徴収金は中枢へ入り、本人の財産にはならない。凍結口座の解除を申請できる管理職。",
          "en": "Collected funds go to the core, not her own account. As an administrator, she can request the release of frozen accounts."
        }
      },
      "canonicalDimensions": {
        "lengthM": 1.76,
        "weightKg": 58
      },
      "image": "assets/enemies/sorceress.webp"
    }
  ]
};
