/* =====================================================================
 * report-data.js · 卖方每日情报 · 自动生成于 2026-07-13 17:22 HKT
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
            }
          ]
        }
      ],
      "divergences": []
    }
  ],
  "days": [
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
