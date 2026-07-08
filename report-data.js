window.REPORT_DATA = {
  title: "Daily Intelligence",
  subtitle: "Fixed Income Desk | Signal-First | 1d/1brokers",
  threads: [
  {
    "id": "thread-ust-supply",
    "name": "UST 供给压力与利率卖压",
    "status": "延续中 · GS报道全曲线卖压",
    "assetClass": "Rates",
    "latestChange": "Jul 7 UST全曲线卖压约7bps，供给压力+油价反弹共同驱动，Amazon $25b发债需求低于预期",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "UST全曲线卖压~7bps，2y-30y均上行。主要驱动：供给压力+油价反弹。Swap spreads收紧。$58b 3y拍卖结果稳健（through 0.6bps，非经销商拿走92.3%）。Amazon $25b发债需求偏软。UVF有buyer 24k FV，TU vs WN flattener。市场定价~34bps加息至年底，~43bps至明年4月。今日关注$38b 10y reopening + FOMC纪要"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-iran-risk",
    "name": "中东局势升级 / 伊朗风险",
    "status": "新事件 · 美国撤销伊朗石油豁免",
    "assetClass": "Commodity",
    "latestChange": "美国撤销2021年6月21日的伊朗石油豁免，油价收盘后涨$4，风险资产卖压加剧",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "伊朗导弹袭击两艘商业船只→美国撤销伊朗石油豁免，海峡除外英国船只受损报告。油价收盘后涨$4，股市卖压。卡塔尔调停角色受威胁。风险偏好明显转向risk-off"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-eu-politics",
    "name": "欧洲政治风险 (Le Pen)",
    "status": "新事件 · Le Pen被允许参选2027法国总统选举",
    "assetClass": "FX",
    "latestChange": "Le Pen被裁定可参选2027法国总统选举，EUR -25bps，主权利差保持韧性",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "Le Pen裁定允许参选2027法国总统选。EUR -25bps。主权利差保持韧性—OAT-RX +0.8bps, IK-RX +0.4bps。市场关注Le Pen宣布参选"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-equity-rotation",
    "name": "美股板块轮动",
    "status": "延续中 · Semis继续承压、Energy领涨",
    "assetClass": "Equity",
    "latestChange": "Samsung -9%拖累半导体板块，SPX -45bps，Energy +303bps领涨，High Beta Momo -597bps持续回调",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "美股收跌。Semis/Memory领跌（Samsung -9% EPS）。SPX -45bps, NDX -177bps, RTY -90bps。但S&P 283只个股收涨。Energy +303bps领涨。Industrials -167bps, Info Tech -162bps。High Beta Momo -597bps。MegaCap Tech vs Non Profitable Tech 2.3σ上行。META +2.6%"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-global-duration",
    "name": "全球久期利率压力",
    "status": "延续中 · Bunds/Gilts/JGBs/AUD均走弱",
    "assetClass": "Rates",
    "latestChange": "全球核心利率同步卖压，主权利差相对韧性，JGB 30y拍卖强劲但被卖盘压制",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Bunds走弱（EU双档+Italy USD三档发行）。Gilts全曲线走弱（油价+核心利率拖累）。JGBs长端卖压，30y拍卖强劲触发bull-flattening但被sell-on-strength压制。AUD债券便宜3-4bps。主权利差保持韧性"
          }
        ]
      }
    ],
    "divergences": []
  }
  ],
  days: [
    {
      "reportDate": "2026-07-08",
      "coverage": {
        "emails": 1,
        "brokers": [
          "Goldman Sachs"
        ],
        "lookbackDays": 15
      },
      "flow": {
        "sentiment": {
          "dir": "weak",
          "label": "偏弱 · 风险资产卖压主导",
          "note": "全球利率上行+中东局势升级触发risk-off。股市跌，油价大涨，美元走强。"
        },
        "activeNames": [
          {
            "name": "Amazon",
            "ticker": "AMZN",
            "tone": "sell",
            "activity": "$25b发债需求低于预期",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "Samsung",
            "ticker": "005930.KS",
            "tone": "sell",
            "activity": "-9%因EPS报告，拖累Semis",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "META",
            "ticker": "META",
            "tone": "buy",
            "activity": "+2.6%跑赢大盘",
            "brokers": [
              "Goldman Sachs"
            ]
          }
        ],
        "drivers": [
          {
            "broker": "Goldman Sachs",
            "type": "事件驱动",
            "summary": "中东局势升级—伊朗导弹攻击商船，美国撤销伊朗石油豁免"
          },
          {
            "broker": "Goldman Sachs",
            "type": "技术性",
            "summary": "美债供给压力+企业债发行推动利率上行~7bps"
          },
          {
            "broker": "Goldman Sachs",
            "type": "基本面",
            "summary": "美国5月贸易赤字$776亿，GS Q2 GDP追踪保持+2.2%"
          }
        ]
      },
      "signals": [
        {
          "id": "sig-20260708-01",
          "date": "2026-07-08",
          "headline": "UST全曲线卖压~7bps，供给压力+油价反弹双重打击",
          "topic": "UST Supply",
          "assetClass": "Rates",
          "direction": "Bearish",
          "signalType": [
            "CONTINUATION",
            "FLOW"
          ],
          "action": "WATCH",
          "impactScore": 75,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "2y-30y均上行~7bps，Amazon $25b发债需求偏软",
          "evidence": [
            "全曲线卖压~7bps",
            "Swap spreads收紧",
            "Amazon $25b需求低于预期",
            "$58b 3y拍卖through 0.6bps",
            "大额block：buyer 24k FV"
          ],
          "soWhat": "供给周未结束，今日$38b 10y reopening+FOMC纪要将是关键考验",
          "priorState": "No prior state available.",
          "quote": "US rates sold off across the curve driven primarily from supply pressures and the rebound in oil.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": "thread-ust-supply"
        },
        {
          "id": "sig-20260708-02",
          "date": "2026-07-08",
          "headline": "美国撤销伊朗石油豁免，中东局势急剧升级",
          "topic": "Iran Risk",
          "assetClass": "Commodity",
          "direction": "Bearish",
          "signalType": [
            "ALERT",
            "CATALYST",
            "NEW"
          ],
          "action": "RISK_FLAG",
          "impactScore": 90,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "伊朗导弹攻击商船→美国撤销油豁免，油价收盘后涨$4",
          "evidence": [
            "美国撤销伊朗石油豁免",
            "伊朗导弹攻击两艘商船",
            "英国船只在霍尔木兹海峡受损",
            "油价收盘后涨$4"
          ],
          "soWhat": "石油供应中断风险显著上升，油价上行将推高通胀预期并拖累风险资产",
          "priorState": "No prior state available.",
          "quote": "Further news from the Middle East triggered a risk-off move, with oil rising up to $4 after the close.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": "thread-iran-risk"
        },
        {
          "id": "sig-20260708-03",
          "date": "2026-07-08",
          "headline": "Le Pen被裁定可参选2027法国总统选举，EUR承压",
          "topic": "French Politics",
          "assetClass": "FX",
          "direction": "Bearish",
          "signalType": [
            "ALERT",
            "CATALYST"
          ],
          "action": "WATCH",
          "impactScore": 70,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "Le Pen裁定允许参选→EUR -25bps，主权利差保持韧性",
          "evidence": [
            "Le Pen裁定允许参选2027",
            "EUR -25bps",
            "OAT-RX +0.8bps, IK-RX +0.4bps"
          ],
          "soWhat": "法国政治风险重新定价，但主权利差反应有限",
          "priorState": "No prior state available.",
          "quote": "EUR ended -25bps weaker following headlines that LE PEN CLEARED TO RUN IN 2027.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": "thread-eu-politics"
        },
        {
          "id": "sig-20260708-04",
          "date": "2026-07-08",
          "headline": "Samsung -9%拖累半导体，美股板块轮动显著",
          "topic": "Equity Rotation",
          "assetClass": "Equity",
          "direction": "Mixed",
          "signalType": [
            "MOMENTUM",
            "CONTINUATION"
          ],
          "action": "WATCH",
          "impactScore": 68,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "Semis领跌但超半数个股收涨，Energy +303bps",
          "evidence": [
            "Samsung -9%",
            "SPX -45bps但283只个股收涨",
            "Energy +303bps领涨",
            "High Beta Momo -597bps"
          ],
          "soWhat": "板块轮动加剧，成长股→价值股/能源转移趋势明显",
          "priorState": "No prior state available.",
          "quote": "Despite index losses, a majority of S&P names posted gains. Energy +303bps rallied.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": "thread-equity-rotation"
        },
        {
          "id": "sig-20260708-05",
          "date": "2026-07-08",
          "headline": "JGB 30y拍卖强劲但sell-on-strength压制涨势",
          "topic": "JGB Auction",
          "assetClass": "Rates",
          "direction": "Neutral",
          "signalType": [
            "FLOW",
            "CONFIRMED"
          ],
          "action": "WATCH",
          "impactScore": 55,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "30y拍卖强劲触发bull-flattening，但被卖盘压制",
          "evidence": [
            "拍卖结果非常强劲",
            "触发bull-flattening",
            "被sell-on-strength压制",
            "5y/20y/40y因供给承压"
          ],
          "soWhat": "JGB市场结构性分化，拍卖好但不足以改变偏弱格局",
          "priorState": "No prior state available.",
          "quote": "The auction came in very strong, triggering a sharp bull-flattening move.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": "thread-global-duration"
        },
        {
          "id": "sig-20260708-06",
          "date": "2026-07-08",
          "headline": "BOE提议放松资本规则，但Gilts仍被油价拖累走弱",
          "topic": "BOE / Gilts",
          "assetClass": "Rates",
          "direction": "Cautious",
          "signalType": [
            "MOMENTUM"
          ],
          "action": "WATCH",
          "impactScore": 50,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "BOE提议降低杠杆率20bp，但Gilts仍全曲线走弱",
          "evidence": [
            "BOE提议降低杠杆比率20bp",
            "Bailey称若无战争通胀在2%",
            "Gilts全曲线走弱"
          ],
          "soWhat": "BOE政策偏松信号被全球利率上行浪潮掩盖",
          "priorState": "No prior state available.",
          "quote": "Gilts closed cheaper across the curve dragged by oil price and broader core rates losses.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": "thread-global-duration"
        },
        {
          "id": "sig-20260708-07",
          "date": "2026-07-08",
          "headline": "美国5月贸易赤字扩大至$776亿，低于预期",
          "topic": "US Trade Deficit",
          "assetClass": "Macro",
          "direction": "Neutral",
          "signalType": [
            "CONFIRMED",
            "UNIQUE_DATA"
          ],
          "action": "VERIFY",
          "impactScore": 40,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "贸易赤字$776亿，GS Q2 GDP追踪保持+2.2%",
          "evidence": [
            "贸易赤字扩大$230亿至$776亿",
            "略低于Bloomberg预期",
            "GS Q2 GDP追踪+2.2%不变"
          ],
          "soWhat": "数据影响有限，GS未下调GDP追踪",
          "priorState": "No prior state available.",
          "quote": "The trade deficit widened to $77.6bn in May, slightly below expectations.",
          "sourceRefs": [
            "GS Research 2026-07-07"
          ],
          "threadId": null
        },
        {
          "id": "sig-20260708-08",
          "date": "2026-07-08",
          "headline": "台湾6月CPI超预期升至2.6%，核心CPI创2月以来新高",
          "topic": "Taiwan CPI",
          "assetClass": "Macro",
          "direction": "Bearish",
          "signalType": [
            "NEW",
            "UNIQUE_DATA"
          ],
          "action": "WATCH",
          "impactScore": 55,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "标题CPI 2.6% yoy（前值2.2%），核心CPI 2.5%，均超预期",
          "evidence": [
            "标题CPI 2.6% yoy（前值2.2%）",
            "核心CPI 2.5% yoy（前值2.1%）",
            "均超Bloomberg共识",
            "mom sa +0.4%"
          ],
          "soWhat": "台湾通胀意外加速，可能影响CBC货币政策路径预期",
          "priorState": "No prior state available.",
          "quote": "Taiwan's headline CPI rose to 2.6% yoy in June, above Bloomberg consensus.",
          "sourceRefs": [
            "GS Research 2026-07-07"
          ],
          "threadId": null
        },
        {
          "id": "sig-20260708-09",
          "date": "2026-07-08",
          "headline": "FOMC纪要+中东局势—今日两大关注焦点",
          "topic": "FOMC / Risk Events",
          "assetClass": "Macro",
          "direction": "Cautious",
          "signalType": [
            "CATALYST",
            "ALERT"
          ],
          "action": "WATCH",
          "impactScore": 72,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs"
          ],
          "oneLine": "今日$38b 10y reopening + FOMC minutes，市场处于多重事件窗口",
          "evidence": [
            "$38b 10y reopening今日进行",
            "FOMC minutes今日发布",
            "市场定价~34bps加息至年底"
          ],
          "soWhat": "多重事件叠加，今日可能波动率显著放大",
          "priorState": "No prior state available.",
          "quote": "Looking ahead, supply continues with $38b 10y reopening and the market awaits FOMC minutes.",
          "sourceRefs": [
            "GS Global Market Recap 2026-07-07"
          ],
          "threadId": null
        }
      ],
      "brokerNotes": [
        {
          "broker": "Goldman Sachs",
          "emails": 1,
          "stance": "综合偏谨慎。全球利率卖压+中东风险升级主导市场情绪，等待今日FOMC纪要和10y拍卖结果",
          "sourceRefs": [
            "GS Asia Macro Global Market Recap 2026-07-07"
          ]
        }
      ],
      "dataChecks": [
        {
          "id": "dc-01",
          "type": "硬数据核对",
          "subject": "美国5月贸易赤字",
          "status": "Open",
          "detail": "GS报道$776亿，待确认Bloomberg官方数据一致性"
        },
        {
          "id": "dc-02",
          "type": "观点分歧",
          "subject": "FOMC加息路径定价",
          "status": "Monitor",
          "detail": "仅1家券商数据，缺乏交叉验证"
        },
        {
          "id": "dc-03",
          "type": "来源标注修正",
          "subject": "API采集覆盖不足",
          "status": "Open",
          "detail": "Commentary/Commentary2/Commentary3 API连接失败，仅获取GS 1封邮件"
        }
      ],
      "qualityLog": [
        "邮件采集: 5个API中2个成功，仅GS 1封邮件",
        "覆盖券商: 仅Goldman Sachs 1家（vs 目标>=8家）",
        "日期归属: effective_date=2026-07-08，覆盖July 7交易日",
        "信号提取: 9条信号，涵盖UST/Equities/FX/Commodity/Macro",
        "数据质量警示: 单券商报告缺乏交叉验证"
      ]
    }
  ]
};
