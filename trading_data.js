/* =====================================================================
 * report-data.js · 卖方每日情报 · 自动生成于 2026-07-14 09:35 HKT
 * ===================================================================== */
window.REPORT_DATA = 
{
  "title": "卖方每日情报",
  "subtitle": "Fixed Income Desk · 信号 + 我们的关注",
  "focus": {
    "include": [
      "US / DM IG(USD)",
      "Asia IG(USD,非主权)"
    ],
    "priorityRegions": [
      "US / DM",
      "Asia",
      "China / Japan / SEA"
    ],
    "exclude": [
      "HY 高收益",
      "结构化产品",
      "本币市场(HKD / SGD / AUD…)",
      "主权(INDON / PHILIP / SRILAN…)"
    ]
  },
  "threads": [
    {
      "id": "thread-iran-escalation",
      "name": "美伊地缘冲突升级",
      "status": "延续中 · 5家券商确认",
      "assetClass": "Macro",
      "latestChange": "周末冲突重新升级，霍尔木兹海峡关闭传闻，原油+3%，UST熊平",
      "brokerViews": [
        {
          "broker": "Goldman Sachs",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "Tumultuous week with US/Iran escalation. Credit outperformed macro volatility."
            },
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "Trump declared naval blockade on Iran. Oil above $80. WTI +9.4%/Brent +9.3%. Energy +316bps."
            }
          ]
        },
        {
          "broker": "Morgan Stanley",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "Fresh US attacks on Iran extended bear flattening +3% crude + equity weakness."
            },
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "US reinstated shipping restrictions, later said would strike Iran again. Oil +9.4%, breakevens surged."
            }
          ]
        },
        {
          "broker": "UBS",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "HY Market opened weak as macro sentiment deteriorated on Iran-US conflict."
            }
          ]
        },
        {
          "broker": "HSBC",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Gulf tensions + Strait of Hormuz closure pushed oil/Treasury yields higher. No panic selling in China HY."
            }
          ]
        },
        {
          "broker": "Barclays",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Weaker tone with renewed US-Iran tensions. Oil higher, equities lower."
            }
          ]
        },
        {
          "broker": "BMO",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Breakevens lagged oil rally, caught up after 3pm when Trump declared 'new war against Iran'."
            }
          ]
        },
        {
          "broker": "mkt",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "US-Iran tit-for-tat + Russia diesel halt add to inflation. Long oil/short global bonds trade workable."
            }
          ]
        }
      ],
      "divergences": []
    },
    {
      "id": "thread-ust-bear-flattening",
      "name": "UST熊平 & CPI/Warsh风险事件",
      "status": "延续中 · 聚焦周二CPI",
      "assetClass": "Rates",
      "latestChange": "2s10s扁平2.1bp至35.3bp，35%概率定价7月加息",
      "brokerViews": [
        {
          "broker": "Morgan Stanley",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "US10y +1bp 4.561%, 2s10s -2.1bp 35.3bp. 35% July hike odds. CPI in line = relief rally. Prefer call spreads SFRU6."
            },
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "Waller hawkish: July toward 50%. 2y+7.4bp, 10y 4.62%. CPI key test. Prefer SFRU6 call spreads."
            }
          ]
        },
        {
          "broker": "Goldman Sachs",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Front-end heavy bear flattening. ~36bps hikes priced. Eyes on Tuesday CPI."
            },
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "Full 25bp Sep, 50% July. 10y 4.624%. CPI + Warsh testimony today."
            }
          ]
        },
        {
          "broker": "Jane Street",
          "points": [
            {
              "date": "2026-07-10",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "2Y +3bps, 10Y +1bp. IG spreads wider, HY little changed."
            }
          ]
        },
        {
          "broker": "BMO",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neu",
              "mode": "COLOR",
              "note": "CPI tomorrow. Core expected low-mid 0.20s with rents cooling. June fixing 334.75 mid (3.78% YoY)."
            }
          ]
        },
        {
          "broker": "mkt",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "VIEW",
              "note": "Bearish flattening. 10yr wave (iii) of III underway. RM may wait for 5-10bp sell-off before adding FI."
            }
          ]
        }
      ],
      "divergences": [
        {
          "date": "2026-07-13",
          "crux": "MS认为CPI符合预期应触发relief rally、7月加息定价过高；GS未给方向，共识偏空",
          "camps": [
            {
              "label": "前端回调可期",
              "tilt": "pos",
              "mode": "VIEW",
              "brokers": [
                "Morgan Stanley"
              ],
              "point": "核心CPI低+0.2% handle应触发relief rally。不直接做多FOMC dates，用SFRU6 call spreads"
            },
            {
              "label": "前端持续承压",
              "tilt": "neg",
              "mode": "COLOR",
              "brokers": [
                "Goldman Sachs"
              ],
              "point": "前端交易沉重的熊平走势，~36bp加息定价"
            }
          ]
        }
      ]
    },
    {
      "id": "thread-asia-ig-resilience",
      "name": "亚洲IG信用韧性 & 利差收窄",
      "status": "延续中 · 供给收缩+全收益驱动",
      "assetClass": "Credit",
      "latestChange": "亚洲IG现金篮子~2bp收窄，新发5-10bp，韩国TMT突出",
      "brokerViews": [
        {
          "broker": "Goldman Sachs",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "pos",
              "mode": "VIEW",
              "note": "Asia Liquid IG basket ~2bps tighter (new issues 5-10bps). TMT 1-5bps. Korea POINTL -6bps DAESEC -8/-10bps."
            },
            {
              "date": "2026-07-14",
              "tilt": "pos",
              "mode": "VIEW",
              "note": "Surprisingly resilient, spreads broadly unch. All-in yield+short-covering. No panic in China credit."
            }
          ]
        },
        {
          "broker": "HSBC",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "pos",
              "mode": "COLOR",
              "note": "SEA IG 0-1bp tighter on all-in yield buying. High quality benchmarks see selective demand."
            },
            {
              "date": "2026-07-14",
              "tilt": "pos",
              "mode": "COLOR",
              "note": "Credit outperforming macro. Spreads unch/1bp tighter. High quality benchmarks selective demand."
            }
          ]
        },
        {
          "broker": "Barclays",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neu",
              "mode": "COLOR",
              "note": "Very quiet, spreads slightly wider. IG ~1-2bp wider but market still biddish."
            },
            {
              "date": "2026-07-14",
              "tilt": "neu",
              "mode": "COLOR",
              "note": "Slightly wider on stock move, but market still biddish. Lifer selling long end absorbing."
            }
          ]
        }
      ],
      "divergences": [
        {
          "date": "2026-07-13",
          "crux": "GS周报显示上周~2bp收窄（看多），Barclays午盘显示当日微走宽1-2bp（中性），但双方都同意bid氛围未变",
          "camps": [
            {
              "label": "利差收窄趋势",
              "tilt": "pos",
              "mode": "VIEW",
              "brokers": [
                "Goldman Sachs"
              ],
              "point": "上周整体~2bp tighter，新发5-10bp tighter，供给收缩+TMT/韩国超额"
            },
            {
              "label": "日内微宽但bid不变",
              "tilt": "neu",
              "mode": "COLOR",
              "brokers": [
                "Barclays"
              ],
              "point": "spreads slightly wider但market is still quite biddish"
            }
          ]
        }
      ]
    },
    {
      "id": "thread-cnh-bullish",
      "name": "CNH点心债持续走牛",
      "status": "延续中 · 峰会推动+境内资金出海",
      "assetClass": "Credit",
      "latestChange": "整体利差5-7bp收窄，MEITUA 35s涨超3pt，LGFV日成交~220mm",
      "brokerViews": [
        {
          "broker": "HSBC",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "pos",
              "mode": "VIEW",
              "note": "CNH IG spreads tightened ~5-7bp since Summit. MEITUA 35s up 3pts+. LGFV active."
            }
          ]
        },
        {
          "broker": "Barclays",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "pos",
              "mode": "COLOR",
              "note": "Dim sum remains very well bid. Local accounts looking for yieldy paper."
            },
            {
              "date": "2026-07-14",
              "tilt": "pos",
              "mode": "COLOR",
              "note": "Dim sum remains very well bid. Local accounts still looking for yieldy paper."
            }
          ]
        },
        {
          "broker": "UBS",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "pos",
              "mode": "FLOW",
              "note": "CNH firm despite soft macro. SUNOTG/JZENGI +10cts onshore. LGFV ~220mm."
            }
          ]
        },
        {
          "broker": "Goldman Sachs",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "pos",
              "mode": "VIEW",
              "note": "CNH still popular, another 10-20 cents higher. Front-end cash deployment thematic."
            }
          ]
        }
      ],
      "divergences": []
    },
    {
      "id": "thread-japan-softbk-underperform",
      "name": "日本信用承压 / SOFTBK领跌",
      "status": "新增 · 宏观风险传导日本HY",
      "assetClass": "Credit",
      "latestChange": "SOFTBK -⅛/-25c, KIOXIA/RAKUTN -25c, IG spread实钱承接",
      "brokerViews": [
        {
          "broker": "UBS",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "SOFTBK 1/8-25c lower, HF+ETF selling. KIOXIA/RAKUTN ~25c. RM buying offset ETF."
            }
          ]
        },
        {
          "broker": "HSBC",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "SOFTBK clear underperformer. IG spread healthier. Buyers of insurance hybrids at lower prices."
            },
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "SOFTBK clear underperformer. New issue supply keeping secondary buyers at bay. Recent outperformers today's laggards."
            }
          ]
        },
        {
          "broker": "Barclays",
          "points": [
            {
              "date": "2026-07-13",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Japan insco & AT1 softer. KR/JP Fin IG 1-2bps wider."
            },
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Japan insco & AT1 softer -.125pts. Broader macro weakness spilled over. Spreads unch to 2bp wider."
            }
          ]
        }
      ],
      "divergences": []
    },
    {
      "id": "thread-supply-tapering",
      "name": "一级供给：从极度清淡到密集轰炸",
      "status": "逆转 · 供给密集测试承接力",
      "assetClass": "Credit",
      "latestChange": "上周仅4笔$1.6bn→今日MUFG$3B+SMBC+KEXIM+KEPCO+KT&G等10+笔同日记价",
      "brokerViews": [
        {
          "broker": "HSBC",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "Primary side busy. MUFG multi-tranche, SMBC Aviation, KEXIM, KEPCO, KT&G, Mitsubishi HC, Jinko Power."
            }
          ]
        },
        {
          "broker": "Barclays",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neg",
              "mode": "COLOR",
              "note": "MUFG $3B 6-part. SMBC T+100~145. KEXIM CT3+44/CT5+47. New issues bulk of discussion."
            }
          ]
        },
        {
          "broker": "Goldman Sachs",
          "points": [
            {
              "date": "2026-07-14",
              "tilt": "neu",
              "mode": "COLOR",
              "note": "Korea quasi (KORELE/EIBKOR) adding pressure. Don't expect much concession."
            }
          ]
        }
      ],
      "divergences": []
    }
  ],
  "days": [
    {
      "reportDate": "2026-07-14",
      "coverage": {
        "emails": 8,
        "brokers": [
          "Goldman Sachs",
          "Morgan Stanley",
          "HSBC",
          "Barclays",
          "BMO",
          "Jefferies",
          "Deutsche Bank"
        ],
        "lookbackDays": 15
      },
      "signals": [
        {
          "id": "sig-20260714-01",
          "date": "2026-07-14",
          "headline": "美伊冲突急剧升级：特朗普宣布'新战争'+海军封锁霍尔木兹，原油暴涨9.4%，UST熊平加速，全球risk-off",
          "topic": "Iran-US Escalation Intensifies",
          "assetClass": "Macro",
          "direction": "Bearish",
          "signalType": [
            "CONTINUATION",
            "ALERT"
          ],
          "action": "RISK_FLAG",
          "impactScore": 90,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs",
            "Morgan Stanley",
            "BMO",
            "mkt"
          ],
          "oneLine": "特朗普下午宣布海军封锁+新战争，WTI+9.4%至$78/Brent+9.3%至$83，能源板块独涨+3.2%，InfoTech-2.1%",
          "evidence": [
            "GS: Trump declared naval blockade on Iran. Oil another leg higher (CO1 above $80)",
            "MS: US reinstated shipping restrictions, later said would strike Iran again",
            "BMO: Trump 'new war against Iran' late afternoon",
            "mkt: US-Iran tit-for-tat + Russia diesel halt add to inflation",
            "GS: WTI +9.4% to $78.14, Brent +9.3% to $83.09. Energy +316bps"
          ],
          "soWhat": "地缘溢价急剧抬升，通胀预期+加息预期同步强化。关注伊朗是否报复其他中东国家及霍尔木兹实际通行情况",
          "priorState": "周末冲突升级，霍尔木兹关闭传闻，原油+3%",
          "quote": "Trump declared that the US would install a new naval blockade on Iran",
          "sourceRefs": [
            "GS Global Credit Recap",
            "MS Global Macro",
            "BMO TIPS",
            "mkt outlook"
          ],
          "threadId": "thread-iran-escalation"
        },
        {
          "id": "sig-20260714-02",
          "date": "2026-07-14",
          "headline": "Waller鹰派引爆前端重定价：7月加息概率35%→50%，9月前full 25bp，年内~42bp，CPI今日定生死",
          "topic": "Waller Hawkish Repricing",
          "assetClass": "Rates",
          "direction": "Bearish",
          "signalType": [
            "SHIFT",
            "ALERT"
          ],
          "action": "TRADE_NOW",
          "impactScore": 88,
          "conviction": "High",
          "brokers": [
            "Morgan Stanley",
            "Goldman Sachs",
            "BMO",
            "mkt"
          ],
          "oneLine": "Waller称若核心CPI再热FOMC需近期紧缩，OIS重定价7月至50%，2y+7.4bp/10y+6.3bp至4.624%",
          "evidence": [
            "MS: Waller said FOMC would need to consider tightening. 2y+7.4bp 30y+4.7bp",
            "GS: Full 25bp Sep priced, 50% July. 10y 4.624%",
            "mkt: AI-driven investment continues supporting core PCE",
            "BMO: Core to print low-mid 0.20s with rents cooling"
          ],
          "soWhat": "CPI为本月最重要数据。核心低+0.2%→relief rally(MS观点)，高+0.3%+→7月加息成真。建议观望CPI后操作",
          "priorState": "35%概率7月加息，~36bp年内加息。MS预计CPI符合预期触发relief rally",
          "quote": "Waller stated the FOMC will need to consider tightening monetary policy in the near-term",
          "sourceRefs": [
            "MS Global Macro",
            "GS Asia Macro",
            "BMO TIPS",
            "mkt outlook"
          ],
          "threadId": "thread-ust-bear-flattening"
        },
        {
          "id": "sig-20260714-03",
          "date": "2026-07-14",
          "headline": "亚洲IG逆势展现韧性，GS称'surprisingly resilient'，全收益买盘+空头回补支撑spreads broadly unch",
          "topic": "Asia IG Resilience",
          "assetClass": "Credit",
          "direction": "Constructive",
          "signalType": [
            "CONFIRMED",
            "MOMENTUM"
          ],
          "action": "WATCH",
          "impactScore": 72,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs",
            "HSBC",
            "Barclays"
          ],
          "oneLine": "Ex-China IG spreads broadly unch，all-in yield+street short-covering，中国信用无恐慌，但新发密集或测试承接力",
          "evidence": [
            "GS: Surprisingly resilient session, spreads broadly unch. All-in yield demand+short-covering",
            "HSBC: Credit outperforming macro. Spreads unch/1bp tighter",
            "Barclays: Market still quite biddish. Lifer selling long end but absorbing",
            "GS: No panic in China credit. V sticky investor base"
          ],
          "soWhat": "亚洲IG连续多日展示宏观脱钩能力。但MUFG$3B+多家韩国准主权今日定价，供给压力测试即将到来",
          "priorState": "亚洲IG现金篮子~2bp收窄，新发5-10bp收窄",
          "quote": "Surprisingly resilient session with spreads trading broadly unch",
          "sourceRefs": [
            "GS Global Credit Recap",
            "HSBC EOD",
            "Barclays EOD"
          ],
          "threadId": "thread-asia-ig-resilience"
        },
        {
          "id": "sig-20260714-04",
          "date": "2026-07-14",
          "headline": "CNH点心债无阻力上攻：GS'又涨10-20cents'，Barclays'追捧不减'，境内资金出海供需缺口结构性不可逆",
          "topic": "CNH Dim Sum Bull Run",
          "assetClass": "Credit",
          "direction": "Bullish",
          "signalType": [
            "MOMENTUM",
            "FLOW"
          ],
          "action": "TRADE_NOW",
          "impactScore": 78,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs",
            "Barclays"
          ],
          "oneLine": "CNH再涨10-20cents，前端现金部署(银行/券商/AM)持续扫货经销商库存，估值虽紧趋势未完",
          "evidence": [
            "GS: CNH still popular, another 10-20 cents higher. No panic in China credit",
            "Barclays: Dim sum again remains very well bid. Local accounts still looking for yieldy paper",
            "GS: Front-end cash deployment from local banks, security houses, and AMs remained thematic"
          ],
          "soWhat": "CNH牛市基本面不变，供需缺口结构性。关注CPI后会否获利了结，但境内出海趋势中期不变",
          "priorState": "CNH整体利差5-7bp收窄，MEITUA 35s涨超3pt，LGFV日成交~220mm",
          "quote": "CNH still popular as space grinded another 10-20 cents higher",
          "sourceRefs": [
            "GS Global Credit Recap",
            "Barclays EOD"
          ],
          "threadId": "thread-cnh-bullish"
        },
        {
          "id": "sig-20260714-05",
          "date": "2026-07-14",
          "headline": "韩国KOSPI暴跌-9%！SK Hynix ADR上市拖累科技板块，外资流出-$1.4bn，Memory-798bps领跌全球",
          "topic": "Korea Equity/Tech Crash",
          "assetClass": "Equity",
          "direction": "Bearish",
          "signalType": [
            "NEW",
            "ALERT"
          ],
          "action": "WATCH",
          "impactScore": 75,
          "conviction": "High",
          "brokers": [
            "Barclays",
            "Morgan Stanley",
            "Goldman Sachs"
          ],
          "oneLine": "KOSPI-9%为亚洲风险放大器，GS Memory-798bps/HighBetaMomo-605bps，与美伊+Waller形成三重利空",
          "evidence": [
            "Barclays: Korea down -8.95%. Hynix post ADR debut drag on sentiment",
            "MS: KRW weak with foreign equity outflows -$1.4bn, KOSPI -9%. Memory GSTMTMEM -798bps",
            "GS: AI-led equities extended sell-off following Korea's tech weakness"
          ],
          "soWhat": "韩国科技暴跌为亚洲风险情绪关键放大器。关注是否外溢至韩国信用利差（quasi新发已微走宽）",
          "priorState": "No prior state available.",
          "quote": "Korea down -8.95%. Hynix post ADR debut drag on sentiment",
          "sourceRefs": [
            "Barclays EOD",
            "MS Global Macro",
            "GS Asia Macro"
          ]
        },
        {
          "id": "sig-20260714-06",
          "date": "2026-07-14",
          "headline": "一级供给密集轰炸：MUFG$3B 6-tranche+SMBC+KEXIM+KEPCO+KT&G等10+笔同日记价，测试市场承接深度",
          "topic": "Heavy Primary Supply Wave",
          "assetClass": "Credit",
          "direction": "Neutral",
          "signalType": [
            "FLOW",
            "CONTINUATION"
          ],
          "action": "WATCH",
          "impactScore": 65,
          "conviction": "High",
          "brokers": [
            "HSBC",
            "Barclays",
            "Goldman Sachs"
          ],
          "oneLine": "MUFG$3B+SMBC+KEXIM CT3+44/CT5+47+KEPCO SOFR+95+KT&G CT3+95+KORELE/EIBKOR+Mitsubishi HC+Jinko 4.9%",
          "evidence": [
            "HSBC: MUFG multi-tranche, SMBC Aviation, KEXIM, KEPCO, KT&G, Mitsubishi HC, Jinko Power",
            "Barclays: MUFG$3B 6-part, SMBC T+100~145, KEXIM CT3+44/CT5+47",
            "GS: Korea quasi (KORELE/EIBKOR) adding pressure. Don't expect much concession"
          ],
          "soWhat": "上周供给极度清淡利多已定价。今日密集发行测试承接力，MUFG$3B最大考验。关注各deal定价是否需给concession",
          "priorState": "上周仅4笔$1.6bn，MUFG等今日密集宣布",
          "quote": "Primary side looks busy with Japan new issues launched in Asia time",
          "sourceRefs": [
            "HSBC EOD",
            "Barclays EOD",
            "GS Global Credit Recap"
          ],
          "threadId": "thread-supply-tapering"
        },
        {
          "id": "sig-20260714-07",
          "date": "2026-07-14",
          "headline": "S&P确认印度尼西亚评级展望稳定，INDON CDS-2.25bp领涨EM，但PETMK长端持续有机构卖压",
          "topic": "Indonesia S&P Affirmation",
          "assetClass": "Sovereign",
          "direction": "Mixed",
          "signalType": [
            "FLOW",
            "NEW"
          ],
          "action": "WATCH",
          "impactScore": 58,
          "conviction": "Medium",
          "brokers": [
            "Barclays",
            "HSBC"
          ],
          "oneLine": "S&P affirms Indonesia outlook stable→空头回补-2.25bp；印度/泰国/马来spread债被卖出，PETMK长端持续承压",
          "evidence": [
            "Barclays: INDON big mover. S&P affirms outlook stable. FM+RM short covering -2.25bps",
            "HSBC: Continued selling PETMK long end. Buying HDFC/OINLIN/POWFIN/RECLIN",
            "GS: Crossover money sell EM IG product, DM spreads where they are"
          ],
          "soWhat": "INDON S&P affirmation短期利好但被crossover卖压对冲。PETMK持续卖出需关注是否预示EM IG情绪转变",
          "priorState": "INDON为EM IG被cross over卖出标的之一",
          "quote": "S&P AFFIRMS INDONESIA SOVEREIGN CREDIT RATINGS; OUTLOOK STABLE",
          "sourceRefs": [
            "Barclays EOD",
            "HSBC EOD",
            "GS Global Credit Recap"
          ]
        },
        {
          "id": "sig-20260714-08",
          "date": "2026-07-14",
          "headline": "日本GPIF叙事一日游：周五JGB暴涨后周一全面回吐，Reuters确认不改变GPIF基准配置，10y+2.5bp Twist-Flatten",
          "topic": "Japan GPIF Narrative Fades",
          "assetClass": "Rates",
          "direction": "Bearish",
          "signalType": [
            "SHIFT"
          ],
          "action": "WATCH",
          "impactScore": 52,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs",
            "Morgan Stanley"
          ],
          "oneLine": "Katayama GPIF言论引发rally全面逆转，Reuters报道政府不改变GPIF基准配置，10y+2.5bp，20y/30y相对韧性",
          "evidence": [
            "GS: Government not envisaging changes to GPIF's benchmark portfolio allocation",
            "MS: Friday's rally partially reversed. GPIF not considering strategic allocation changes",
            "MS: LDP Kihara later said amendments possible 'if required', adding flattening to super-long"
          ],
          "soWhat": "GPIF叙事风险消退，但20y拍卖+super-long仍有支撑。JGB Twist-Flatten趋势不变",
          "priorState": "周五Katayama言论引发JGB暴涨，市场预期GPIF增配国内债券",
          "quote": "Reuters reported that the government was not envisaging changes to GPIF's benchmark portfolio allocation",
          "sourceRefs": [
            "GS Asia Macro",
            "MS Global Macro"
          ]
        }
      ],
      "brokerNotes": [
        {
          "broker": "Goldman Sachs",
          "emails": 2,
          "stance": "亚洲IG surprisingly resilient，CNH+10-20cts继续看牛，中国信用无恐慌。UST熊平+6.3bp至4.624%，Waller鹰派7月加息50%。伊朗升级至海军封锁。韩国quasi新发施加压力但无concession。Memory-798bps领跌全球科技",
          "sourceRefs": [
            "GS Global Credit Recap",
            "GS Asia Macro"
          ]
        },
        {
          "broker": "Morgan Stanley",
          "emails": 1,
          "stance": "Waller鹰派→7月加息向50%迈进，2y+7.4bp前端领跌。伊朗升级Hormuz航运限制+原油+9.4%。KOSPI-9%外资流出-$1.4bn。JGB GPIF叙事消退Twist-Flatten。CPI为sustained shift关键测试，偏好SFRU6 call spreads",
          "sourceRefs": [
            "MS Global Macro Commentary 7/13"
          ]
        },
        {
          "broker": "HSBC",
          "emails": 1,
          "stance": "Mixed tone。中国HY unchanged无恐慌，高质benchmark选择性需求。日本SOFTBK继续领跌，新发供给压制二级。SEA IG卖PETMK长端，买HDFC/OINLIN/POWFIN/RECLIN。AUD 1-2bp tighter。一级繁忙10+笔同日记价",
          "sourceRefs": [
            "HSBC Asia Credit Trading EOD 13 Jul"
          ]
        },
        {
          "broker": "Barclays",
          "emails": 1,
          "stance": "Quiet session。China IG slightly wider但biddish。Dim sum very well bid。Korea-8.95%Hynix拖累。KR/JP Fin IG 1-2bps wider。INDON-2.25bps on S&P affirmation。新发主导讨论。AUD higher beta买盘+久期",
          "sourceRefs": [
            "Barclays Asian Credit EOD 13 Jul"
          ]
        },
        {
          "broker": "BMO",
          "emails": 1,
          "stance": "TIPS lagged oil+8% rally，breakevens+1-2bp。RM买real yields，FM卖BEI。Trump新战争comment后breakevens追赶。CPI明日，核心预期low-mid 0.20s租金降温",
          "sourceRefs": [
            "BMO TIPS End of Day"
          ]
        },
        {
          "broker": "mkt",
          "emails": 1,
          "stance": "Bearish flattening延续。US-Iran+Russia diesel=通胀压力。AI investment支撑core PCE。Long oil/short global bonds仍可行。10yr wave(iii)of III进行中，突破4.61%/4.63%确认。RM等待5-10bp sell-off再加仓FI",
          "sourceRefs": [
            "mkt recap (Jefferies)"
          ]
        },
        {
          "broker": "Deutsche Bank",
          "emails": 1,
          "stance": "UELAU新发AUD 5Y benchmark，FV ASW+95-100bp。AUD utilities RV分析，垄断配电franchise+regulatory outcome支撑credit",
          "sourceRefs": [
            "DB Aussie Credit Desk"
          ]
        }
      ],
      "dataChecks": [
        {
          "id": "chk-1",
          "type": "观点分歧(opinion)",
          "subject": "亚洲IG日内方向",
          "status": "Monitor",
          "detail": "GS全市场角度spreads broadly unch（偏多），Barclays开盘视角slightly wider on stock move（中性偏弱）。维度不同不构成直接冲突，且双方一致同意bid氛围未变"
        },
        {
          "id": "chk-2",
          "type": "数据一致(consensus)",
          "subject": "Waller鹰派+伊朗升级→UST熊平",
          "status": "Confirmed",
          "detail": "GS/MS/BMO/mkt四家一致确认：Waller鹰派comments+原油暴涨驱动前端重定价，7月加息向50%迈进"
        },
        {
          "id": "chk-3",
          "type": "来源缺失(source)",
          "subject": "J.P. Morgan/Macquarie/Citi/UBS未覆盖",
          "status": "Monitor",
          "detail": "本期未收到JPM/Macquarie/Citi/UBS的邮件。UBS连续出现两日后本期缺失"
        },
        {
          "id": "chk-4",
          "type": "日期间隔(date)",
          "subject": "mkt邮件跨日",
          "status": "Resolved",
          "detail": "mkt（Jefferies）邮件标注'Friday and Outlook for Monday'，部分内容为周五复盘+周一展望。技术分析部分非时效性敏感"
        }
      ],
      "qualityLog": [
        "GS发送两封邮件：Global Credit Recap（信用全覆盖）和Asia Macro（宏观/利率），为本日信息量最大来源",
        "MS邮件为'Global Macro Commentary: July 13'（评论周一但标注7月13日），涵盖全球所有资产类别",
        "HSBC和Barclays邮件均为7月13日收盘评论（EOD Commentary），覆盖面广但限于信用",
        "BMO为7月14日凌晨TIPS收盘评论，时效性最佳但仅覆盖TIPS单一品种",
        "mkt（Jefferies）邮件为周五复盘+周一展望混合，技术分析（Elliott Wave）非时效敏感",
        "DB邮件仅涉及AUD单一交易（UELAU新发估值），对全市场贡献有限"
      ],
      "tone": {
        "dir": "bearish",
        "label": "宏观恶化 · 信用韧性",
        "note": "伊朗升级至'新战争'+海军封锁（较昨日显著恶化），Waller鹰派重定价7月加息至50%，原油+9.4%突破$80，UST熊平加速（10y+6.3bp至4.624%），韩国KOSPI-9%。信用端尚维持韧性（IG spreads broadly unch、CNH继续走牛）但宏观风险偏好已明显转向risk-off。CPI将成为决定短期方向的最关键变量"
      },
      "macro": [
        "美伊冲突急剧升级：特朗普宣布'新战争'+海军封锁霍尔木兹，WTI+9.4%至$78.14/Brent+9.3%至$83.09，原油突破$80",
        "Waller鹰派重定价：若核心CPI再热FOMC需近期紧缩→OIS 7月加息概率35%→50%，9月前full 25bp，年内42bp",
        "今日CPI（核心预期低+0.2%月率/3.78% YoY）和Warsh国会证词为本周双核心风险事件",
        "韩国KOSPI-9%为亚洲风险放大器：SK Hynix ADR上市拖累科技板块，外资流出-$1.4bn，Memory-798bps",
        "日本GPIF叙事一日游：周五Katayama言论引发JGB暴涨→周一Reuters确认不改变GPIF基准配置→全部回吐，10y+2.5bp Twist-Flatten",
        "DXY+0.3%至101.28，USD全面走强。JPY underperformed 162.43，EURUSD-0.3%。FX vol elevated至33bps gap",
        "欧洲利率同步承压：German 2y~+7bp，BTP/Bund+3bp wider。IMF警告欧洲公共债务风险",
        "俄罗斯停止柴油出口（乌克兰无人机袭击炼油厂）叠加美伊冲突，加剧全球通胀压力"
      ],
      "flow": {
        "sentiment": {
          "dir": "bearish",
          "label": "宏观恶化",
          "note": "伊朗升级至'新战争'+海军封锁（较昨日显著恶化），Waller鹰派重定价7月加息至50%，原油+9.4%，UST熊平加速。信用端尚维持韧性（IG spreads broadly unch）但风险偏好已明显转向，risk-off主导"
        },
        "activeNames": [
          {
            "name": "软银",
            "ticker": "SOFTBK",
            "tone": "sell",
            "activity": "继续领跌日本HY，新发供给压制二级买家，recent outperformers成today's laggards",
            "brokers": [
              "HSBC",
              "Barclays"
            ]
          },
          {
            "name": "美团",
            "ticker": "MEITUA",
            "tone": "buy",
            "activity": "CNH持续走牛+10-20cents，峰会以来最佳表现，境内账户持续追买",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "马来西亚石油",
            "ticker": "PETMK",
            "tone": "sell",
            "activity": "长端持续机构卖压1-2bp wider，crossover money减持EM IG主题延续",
            "brokers": [
              "HSBC",
              "Barclays"
            ]
          },
          {
            "name": "MUFG",
            "ticker": "MUFG",
            "tone": "new_issue",
            "activity": "$3B 6-tranche同日定价，为今日最大供给测试，IPT T+90~125",
            "brokers": [
              "HSBC",
              "Barclays"
            ]
          },
          {
            "name": "KEXIM/KEPCO/KT&G",
            "ticker": "KEXIM/KEPCO",
            "tone": "new_issue",
            "activity": "韩国准主权密集发行，KEXIM CT3+44/CT5+47, KEPCO SOFR+95, KT&G CT3+95",
            "brokers": [
              "HSBC",
              "Barclays",
              "Goldman Sachs"
            ]
          },
          {
            "name": "鸿桥/绿城/越秀",
            "ticker": "HONGQI/GRNCH/YXREIT",
            "tone": "buy",
            "activity": "中国HY选择性需求，高质benchmark names有bid，无恐慌卖出",
            "brokers": [
              "Goldman Sachs",
              "HSBC"
            ]
          },
          {
            "name": "阿里巴巴/腾讯",
            "ticker": "BABA/TENCNT",
            "tone": "firm",
            "activity": "中国TMT超额表现，BABA 37s -5bp/TENCNT 36s -2bp，银行买盘驱动",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "印度HDFC/OINLIN/POWFIN/RECLIN",
            "ticker": "HDFC/OINLIN",
            "tone": "buy",
            "activity": "印度/印尼IG选择性买盘，HDFC 29s/OINLIN 29s/POWFIN belly/RECLIN belly",
            "brokers": [
              "HSBC"
            ]
          },
          {
            "name": "铠侠/乐天",
            "ticker": "KIOXIA/RAKUTN",
            "tone": "sell",
            "activity": "日本HY跟随SOFTBK承压，broader macro weakness spill over",
            "brokers": [
              "Barclays"
            ]
          },
          {
            "name": "LG电子/友利",
            "ticker": "LGENSO/WDSAU",
            "tone": "buy",
            "activity": "韩国IG被抬升，desk lifted in LGENSO & WDSAU despite broader weakness",
            "brokers": [
              "Barclays"
            ]
          },
          {
            "name": "SMBC Aviation",
            "ticker": "SMBCAC",
            "tone": "new_issue",
            "activity": "3Y/5Y/10Y同日IPT，T+100~145",
            "brokers": [
              "HSBC",
              "Barclays"
            ]
          },
          {
            "name": "印度尼西亚",
            "ticker": "INDON",
            "tone": "buy",
            "activity": "S&P affirmation→CDS-2.25bps领涨EM，FM+RM空头回补但新空头也入场",
            "brokers": [
              "Barclays"
            ]
          },
          {
            "name": "菲律宾",
            "ticker": "PHILIP",
            "tone": "firm",
            "activity": "Belly段有需求，outperforms INDON in IG Sov space",
            "brokers": [
              "Goldman Sachs",
              "Barclays"
            ]
          },
          {
            "name": "三菱HC/晶科",
            "ticker": "MitsubishiHC/Jinko",
            "tone": "new_issue",
            "activity": "Mitsubishi HC 5Y T+110, Jinko 3Y 4.9% IPG",
            "brokers": [
              "HSBC",
              "Barclays"
            ]
          },
          {
            "name": "Axis Bank Perps",
            "ticker": "AXSBIN",
            "tone": "sell",
            "activity": "Perps marked ~20c lower in cash price but flow very light",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "日本保险/AT1",
            "ticker": "Japan Insco/AT1",
            "tone": "sell",
            "activity": "softer -.125pts with rates overall, broader macro weakness",
            "brokers": [
              "Barclays"
            ]
          }
        ],
        "drivers": [
          {
            "broker": "Goldman Sachs/Morgan Stanley",
            "type": "地缘政治",
            "summary": "伊朗升级至'新战争'+海军封锁→WTI+9.4%→通胀预期+加息预期同步强化，全球risk-off"
          },
          {
            "broker": "Morgan Stanley/Goldman Sachs/BMO",
            "type": "央行政策",
            "summary": "Waller鹰派：若核心CPI再热FOMC需近期紧缩→OIS重定价7月至50%、年内42bp，前端领跌"
          },
          {
            "broker": "HSBC/Barclays/Goldman Sachs",
            "type": "供给冲击",
            "summary": "一级供给从上周极度清淡($1.6bn)逆转为密集轰炸(MUFG$3B+10+笔)，测试市场承接深度"
          },
          {
            "broker": "Goldman Sachs/HSBC",
            "type": "技术面/仓位",
            "summary": "全收益买盘+空头回补构成亚洲IG韧性双驱动，但久期需求持续恶化(front-end very well-bid, duration much less so)"
          },
          {
            "broker": "Barclays/Morgan Stanley",
            "type": "事件驱动",
            "summary": "韩国KOSPI-9%+Hynix ADR拖累为亚洲风险放大器，与伊朗+Waller形成三重利空共振"
          }
        ]
      },
      "issuers": [
        {
          "ticker": "SOFTBK",
          "name": "SoftBank Group",
          "inFocus": true,
          "priority": 1,
          "region": "Japan",
          "ccy": "USD",
          "assetClass": "HY",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "sell",
          "brokers": [
            "HSBC",
            "Barclays"
          ],
          "quote": "SOFTBK clear underperformer. New issue supply keeping secondary buyers at bay.",
          "analysis": "日本HY情绪指标，连续两日领跌。新发供给+macro weakness双杀。OpenAI IPO延迟继续施压估值。关注是否波及更广泛日本IG"
        },
        {
          "ticker": "MEITUA",
          "name": "Meituan",
          "inFocus": true,
          "priority": 2,
          "region": "China",
          "ccy": "CNH",
          "assetClass": "IG",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "Goldman Sachs"
          ],
          "quote": "CNH still popular as space grinded another 10-20 cents higher",
          "analysis": "CNH 10Y benchmark，峰会以来涨幅最大。境内资金出海首选标的，估值虽紧趋势未完"
        },
        {
          "ticker": "MUFG",
          "name": "Mitsubishi UFJ Financial Group",
          "inFocus": true,
          "priority": 2,
          "region": "Japan",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "金融",
          "sovereign": false,
          "newIssue": true,
          "flow": "new_issue",
          "brokers": [
            "HSBC",
            "Barclays"
          ],
          "quote": "MUFG $3B WNG OFFERING IN 6 PARTS",
          "analysis": "今日最大供给事件，$3B 6-tranche测试市场承接深度。日本银行供给潮中的旗舰交易"
        },
        {
          "ticker": "KEXIM/KEPCO/KT&G",
          "name": "韩国准主权组合",
          "inFocus": true,
          "priority": 2,
          "region": "Korea",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "Sovereign/Utilities",
          "sovereign": true,
          "newIssue": true,
          "flow": "new_issue",
          "brokers": [
            "HSBC",
            "Barclays",
            "Goldman Sachs"
          ],
          "quote": "Korea quasi sees new issues (KORELE/EIBKOR) adding pressure. Don't expect much concession.",
          "analysis": "韩国准主权密集定价，供给压力使quasi spreads微走宽但GS预计concession有限。KOSPI-9%是否传导至信用端待观察"
        },
        {
          "ticker": "PETMK",
          "name": "Petronas Malaysia",
          "inFocus": true,
          "priority": 3,
          "region": "Malaysia",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "能源",
          "sovereign": true,
          "newIssue": false,
          "flow": "sell",
          "brokers": [
            "HSBC",
            "Barclays"
          ],
          "quote": "Continued selling PETMK long end. Marked 1-2bp wider.",
          "analysis": "长端持续卖压，crossover money减持EM IG主题延续。与INDON形成对比"
        },
        {
          "ticker": "INDON",
          "name": "Indonesia Sovereign",
          "inFocus": true,
          "priority": 3,
          "region": "Indonesia",
          "ccy": "USD",
          "assetClass": "Sovereign",
          "sector": "Sovereign",
          "sovereign": true,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "Barclays"
          ],
          "quote": "INDON the big mover. S&P AFFIRMS RATINGS; OUTLOOK STABLE. -2.25bps on day.",
          "analysis": "S&P affirmation意外利好触发空头回补-3.25bps from pre-headline。但新空头已入场，利好可能短暂"
        },
        {
          "ticker": "BABA/TENCNT",
          "name": "Alibaba/Tencent",
          "inFocus": true,
          "priority": 2,
          "region": "China",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "firm",
          "brokers": [
            "Goldman Sachs"
          ],
          "quote": "TMT tickers outperformed on demand from local banks",
          "analysis": "中国TMT在宏观risk-off中超额表现，银行买盘驱动。BABA优于TENCNT（-5bp vs -2bp）"
        },
        {
          "ticker": "HONGQI/GRNCH/YXREIT",
          "name": "中国HY高质名",
          "inFocus": false,
          "priority": 3,
          "region": "China",
          "ccy": "USD",
          "assetClass": "HY",
          "sector": "地产/多元",
          "sovereign": false,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "Goldman Sachs",
            "HSBC"
          ],
          "quote": "High quality benchmark names continued to have selective demand",
          "analysis": "中国HY韧性标杆，无恐慌卖出。与日本HY形成鲜明对比"
        },
        {
          "ticker": "KIOXIA/RAKUTN",
          "name": "Kioxia/Rakuten",
          "inFocus": false,
          "priority": 3,
          "region": "Japan",
          "ccy": "USD",
          "assetClass": "HY",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "sell",
          "brokers": [
            "Barclays"
          ],
          "quote": "Japan HY trading lower. Broader macro weakness spilled over into Japan corp space.",
          "analysis": "日本HY跟随SOFTBK承压，但未见meaningful selling flows。spreads unch to 2bp wider"
        },
        {
          "ticker": "Axis Bank",
          "name": "Axis Bank",
          "inFocus": false,
          "priority": 3,
          "region": "India",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "金融",
          "sovereign": false,
          "newIssue": true,
          "flow": "mixed",
          "brokers": [
            "Barclays",
            "Goldman Sachs"
          ],
          "quote": "Demand in the new Axis while Perps marked ~20c lower in cash",
          "analysis": "新发Axis有需求但Perps承压，印度IG内部出现senior vs perp分化"
        },
        {
          "ticker": "SMBC Aviation",
          "name": "SMBC Aviation Capital",
          "inFocus": false,
          "priority": 3,
          "region": "Japan",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "金融",
          "sovereign": false,
          "newIssue": true,
          "flow": "new_issue",
          "brokers": [
            "HSBC",
            "Barclays"
          ],
          "quote": "SMBC 3Y/5Y/10Y IPT at T+100~145",
          "analysis": "日本航空金融供给，3Y-10Y全曲线覆盖。与MUFG同期定价，竞争承接力"
        },
        {
          "ticker": "LGENSO/WDSAU",
          "name": "LG电子/友利",
          "inFocus": false,
          "priority": 3,
          "region": "Korea",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "TMT/金融",
          "sovereign": false,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "Barclays"
          ],
          "quote": "Lifted in some LGENSO & WDSAU despite better selling in KR Quasis",
          "analysis": "韩国IG内部quasi vs corporate分化，个别名字仍被抬升"
        }
      ],
      "insights": [
        {
          "broker": "Morgan Stanley",
          "topic": "CPI为全月最重要数据：relief or capitulation",
          "point": "核心CPI低+0.2%→relief rally触发front-end回调；高+0.3%+→7月加息成真，彻底改变rate path。建议用SFRU6 call spreads而非直接做多FOMC dates，因熊平趋势未破、前端vol可能压缩",
          "quote": "CPI in line should trigger relief rally. I would prefer call spreads or call flies in SFRU6 rather than outright longs in FOMC dates"
        },
        {
          "broker": "Goldman Sachs",
          "topic": "亚洲IG结构性韧性：供给压力测试即将到来",
          "point": "亚洲IG展现惊人宏观脱钩能力，全收益买盘+空头回补双驱动。前端现金部署（local banks/security houses/AMs）是核心买盘来源。但MUFG$3B+多家韩国准主权今日密集定价，将测试技术面支撑力度。GS预计新发concession有限",
          "quote": "Surprisingly resilient session. Front-end cash deployment from local banks/security houses/AMs remained thematic"
        },
        {
          "broker": "BMO",
          "topic": "TIPS严重滞后油价：隐含通胀定价不足",
          "point": "TIPS仅+1-2bp despite oil +8%，breakevens整个交易日ignored能源涨幅，直到3pm Trump'新战争'comment后才追赶。若CPI偏高→TIPS可能发生追赶性行情。核心预期low-mid 0.20s with rents cooling，但有上行风险",
          "quote": "Another lackluster performance for TIPS considering oil rallied over 8%"
        },
        {
          "broker": "mkt",
          "topic": "Long Oil / Short Global Bonds：结构性交易仍在进行",
          "point": "US-Iran+Russia diesel halting=持续通胀压力，AI investment支撑core PCE超权重项目。10yr wave(iii)of III正在进行中，突破4.61%/4.63%确认。RM等待5-10bp进一步sell-off再comfortably re-engage FI spread products",
          "quote": "The long oil / short global government bonds trade should remain workable"
        },
        {
          "broker": "HSBC/Barclays",
          "topic": "供给密集轰炸：MUFG $3B旗舰测试今日承接力",
          "point": "从上周仅$1.6bn到今日10+笔同日记价，供给逆转幅度为近期最大。MUFG$3B 6-tranche为旗舰交易。HSBC指出front-end very well-bid但duration much less so，暗示短端deal将优于长端。关注各deal定价与IPT的差距判断demand强度",
          "quote": "Primary side looks busy with Japan new issues launched in Asia time. Front-end continues very well-bid, duration much less so"
        }
      ]
    },
    {
      "reportDate": "2026-07-13",
      "coverage": {
        "emails": 9,
        "brokers": [
          "Barclays",
          "Deutsche Bank",
          "Goldman Sachs",
          "HSBC",
          "Jane Street",
          "Morgan Stanley",
          "TD Securities",
          "UBS"
        ],
        "lookbackDays": 15
      },
      "signals": [
        {
          "id": "sig-20260713-01",
          "date": "2026-07-13",
          "headline": "美伊周末冲突升级，宏观风险情绪恶化，原油涨3%，权益承压，但亚太信用展现韧性",
          "topic": "Iran-US Geopolitical Escalation",
          "assetClass": "Macro",
          "direction": "Bearish",
          "signalType": [
            "NEW",
            "ALERT"
          ],
          "action": "RISK_FLAG",
          "impactScore": 85,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs",
            "Morgan Stanley",
            "UBS",
            "HSBC",
            "Barclays"
          ],
          "oneLine": "美伊周末重新交火+霍尔木兹海峡关闭传闻，推高原油和UST收益率，信用早盘承压但未现恐慌性卖出",
          "evidence": [
            "MS: Fresh waves of attacks by US on Iran over weekend extended bear flattening, alongside 3% rally in crude",
            "UBS: macro risk sentiment deteriorated following escalation of Iran-US conflict",
            "HSBC: renewed Gulf tensions and reported closure of Strait of Hormuz pushed oil and Treasury yields higher",
            "Barclays: weaker tone with renewed US-Iran tensions. Oil higher equities lower",
            "GS: A tumultuous week with return of escalation between US/Iran"
          ],
          "soWhat": "地缘风险溢价回归，对信用形成短期压力但亚太IG展现韧性。密切关注周二CPI和Warsh听证会",
          "priorState": "此前市场对美伊和谈存乐观预期，周末局势急转直下构成surprise",
          "quote": "Fresh waves of attacks by US on Iran over weekend extended bear flattening, alongside 3% rally in crude",
          "sourceRefs": [
            "MS UST",
            "UBS midday",
            "HSBC midday",
            "Barclays midday",
            "GS weekly"
          ],
          "threadId": "thread-iran-escalation"
        },
        {
          "id": "sig-20260713-02",
          "date": "2026-07-13",
          "headline": "UST熊平延续，2s10s扁平至35.3bp，市场定价~36bp年内加息，周二CPI/Warsh为核心风险",
          "topic": "UST Bear Flattening / CPI Risk",
          "assetClass": "Rates",
          "direction": "Bearish",
          "signalType": [
            "MOMENTUM",
            "ALERT"
          ],
          "action": "WATCH",
          "impactScore": 80,
          "conviction": "High",
          "brokers": [
            "Morgan Stanley",
            "Goldman Sachs"
          ],
          "oneLine": "前端沉重，35%概率定价7月加息；MS认为CPI符合预期应触发relief rally，建议call spread",
          "evidence": [
            "MS: US10y +1bp to 4.561%, 2s10s -2.1bp to 35.3bp. 35% odds July hike, ~36bps hikes year-end",
            "GS: front-end traded heavy in bear flattening move",
            "MS: core CPI in line should trigger relief rally. I prefer call spreads in SFRU6"
          ],
          "soWhat": "MS认为CPI低+0.2% handle足以触发relief rally，但9月后加息预期粘性。偏好SFRU6 call spreads",
          "priorState": "利率在上升通道，周末地缘事件加速熊平",
          "quote": "core CPI in line with market expectations should trigger relief rally off current levels",
          "sourceRefs": [
            "MS UST",
            "GS Asia Macro"
          ],
          "threadId": "thread-ust-bear-flattening"
        },
        {
          "id": "sig-20260713-03",
          "date": "2026-07-13",
          "headline": "亚洲IG信用逆势收窄~2bp，供给收缩+全收益买盘双支撑，表现优于宏观波动",
          "topic": "Asia IG Credit Resilience",
          "assetClass": "Credit",
          "direction": "Constructive",
          "signalType": [
            "CONFIRMED",
            "MOMENTUM"
          ],
          "action": "WATCH",
          "impactScore": 75,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs",
            "HSBC",
            "Barclays"
          ],
          "oneLine": "亚洲IG现金篮子~2bp收窄，上周仅4笔公开发行$1.6bn，韩国/印度新发5-10bp收窄",
          "evidence": [
            "GS: Asia Liquid IG cash basket ~2bps tighter (new issues 5-10bps tighter)",
            "HSBC: Credit outperforming macro. Spreads unch/1bp tighter on all-in yield buying",
            "Barclays: market still quite biddish",
            "GS: Primary supply tapered off, helping recent new issue performance"
          ],
          "soWhat": "亚洲IG展现与宏观脱钩的韧性。关注本周KEXIM/KEPCO/KT&G新发对承接力的测试",
          "priorState": "连续数周亚洲IG展现韧性",
          "quote": "Asia Liquid IG cash basket was ~2bps tighter (recent new issues 5-10bps tighter)",
          "sourceRefs": [
            "GS weekly",
            "HSBC midday",
            "Barclays midday"
          ],
          "threadId": "thread-asia-ig-resilience"
        },
        {
          "id": "sig-20260713-04",
          "date": "2026-07-13",
          "headline": "CNH点心债极度看涨，峰会以来整体利差收窄5-7bp，MEITUA 35s涨超3pt，LGFV日成交~220mm",
          "topic": "CNH Dim Sum Bullish",
          "assetClass": "Credit",
          "direction": "Bullish",
          "signalType": [
            "MOMENTUM",
            "FLOW"
          ],
          "action": "TRADE_NOW",
          "impactScore": 78,
          "conviction": "High",
          "brokers": [
            "HSBC",
            "Barclays",
            "UBS"
          ],
          "oneLine": "境内银行/AM/券商持续现金部署追买经销商库存，MEITUA/SUNOTG/JZENGI连续创新高",
          "evidence": [
            "HSBC: CNH IG spreads tightened ~5-7bp since Summit, MEITUA 35s up 3pts+ in <1.5 months",
            "Barclays: Dim sum remains very well bid. Local accounts looking for yieldy paper",
            "UBS: SUNOTG/JZENGI +10cts on onshore buying. LGFV ~220mm traded"
          ],
          "soWhat": "CNH是当前最明确的做多方向，境内资金出海+点心债供给稀缺形成供需缺口",
          "priorState": "HK FIC/Bond Connect Summit后持续走强",
          "quote": "CNH IG spreads tightened ~5-7bp since Summit... MEITUA 35s star outperformer, up 3pts+",
          "sourceRefs": [
            "HSBC midday",
            "Barclays midday",
            "UBS midday"
          ],
          "threadId": "thread-cnh-bullish"
        },
        {
          "id": "sig-20260713-05",
          "date": "2026-07-13",
          "headline": "日本HY承压，SOFTBK领跌⅛-25c，KIOXIA/RAKUTN跟跌，但IG spread有实钱承接",
          "topic": "Japan Credit Underperformance",
          "assetClass": "Credit",
          "direction": "Bearish",
          "signalType": [
            "SHIFT",
            "FLOW"
          ],
          "action": "WATCH",
          "impactScore": 65,
          "conviction": "Medium",
          "brokers": [
            "UBS",
            "HSBC",
            "Barclays"
          ],
          "oneLine": "SOFTBK受HF/ETF卖出冲击全线下跌，但HY ETF流出被RM买入对冲，IG spread产品相对健康",
          "evidence": [
            "UBS: SOFTBK 1/8-25c lower, pressured by HF and ETF selling. KIOXIA/RAKUTN ~25c lower",
            "HSBC: SOFTBK clear underperformer but flows healthier in IG spread product",
            "Barclays: Japan insco & AT1 softer with rates overall -.125pts"
          ],
          "soWhat": "日本信用出现HY/IG分化，SOFTBK是风险情绪敏感指标。关注是否波及更广泛日本IG",
          "priorState": "此前日本信用相对稳定",
          "quote": "SOFTBK was marked 1/8-25 cents lower, pressured by hedge fund and ETF selling",
          "sourceRefs": [
            "UBS midday",
            "HSBC midday",
            "Barclays midday"
          ],
          "threadId": "thread-japan-softbk-underperform"
        },
        {
          "id": "sig-20260713-06",
          "date": "2026-07-13",
          "headline": "AUD信用稳健，离岸买盘偏好4-7yr，全收益驱动；CBA Jul-31收窄0.25bp",
          "topic": "AUD Credit Firm",
          "assetClass": "Credit",
          "direction": "Constructive",
          "signalType": [
            "CONFIRMED"
          ],
          "action": "WATCH",
          "impactScore": 55,
          "conviction": "Medium",
          "brokers": [
            "TD Securities",
            "Deutsche Bank",
            "HSBC"
          ],
          "oneLine": "AUD利差不变到小幅收窄，客户加久期，经销商持续买入2Y短端",
          "evidence": [
            "TD: tone firm, clients adding duration, dealers buying 2Y. CBA Jul-31 ~0.25bp tighter",
            "DB: Australian credit broadly resilient, spreads unchanged to modestly tighter",
            "HSBC: PBs net buyers of risk on higher all-in yields. AUD spreads unch to 1bp tighter"
          ],
          "soWhat": "AUD信用稳定，假期成交量偏低。Nationwide新发5Y +103bp在二级收窄3-5bp",
          "priorState": "连续数周AUD信用展现韧性",
          "quote": "Flows were light, but the tone remained firm, with clients adding duration",
          "sourceRefs": [
            "TD daily",
            "DB weekly",
            "HSBC midday"
          ],
          "threadId": null
        },
        {
          "id": "sig-20260713-07",
          "date": "2026-07-13",
          "headline": "韩国信用超额表现，POINTL/DAESEC新发收窄3-10bp；本周KEXIM/KEPCO/KT&G待定价",
          "topic": "Korea Credit Outperformance",
          "assetClass": "Credit",
          "direction": "Constructive",
          "signalType": [
            "MOMENTUM",
            "FLOW"
          ],
          "action": "WATCH",
          "impactScore": 68,
          "conviction": "Medium",
          "brokers": [
            "Goldman Sachs",
            "Barclays"
          ],
          "oneLine": "POINTL 31s -6bp, DAESEC 29s -8bp/31s -10bp, NHSECS 29s -3bp；境内买方偏好2-5yr",
          "evidence": [
            "GS: POINTL 31s -6bps, DAESEC 29s -8bps, DAESEC 31s -10bps, NHSECS -2.5/-3bps",
            "GS: onshore was better buyer of 2-5yr risk",
            "Barclays: lifted in LGENSO & WDSAU"
          ],
          "soWhat": "韩国信用为亚太IG超额表现最佳子板块，本周新发集中可能测试承接力",
          "priorState": "韩国信用已连续数周表现优异",
          "quote": "POINTL 31s -6bps, DAESEC 29s -8bps, DAESEC 31s -10bps",
          "sourceRefs": [
            "GS weekly",
            "Barclays midday"
          ],
          "threadId": "thread-asia-ig-resilience"
        },
        {
          "id": "sig-20260713-08",
          "date": "2026-07-13",
          "headline": "一级供给：上周仅4笔$1.6bn，今日MUFG $3B等多笔大规模新发宣布，关注二级承接",
          "topic": "Primary Supply & New Issues",
          "assetClass": "Credit",
          "direction": "Neutral",
          "signalType": [
            "FLOW"
          ],
          "action": "WATCH",
          "impactScore": 60,
          "conviction": "High",
          "brokers": [
            "Goldman Sachs",
            "Barclays",
            "HSBC"
          ],
          "oneLine": "上周供给极度清淡支撑二级；今日MUFG $3B 6-tranche、KEXIM/KEPCO/KT&G/SMBC等密集宣布",
          "evidence": [
            "GS: Primary supply tapered off, only 4 deals $1.6bn total",
            "Barclays: MUFG $3B 6-part, KEXIM 3Y/5Y, KEPCO 3Y/5Y, KT&G 3.5Y, SMBC 3Y/5Y/10Y IPTs",
            "HSBC: SMBC Aviation 3Y/5Y/10Y, Jinko Power 3Y 4.9%, MUFG multi-tranche"
          ],
          "soWhat": "供给收缩利多已部分定价。本周大规模发行可能测试承接力，关注MUFG $3B和韩国准主权定价",
          "priorState": "上周供给极度清淡",
          "quote": "Primary supply in Asia tapered off... helping recent new issue performance",
          "sourceRefs": [
            "GS weekly",
            "Barclays midday",
            "HSBC midday"
          ],
          "threadId": "thread-supply-tapering"
        }
      ],
      "brokerNotes": [
        {
          "broker": "Goldman Sachs",
          "emails": 2,
          "stance": "亚洲IG看多，供给收缩+全收益驱动利差收窄；UST熊平延续，聚焦CPI/Warsh",
          "sourceRefs": [
            "GS Global Credit Recap",
            "GS Asia Macro"
          ]
        },
        {
          "broker": "Morgan Stanley",
          "emails": 1,
          "stance": "UST前端偏谨慎，CPI符合预期应触发relief rally但9月后加息预期粘性，建议call spread结构",
          "sourceRefs": [
            "MS UST overnight 7/13"
          ]
        },
        {
          "broker": "UBS",
          "emails": 1,
          "stance": "HY开盘偏弱但双向均衡，日本SOFTBK承压，CNH/LGFV强势，实钱买盘对冲ETF流出",
          "sourceRefs": [
            "UBS APAC Midday Recap"
          ]
        },
        {
          "broker": "HSBC",
          "emails": 1,
          "stance": "信用优于宏观，SEA/AUD IG收窄，CNH极度看涨，中国HY无恐慌，日本SOFTBK领跌但IG健康",
          "sourceRefs": [
            "HSBC Midday 13 Jul"
          ]
        },
        {
          "broker": "Barclays",
          "emails": 1,
          "stance": "整体安静偏弱，IG轻微走宽但bid氛围不变，CNH继续被追捧，多家新发宣布",
          "sourceRefs": [
            "Barclays MidDay 13 Jul"
          ]
        },
        {
          "broker": "Jane Street",
          "emails": 1,
          "stance": "美国ETF层面UST上行IG走宽HY不变，EM/DM价值ETF获流入",
          "sourceRefs": [
            "Jane Street ETF 10 Jul"
          ]
        },
        {
          "broker": "TD Securities",
          "emails": 1,
          "stance": "AUD信用稳固，客户加久期，交易商买入2Y，CBA Jul-31收窄0.25bp",
          "sourceRefs": [
            "TD AUD Commentary"
          ]
        },
        {
          "broker": "Deutsche Bank",
          "emails": 1,
          "stance": "AUD信用上周稳健，离岸买盘偏好4-7yr，Nationwide新发+103bp，South32降级审查不影响持债人",
          "sourceRefs": [
            "DB Aussie Last Week"
          ]
        }
      ],
      "dataChecks": [
        {
          "id": "chk-1",
          "type": "观点分歧(opinion)",
          "subject": "亚洲IG日内方向",
          "status": "Monitor",
          "detail": "GS周报显示上周~2bp收窄（看多），Barclays午盘显示当日微走宽1-2bp（中性偏弱）。时间维度不同不构成直接冲突"
        },
        {
          "id": "chk-2",
          "type": "数据冲突(data)",
          "subject": "Jane Street日期",
          "status": "Resolved",
          "detail": "Jane Street标注10 Jul（上周五），早于其他邮件（13 Jul）。ETF数据偏滞后，仅作参考"
        },
        {
          "id": "chk-3",
          "type": "来源缺失(source)",
          "subject": "J.P. Morgan/Macquarie/Citi未覆盖",
          "status": "Monitor",
          "detail": "本期未收到JPM/Macquarie/Citi的邮件"
        }
      ],
      "qualityLog": [
        "Jane Street邮件实际日期为7月10日（上周五），ETF流量数据滞后1个交易日",
        "DB邮件为上周回顾（Last Week in Credit），涵盖7月6-10日当周",
        "GS发送两封邮件：Global Credit Recap（信用）和Asia Macro（宏观/利率）"
      ],
      "tone": {
        "dir": "mixed",
        "label": "两向偏弱",
        "note": "宏观risk-off（美伊冲突+UST熊平）vs 信用韧性（IG利差收窄+CNH牛市），整体双向但偏向谨慎"
      },
      "macro": [
        "美伊周末冲突升级，特朗普宣布停火结束，霍尔木兹海峡关闭传闻，原油涨3%",
        "UST熊平延续，2s10s扁平2.1bp至35.3bp，市场定价~36bp年内加息、35%概率7月加",
        "周二CPI（核心预期低+0.2%）和Warsh国会证词为本周双核心风险事件",
        "亚洲权益承压（KOSPI受SK Hynix拖累大幅下跌，HSI -0.18%，Nifty -0.28%）",
        "日本MoF官员暗示鼓励养老金增配国内资产，可能利好JGB和JPY"
      ],
      "flow": {
        "sentiment": {
          "dir": "mixed",
          "label": "两向",
          "note": "实钱/银行全收益买盘持续配置IG和CNH，HF/ETF在HY端卖出日本信用，整体bid氛围仍占主导但卖压边际增加"
        },
        "activeNames": [
          {
            "name": "美团",
            "ticker": "MEITUA",
            "tone": "buy",
            "activity": "CNH 35s涨超3pt，峰会以来最佳表现，境内账户持续扫货",
            "brokers": [
              "HSBC"
            ]
          },
          {
            "name": "软银",
            "ticker": "SOFTBK",
            "tone": "sell",
            "activity": "全线下跌⅛-25c，HF+ETF卖出，RM买入对冲，最活跃underperformer",
            "brokers": [
              "UBS",
              "HSBC"
            ]
          },
          {
            "name": "阿里巴巴",
            "ticker": "BABA",
            "tone": "buy",
            "activity": "37s收窄5bp，中国TMT最佳表现，银行买盘驱动",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "新奥能源/金风科技",
            "ticker": "SUNOTG/JZENGI",
            "tone": "buy",
            "activity": "CNH再涨10cts，境内账户持续买入",
            "brokers": [
              "UBS"
            ]
          },
          {
            "name": "腾讯",
            "ticker": "TENCNT",
            "tone": "firm",
            "activity": "36s收窄2bp，TMT超额表现，银行买盘驱动",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "龙湖",
            "ticker": "LNGFOR",
            "tone": "buy",
            "activity": "28/29年子弹债涨25c，RM需求推动，中国地产HY鲜有亮点",
            "brokers": [
              "UBS"
            ]
          },
          {
            "name": "铠侠",
            "ticker": "KIOXIA",
            "tone": "sell",
            "activity": "~25c下跌，利率上行+科技情绪走弱，RM买入对冲ETF流出",
            "brokers": [
              "UBS"
            ]
          },
          {
            "name": "乐天",
            "ticker": "RAKUTN",
            "tone": "sell",
            "activity": "~25c下跌，跟随SOFTBK，日本HY全线承压",
            "brokers": [
              "UBS"
            ]
          },
          {
            "name": "日产",
            "ticker": "NSANY",
            "tone": "sell",
            "activity": "全线25c下跌，HF卖出为主",
            "brokers": [
              "UBS"
            ]
          },
          {
            "name": "韩国浦项",
            "ticker": "POINTL",
            "tone": "buy",
            "activity": "31s收窄6bp，韩国IG最佳之一，境内买方偏好2-5yr",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "大韩证券",
            "ticker": "DAESEC",
            "tone": "buy",
            "activity": "29s收窄8bp/31s收窄10bp，韩国IG超额最突出",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "瑞安房地产",
            "ticker": "SHUION",
            "tone": "buy",
            "activity": "29s获零售买盘推动上涨",
            "brokers": [
              "UBS"
            ]
          },
          {
            "name": "NH证券",
            "ticker": "NHSECS",
            "tone": "firm",
            "activity": "29s收窄2.5-3bp，韩国IG全线走强",
            "brokers": [
              "Goldman Sachs"
            ]
          },
          {
            "name": "LG电子/友利",
            "ticker": "LGENSO/WDSAU",
            "tone": "buy",
            "activity": "韩国IG被抬升，bid氛围浓厚",
            "brokers": [
              "Barclays"
            ]
          },
          {
            "name": "澳洲联邦银行",
            "ticker": "CBA",
            "tone": "firm",
            "activity": "Jul-31收窄0.25bp，客户加久期，交易商买入2Y短端",
            "brokers": [
              "TD Securities"
            ]
          },
          {
            "name": "新鸿基",
            "ticker": "SHAPIN",
            "tone": "buy",
            "activity": "新发标记25c above RO，买盘兴趣浓厚但尚未成交",
            "brokers": [
              "UBS"
            ]
          }
        ],
        "drivers": [
          {
            "broker": "Goldman Sachs",
            "type": "基本面",
            "summary": "一级供给收缩（上周仅4笔$1.6bn）推动二级新发利差收窄5-10bp"
          },
          {
            "broker": "HSBC",
            "type": "仓位",
            "summary": "全收益驱动：利率上升后all-in yield更具吸引力，银行/AM/证券在2-10yr段配置"
          },
          {
            "broker": "UBS",
            "type": "事件驱动",
            "summary": "伊朗冲突导致宏观risk-off，HY开盘承压，但实钱逢低买入（RM buying offsetting ETF selling）"
          },
          {
            "broker": "HSBC",
            "type": "流动性",
            "summary": "CNH：境内资金出海+HK FIC峰会推动点心债持续走牛"
          }
        ]
      },
      "issuers": [
        {
          "ticker": "SOFTBK",
          "name": "SoftBank Group",
          "inFocus": true,
          "priority": 1,
          "region": "Japan",
          "ccy": "USD",
          "assetClass": "HY",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "sell",
          "brokers": [
            "UBS",
            "HSBC"
          ],
          "quote": "SOFTBK was marked 1/8-25 cents lower, pressured by hedge fund and ETF selling",
          "analysis": "日本HY情绪指标，受HF+ETF双杀，但实钱承接良好。OpenAI IPO延迟可能继续施压"
        },
        {
          "ticker": "MEITUA",
          "name": "Meituan",
          "inFocus": true,
          "priority": 2,
          "region": "China",
          "ccy": "CNH",
          "assetClass": "IG",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "HSBC"
          ],
          "quote": "MEITUA 35s the star outperformer, up 3pts+ in less than 1.5 months",
          "analysis": "CNH 10Y benchmark，峰会以来涨幅最大，境内资金出海首选标的"
        },
        {
          "ticker": "TENCNT",
          "name": "Tencent",
          "inFocus": true,
          "priority": 2,
          "region": "China",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "firm",
          "brokers": [
            "Goldman Sachs"
          ],
          "quote": "TENCNT 36s -2bps. TMT tickers outperformed on demand from local banks",
          "analysis": "TMT超额表现，银行买盘驱动，BABA表现优于TENCNT（BABA 37s -5bp vs TENCNT 36s -2bp）"
        },
        {
          "ticker": "BABA",
          "name": "Alibaba",
          "inFocus": true,
          "priority": 2,
          "region": "China",
          "ccy": "USD",
          "assetClass": "IG",
          "sector": "TMT",
          "sovereign": false,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "Goldman Sachs"
          ],
          "quote": "BABA 37s -5bps. TMT outpaced the US/EM supply tape",
          "analysis": "中国TMT中表现最佳，受益于AMZN $25bn和PRXNA $1.65bn的供给压力下仍收窄"
        },
        {
          "ticker": "LNGFOR",
          "name": "Longfor Group",
          "inFocus": true,
          "priority": 3,
          "region": "China",
          "ccy": "USD",
          "assetClass": "HY",
          "sector": "地产",
          "sovereign": false,
          "newIssue": false,
          "flow": "buy",
          "brokers": [
            "UBS"
          ],
          "quote": "LNGFOR 2028 and 2029 bullet bonds ~25 cents higher on RM demand",
          "analysis": "中国地产HY中鲜有的亮点，RM需求驱动但需注意整体板块偏弱"
        },
        {
          "ticker": "Nationwide",
          "name": "Nationwide",
          "inFocus": false,
          "region": "Australia",
          "ccy": "AUD",
          "assetClass": "IG",
          "sector": "金融",
          "sovereign": false,
          "newIssue": true,
          "flow": "buy",
          "brokers": [
            "Deutsche Bank"
          ],
          "excludeReason": "AUD市场，非核心关注",
          "quote": "Nationwide 5Y senior preferred at +103bp, trading 3-5bp tighter in secondaries",
          "analysis": "上周AUD唯一新发，二级表现良好"
        },
        {
          "ticker": "South32",
          "name": "South32",
          "inFocus": false,
          "region": "Australia",
          "ccy": "AUD",
          "assetClass": "IG",
          "sector": "材料",
          "sovereign": false,
          "newIssue": false,
          "flow": "unchanged",
          "brokers": [
            "Deutsche Bank"
          ],
          "excludeReason": "AUD市场，降级审查中",
          "quote": "South32 placed on review for downgrade by both S&P and Moody's. Doesn't affect bondholders as they plan to repay bonds.",
          "analysis": "铝业务出售触发降级审查，但不影响持债人"
        }
      ],
      "insights": [
        {
          "broker": "Morgan Stanley",
          "topic": "UST前端交易策略",
          "point": "不直接做多FOMC dates，因熊平趋势未破。偏好SFRU6 call spreads/call flies，因CPI后前端波动率可能压缩",
          "quote": "I would prefer structures targeting a specific terminal value (e.g. call spreads or call flies in SFRU6) rather than outright longs in FOMC dates"
        },
        {
          "broker": "Goldman Sachs",
          "topic": "亚洲IG结构性支撑",
          "point": "供给收缩+全收益驱动构成Asian IG双重buff，但需警惕本周大规模新发对技术面的破坏。前端的现金部署（local banks/security houses/AMs）是核心买盘来源",
          "quote": "Front-end cash deployment from local banks/security houses/AMs remained thematic"
        },
        {
          "broker": "HSBC",
          "topic": "CNH不可逆牛市",
          "point": "境内资金出海的供需缺口是结构性而非暂时性的，HK FIC Summit催化后趋势加速。10Y benchmark和LGFV均受益，但估值已趋紧",
          "quote": "Expect primary will still be active given the market contexts despite rather stretched valuation / summer holiday seasons"
        },
        {
          "broker": "UBS",
          "topic": "日本HY卖压但IG承接力强",
          "point": "SOFTBK的下跌更多是风险情绪和仓位调整（HF+ETF），而非基本面恶化。实钱在IG端的承接力意味着风险外溢可控",
          "quote": "Despite the softer price action, flows were relatively balanced, with RM buying offsetting ETF selling"
        }
      ]
    }
  ]
}
;
