window.REPORT_DATA = {
  title: "卖方每日情报",
  subtitle: "Fixed Income Desk \u00b7 信号优先 \u00b7 跨天演进",
  threads: [
  {
    "id": "thread-ust-supply",
    "name": "UST 供给压力与利率卖压",
    "status": "延续中 · 全曲线~7bp卖压，3Y拍卖创纪录需求",
    "assetClass": "Rates",
    "latestChange": "全曲线~7bp卖压，3Y非经销商92.3%创纪录，Amazon $25b仅1.6x，今日10Y reopening",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "全曲线~7bps卖压。3Y through 0.6bps。Amazon $25b需求偏软。UVF buyer 24k FV，TU vs WN flattener。~34bps hike EOY。今日10Y reopening+FOMC"
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Bear-steepening延续。3Y强劲。Steepening nearing exhaustion→range-bound/flattening。10Y target 4.60/4.63%。长期看空不变(10Y>=3.85%)。长油/短全球债券仍成立"
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "供给驱动卖压比地缘更主导。Amazon bid-to-cover仅1.6x，AI supply翻倍。TU/WN flattener $1.3mm DV01未能扁平化。10Y auction在backup后处于更好承接位置。Range-bound until next FOMC"
          }
        ]
      }
    ],
    "divergences": [
      {
        "aspect": "供给承接力",
        "bulls": "MS: 3Y dealer 7.7% low+yield backup让10Y处于好位置",
        "bears": "Amazon 1.6x bid-to-cover显示corporate supply消化困难"
      }
    ]
  },
  {
    "id": "thread-iran-risk",
    "name": "中东局势升级 / 伊朗风险",
    "status": "新事件 · 美国撤销伊朗石油豁免，油价$72+",
    "assetClass": "Commodity",
    "latestChange": "US撤销伊朗石油豁免→油价$72+，MS vs GS/JEF分歧于持续性",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "伊朗导弹攻击两艘商船→US撤销伊朗石油豁免。油价+$4。卡塔尔调停受威胁。Risk-off"
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "地缘紧张令人意外(时机与Khamenei国葬相关)。BUT认为更可能为暂时性flare-up—Trump中期选举前关注国内议题。类似MOU前反复。Overall: temporary"
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "Ceasefire后仍维持全球long-end熊市偏向。长油/短全球债券仍成立—oil可能触底向$80反弹"
          }
        ]
      },
      {
        "broker": "BMO",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "US/Iran headline→TIPS BE午后走阔(5Y+3.3,10Y+1.8)。Crude突破$72触发买盘。BEI curve flatten(1Y CPI +11bp)"
          }
        ]
      }
    ],
    "divergences": [
      {
        "aspect": "持续性与油价路径",
        "bears": "GS/JEF: 供应中断风险→油价$80+",
        "bulls": "MS: temporary flare-up→回调",
        "implication": "MS正确→risk-on回归；GS正确→持续risk-off→油价$80+"
      }
    ]
  },
  {
    "id": "thread-asia-credit",
    "name": "亚洲信用市场",
    "status": "延续中 · China IG走强，新发行PALPM +1pt",
    "assetClass": "Credit",
    "latestChange": "China IG 0-2bp tighter，PALPM +1pt，但IIFOIN/VEDLN有卖压，Japan constructive",
    "brokerViews": [
      {
        "broker": "HSBC",
        "points": [
          {
            "date": "2026-07-08",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "China IG 0-2bp tighter，客户买入，新发/benchmarks outperformed。HY不变。LASUDE投票后ROADKG mixed。HK carry demand(HYSAN perp,CSIPRO)。Japan constructive: bank买5Y IG。SEA IG不变。Ex-China HY -0.25pts, INDYIJ/RPVIN有买盘。IIFOIN 30/VEDLN selling。HKD IRS +3-7bp"
          }
        ]
      },
      {
        "broker": "UBS",
        "points": [
          {
            "date": "2026-07-08",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "PALPM +1pt(FM+retail需求)。IIFOIN/DBMMN/VEDLN 12.5-25c lower。1-2Y carry demand(IHFLIN/IIFOIN)。Long-end perps GENTMK/PTTGC 25c lower。AXSBIN perp 2-way。IG 0-1bp tighter，duration有买盘"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-eu-politics",
    "name": "欧洲政治风险(Le Pen)",
    "status": "新事件 · Le Pen被允许参选2027",
    "assetClass": "FX",
    "latestChange": "Le Pen裁定参选→EUR -25bps，主权利差韧性",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "Le Pen裁定允许参选2027。EUR -25bps。2017主张退出欧元/法郎。OAT-RX +0.8bps, IK-RX +0.4bps。Le Pen宣布参选"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-equity-rotation",
    "name": "美股板块轮动",
    "status": "延续中 · Energy领涨、Semis承压、ETF资金转向能源",
    "assetClass": "Equity",
    "latestChange": "Samsung -9%拖累Semis，Energy +303bps，IXC/XLE获显著inflow",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "SPX -45bps, NDX -177bps, RTY -90bps。283/6 sector收涨。Energy +303bps。Industrials -167bps, Info Tech -162bps。High Beta Momo -597bps。META +2.6%"
          }
        ]
      },
      {
        "broker": "Jane Street",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "IG ETFs: open outflow→午前inflow→午后steady。HY ETFs: 早盘buyer→收盘buyer回归。Energy ETFs(IXC)显著inflow&outperform。XLE/XLV/VNQ outperform vs XLK/XLI underperform。Net buyers: VOO,VTI,SKYY vs sellers: IVV,MTUM"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-tips-breakevens",
    "name": "TIPS/通胀预期跳涨",
    "status": "新动态 · 伊朗新闻触发BE大幅走阔",
    "assetClass": "Rates",
    "latestChange": "BE: 5Y+3.3bp, 10Y+1.8bp，1Y CPI+11bp，伊朗新闻后午后反转",
    "brokerViews": [
      {
        "broker": "BMO",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "pos",
            "mode": "FLAG",
            "note": "BE wider但上午struggle。FM卖盘主导，长端承压最大(30Y real>2.85%令人惊讶)。午后US/Iran headline→crude>$72触发买盘反转。BEI curve flatten(1Y CPI+11bp)"
          }
        ]
      },
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "TIPS rallied。Duration overnight cheaper→NY morning extension。3Y auction后market lower on ME escalation。Curve richer close: 5/10/30Y BEI ~1.6/0.7/0.3bps higher"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-fed-outlook",
    "name": "美联储政策展望/FOMC纪要",
    "status": "关注中 · 今日FOMC Minutes(Warsh首份)",
    "assetClass": "Rates",
    "latestChange": "Williams: inflation too high但政策in good place。FOMC纪要+10Y auction今日",
    "brokerViews": [
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neutral",
            "mode": "COLOR",
            "note": "Williams downplay forward guidance。Energy decline→near-term inflation slightly positive。Fed likely on hold。FOMC Minutes(Warsh首份)可能因language changes吸引关注，但Powell偏avoid overcommunication→skeptical有新信息"
          }
        ]
      },
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neutral",
            "mode": "COLOR",
            "note": "市场定价~34bps hike EOY, ~43bps至明年4月"
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-07",
            "tilt": "neutral",
            "mode": "COLOR",
            "note": "Williams: inflation still too high, but greater confidence in near-term due to energy decline。Policy well positioned"
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-iran",
    "name": "US-Iran",
    "status": "新事件·多券商确认",
    "assetClass": "Macro",
    "latestChange": "Trump停火无效,Brent+5.2%,全球risk-off,KOSPI-4.8%",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Geopolitical re-escalation. Brent ,rates sold off. KOSPI -4.8%. Sov cash weak. CDS +1/2bps."
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "US-Iran tensions. Brent+5.2% to. Risk-off,S&P-0.3%,VIX+4.8%."
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Geopolitical risks elevated. Long oil/short bonds valid. Bearish global long end."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Iran conflict back. Asia HY at lows. Bids pulling back. KOSPI-5%."
          }
        ]
      },
      {
        "broker": "HSBC",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Credit weaker. Late wobble on headlines. Broad-based sellers."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-fomc",
    "name": "FOMC Higher-for-Longer",
    "status": "延续中 Hawkish确认",
    "assetClass": "Rates",
    "latestChange": "June minutes: few officials see rate hike case. First full hike Oct. 38bps EOY.",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "FORECAST",
            "note": "FOMC: support unchanged/lower if inflation dissipates but higher if elevated. 38bps hike EOY."
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "June FOMC reinforced higher-for-longer. Few officials see rate hike case. 2y breakeven +5.9bp."
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "VIEW",
            "note": "NY Fed Williams: inflation too high. Long-term bearish 3-10yr as long as 10y above 3.85%."
          }
        ]
      }
    ],
    "divergences": [
      {
        "date": "2026-07-09",
        "crux": "纪要鹰派程度:市场已定价还是仍有空间?",
        "camps": [
          {
            "label": "有条件=双向",
            "tilt": "neu",
            "mode": "VIEW",
            "brokers": [
              "Goldman Sachs"
            ],
            "point": "FOMC有条件:if inflation dissipates则lower,if elevated则higher. 博弈非单向."
          },
          {
            "label": "Hawkish+地缘叠加",
            "tilt": "neg",
            "mode": "VIEW",
            "brokers": [
              "Morgan Stanley",
              "Jefferies"
            ],
            "point": "纪要加剧利率压力. Real yields 2025年4月来最高."
          }
        ]
      }
    ]
  },
  {
    "id": "thread-ust",
    "name": "UST Bear Flattening",
    "status": "延续中 10Y 4.58% Real Yields新高",
    "assetClass": "Rates",
    "latestChange": "全球bear flattening. 10y 4.58%,10y real 2.30% (2025年4月来最高)",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Global bear flattening. 1y1y sold off 7bps. 10y auction through 0.7bps at 4.58%."
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "US rates bear-flattened: 2y+3.3bp,30y+1.6bp. Real yields highest since Apr 2025."
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "FORECAST",
            "note": "Steepening exhaustion. Wave III underway. Break above 4.61/63% confirms."
          }
        ]
      },
      {
        "broker": "BMO",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "TIPS struggling despite ~6% crude. 10y real 2.30%,30s~2.90%. BEI rallies quickly sold."
          }
        ]
      }
    ],
    "divergences": [
      {
        "date": "2026-07-09",
        "crux": "利率卖压是否已尽?10Y auction需求能否承接?",
        "camps": [
          {
            "label": "Supply supportive",
            "tilt": "neu",
            "mode": "COLOR",
            "brokers": [
              "Goldman Sachs",
              "Morgan Stanley"
            ],
            "point": "10Y auction solid,through 0.7bps. Above avg non-dealer."
          },
          {
            "label": "Structural bearish",
            "tilt": "neg",
            "mode": "FORECAST",
            "brokers": [
              "Jefferies",
              "BMO"
            ],
            "point": "Real yields新高. BEI flattening despite oil=real rate dominance."
          }
        ]
      }
    ]
  },
  {
    "id": "thread-tips",
    "name": "TIPS/Breakevens承压",
    "status": "延续中 BEI扁平化",
    "assetClass": "Rates",
    "latestChange": "10y real 2.30%最高,BEI rallies快速被卖,RM buy vs FM sell",
    "brokerViews": [
      {
        "broker": "BMO",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Roundtrip BEI. TIPS struggle despite crude jump. Tactical selling 1y1y CPI~260,5y5y~238."
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Rising breakevens: 2y+5.9bp,5y+2.2bp. Higher energy could slow disinflation."
          }
        ]
      },
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Oil jump lifting inflation-risk premia. Vols spiked post-payrolls."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-kospi",
    "name": "KOSPI暴跌与亚股分化",
    "status": "新事件 KOSPI-4.8% vs HSI+2.8%",
    "assetClass": "Equity",
    "latestChange": "KOSPI-4.8% vs HSI+2.8%,Samsung暴跌18x利润增长仍被抛售",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "KOSPI-4.8%,HSI+2.8%. Samsung large drop despite 18x profit growth. AI China ADRs outperformed."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Tale of two worlds: KOSPI-5%,HSTECH+5%. ETF/passive selling."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-indo",
    "name": "印尼指数级别预警",
    "status": "新事件 S&P warning 两家供应商警告",
    "assetClass": "EM Credit",
    "latestChange": "S&P继MSCI后发出Frontier预警,Indon CDS underperform,IDR-0.2%",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "S&P warning potential downgrade to Frontier. Indon CDS underperformer. JCI shock."
          }
        ]
      },
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "IDR-0.2% to 18013.5. 10y IndoGB+5bp. Another provider placed Indonesia on watchlist."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Indo HY underperforming with index eligibility headlines."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-asia-ig",
    "name": "Asia IG Credit建设性买盘",
    "status": "延续中 多券商确认 AY buyer支撑",
    "assetClass": "Credit",
    "latestChange": "China IG+1-2bps on AY buying. Japan IG constructive. Late wobble on Iran.",
    "brokerViews": [
      {
        "broker": "HSBC",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "Japan IG+1-2bps most of day. HK carry demand. SEA IG unchanged. Active two-way front-end."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "China IG 1-2bps tighter on AY buyers. Korea/Singapore IG stable. Japan Corp constructive."
          }
        ]
      },
      {
        "broker": "Citi",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "TMT spreads 1-5+ tighter. AMZN demand across hyperscalers. Yield buying across IG."
          }
        ]
      },
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Japan/Aus IG spreads weaker 1-3bps after Trump ceasefire. New issue X outperformed >5bps."
          }
        ]
      }
    ],
    "divergences": [
      {
        "date": "2026-07-09",
        "crux": "Asia IG方向:intraday constructive vs late geopolitics reversal",
        "camps": [
          {
            "label": "Intraday constructive",
            "tilt": "pos",
            "mode": "COLOR",
            "brokers": [
              "Barclays",
              "Citi",
              "HSBC"
            ],
            "point": "China IG+1-2bps on AY buying. Japan IG constructive. TMT 1-5+ tighter."
          },
          {
            "label": "Late selloff",
            "tilt": "neg",
            "mode": "COLOR",
            "brokers": [
              "Jefferies",
              "HSBC"
            ],
            "point": "Spreads weaker 1-3bps post-Trump. Broad-based selling. New issue rally faded."
          }
        ]
      }
    ]
  },
  {
    "id": "thread-asia-hy",
    "name": "Asia HY Credit偏弱",
    "status": "延续中 Ex-China HY-0.25/-0.75pt",
    "assetClass": "EM Credit",
    "latestChange": "Ex-China HY 0.25-0.75pt lower,Indo HY underperforms,PALPM+1pt then faded",
    "brokerViews": [
      {
        "broker": "Goldman Sachs",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Markit HY 0.25-0.5pt lower. RM selling recent issues. PALPM+1pt pop."
          }
        ]
      },
      {
        "broker": "HSBC",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "China HY unchanged. Ex-China HY-0.25pt. INDYIJ/RPVIN buying. IIFOIN/VEDLN selling."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Asia HY at lows on Iran. Cash-0.25/-0.75pt. Spreads+3/8bps. PAL faded. Indo underperforming."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-japan-ig",
    "name": "Japan IG/TLAC建设性需求",
    "status": "延续中 Lifer buying TLAC活跃",
    "assetClass": "Credit",
    "latestChange": "Japan IG constructive,TLAC 20yr+FRN active,lifer demand,NTT 36s renewed",
    "brokerViews": [
      {
        "broker": "Jefferies",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "Japan/Aus IG busy. New issue X>+5bps. TLAC active esp 20yr+FRN. Lifer onshore+offshore."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "Japan Corp constructive. NTT 36s renewed buying. 5y+10y tightened ~6bps from reoffer."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-india",
    "name": "India INR/FX受油价拖累",
    "status": "延续中 INR-0.6% rates bear-steepening",
    "assetClass": "FX",
    "latestChange": "INR-0.6% to 95.56 on oil,5y NDOIS+9bp,Nifty-2.12%",
    "brokerViews": [
      {
        "broker": "Morgan Stanley",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "India FX/rates underperformed. INR-0.6% to 95.56. 5y NDOIS+9bp. $1.5bn NRI deposits."
          }
        ]
      },
      {
        "broker": "Barclays",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "COLOR",
            "note": "Nifty-2.12%. Regional equity mixed with HSI+2.99%."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-us-hg",
    "name": "US HG信用质量创纪录改善",
    "status": "延续中 2Q26 net upgrades $179bn BBB-历史最低7.1%",
    "assetClass": "Credit",
    "latestChange": "2Q26 $227bn upgraded vs $49bn downgraded. BBB 43.1% lowest since 2011.",
    "brokerViews": [
      {
        "broker": "J.P. Morgan",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "VIEW",
            "note": "2Q26 net upgrades $179bn. U/D ratio 4.60x. BBB 43.1% lowest since 2011. BBB- record 7.1%. A rated 46.1%. Rising Stars $7bn. Forecast $28bn RS vs $88bn FA 2026/27."
          }
        ]
      }
    ],
    "divergences": []
  },
  {
    "id": "thread-aud-credit",
    "name": "AUD Credit建设性",
    "status": "延续中 亚洲买家期限延伸 一级活跃",
    "assetClass": "Credit",
    "latestChange": "AUD firm despite macro. Asian duration buying. NWIDE primary tight. QUBAU takeover effective.",
    "brokerViews": [
      {
        "broker": "TD Securities",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "AUD tone surprisingly firm. Asian duration buying. Clients extending curve. NWIDE T+103bps vs fair ~100bps."
          }
        ]
      },
      {
        "broker": "Deutsche Bank",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "neg",
            "mode": "FLAG",
            "note": "QUBAU takeover by Macquarie effective. Risk/reward skewed downside. Bonds likely remain outstanding."
          }
        ]
      },
      {
        "broker": "HSBC",
        "points": [
          {
            "date": "2026-07-09",
            "tilt": "pos",
            "mode": "COLOR",
            "note": "AUD Corp constructive. Higher rates brought retail/PB buying. Offshore selling. Spreads +/-2bps."
          }
        ]
      }
    ],
    "divergences": []
  }
],
  days: [
  {
    "reportDate": "2026-07-09",
    "coverage": {
      "emails": 12,
      "brokers": [
        "Goldman Sachs",
        "Morgan Stanley",
        "Jefferies",
        "Citi",
        "HSBC",
        "Barclays",
        "J.P. Morgan",
        "BMO",
        "Deutsche Bank",
        "TD Securities"
      ],
      "lookbackDays": 15
    },
    "flow": {
      "sentiment": {
        "dir": "mixed",
        "label": "两向 地缘风险vs建设性买盘",
        "note": "12封邮件覆盖10家券商. 盘中Asia IG constructive但尾盘Iran停火破裂触发risk-off. 两向博弈:AY buyer支撑IG vs broad-based HY selling. Brent+5.2%,UST bear-flattening,KOSPI-4.8%."
      },
      "activeNames": [
        {
          "name": "Samsung",
          "ticker": "SMSNG",
          "tone": "sell",
          "activity": "KOSPI-4.8%,Samsung暴跌18x利润增长仍被抛售",
          "brokers": [
            "Goldman Sachs",
            "Barclays"
          ]
        },
        {
          "name": "Amazon",
          "ticker": "AMZN",
          "tone": "buy",
          "activity": "AMZN demand across hyperscalers,TMT spreads 1-5+ tighter",
          "brokers": [
            "Citi"
          ]
        },
        {
          "name": "PAL Philippines",
          "ticker": "PALPM",
          "tone": "mixed",
          "activity": "PALPM new issue+1pt then faded on Iran headlines",
          "brokers": [
            "Goldman Sachs",
            "Barclays"
          ]
        },
        {
          "name": "NWIDE AUD",
          "ticker": "NWIDE",
          "tone": "buy",
          "activity": "NWIDE priced T+103bps,fair value~100bps,closed 100/98.5",
          "brokers": [
            "TD Securities"
          ]
        },
        {
          "name": "NTT Japan",
          "ticker": "NTT",
          "tone": "buy",
          "activity": "NTT 36s renewed buying after profit-taking,spreads held tight",
          "brokers": [
            "Barclays"
          ]
        },
        {
          "name": "Qube Holdings",
          "ticker": "QUBAU",
          "tone": "sell",
          "activity": "QUBAU takeover effective,bonds downside risk post-deal",
          "brokers": [
            "Deutsche Bank"
          ]
        }
      ],
      "drivers": [
        {
          "broker": "Goldman Sachs",
          "type": "事件驱动",
          "summary": "Iran/US exchanging fire,Brent rally,geopolitical re-escalation driving rates sell-off"
        },
        {
          "broker": "Morgan Stanley",
          "type": "基本面",
          "summary": "Higher oil revives inflation concerns,FOMC minutes reinforce hawkish bias"
        },
        {
          "broker": "Jefferies",
          "type": "技术性",
          "summary": "Steepening nearing exhaustion,Wave III underway,long-term bearish bias for global long end"
        },
        {
          "broker": "Barclays",
          "type": "事件驱动",
          "summary": "Iran headlines back at play,Asia HY at lows,tale of two worlds KOSPI vs HSTECH"
        },
        {
          "broker": "BMO",
          "type": "仓位",
          "summary": "TIPS real yields at 15-month high,RM buying vs FM selling,BEI rallies sold"
        }
      ]
    },
    "signals": [
      {
        "id": "sig-20260709-iran",
        "date": "2026-07-09",
        "headline": "US-Iran停火协议破裂,地缘风险重新升级",
        "topic": "Iran Geopolitics",
        "assetClass": "Macro",
        "direction": "Bearish",
        "signalType": [
          "NEW",
          "CATALYST",
          "ALERT"
        ],
        "action": "RISK_FLAG",
        "impactScore": 92,
        "conviction": "High",
        "brokers": [
          "Goldman Sachs",
          "Morgan Stanley",
          "Jefferies",
          "Barclays",
          "HSBC",
          "BMO"
        ],
        "oneLine": "Trump称停火无效,Brent+5.2%至$78,全球risk-off,多家券商确认资产卖压",
        "evidence": [
          "GS: Geopolitical re-escalation,Iran/US exchanging fire,Brent $76",
          "MS: Brent+5.2% to$78.02,briefly above$80",
          "JEF: Geopolitical risks elevated,bias bearish for global long end",
          "BARC: Iran conflict back,bids pulling back",
          "BMO: Every tick in oil matters again"
        ],
        "soWhat": "油价上涨重新点燃通胀担忧,利率上行+risk-off叠加. 短期关键看伊朗是否进一步升级,若Brent突破$80引发更大risk-off",
        "priorState": "US-Iran ceasefire in place. Oil prices had declined",
        "quote": "Trump said US-Iran ceasefire was effectively over and US forces began additional operations",
        "sourceRefs": [
          "GS Global Credit Recap 9 Jul",
          "MS Global Macro Jul 8",
          "JEF Tue recap",
          "Barclays EOD 8 Jul",
          "HSBC EOD 8 Jul",
          "BMO TIPS 9 Jul"
        ],
        "threadId": "thread-iran"
      },
      {
        "id": "sig-20260709-fomc",
        "date": "2026-07-09",
        "headline": "FOMC纪要显示少数官员看到加息理由,Higher-for-Longer强化",
        "topic": "FOMC Minutes",
        "assetClass": "Rates",
        "direction": "Bearish",
        "signalType": [
          "CONFIRMED",
          "MOMENTUM"
        ],
        "action": "WATCH",
        "impactScore": 78,
        "conviction": "High",
        "brokers": [
          "Goldman Sachs",
          "Morgan Stanley",
          "Jefferies"
        ],
        "oneLine": "June FOMC纪要确认Higher-for-Longer,市场定价38bps hike EOY,10月首次完整加息",
        "evidence": [
          "GS: Would support higher rates if inflation remains elevated",
          "MS: Few officials see case for rate hikes. Higher-for-longer reinforced",
          "JEF: NY Fed Williams: inflation still too high. Long-term bearish"
        ],
        "soWhat": "FOMC鹰派倾向叠加地缘风险=利率上行动力持续. 关注油价是否推动通胀预期进一步上升",
        "priorState": "FOMC had been maintaining rates. ~33bps hike priced EOY",
        "quote": "A few officials saw a case for raising rates",
        "sourceRefs": [
          "GS Asia Macro 9 Jul",
          "MS Global Macro Jul 8",
          "JEF Tue recap"
        ],
        "threadId": "thread-fomc"
      },
      {
        "id": "sig-20260709-ust",
        "date": "2026-07-09",
        "headline": "UST全球熊平持续,10y real yields 2.30%创2025年4月以来新高",
        "topic": "UST Real Yields",
        "assetClass": "Rates",
        "direction": "Bearish",
        "signalType": [
          "CONTINUATION",
          "MOMENTUM"
        ],
        "action": "WATCH",
        "impactScore": 85,
        "conviction": "High",
        "brokers": [
          "Goldman Sachs",
          "Morgan Stanley",
          "Jefferies",
          "BMO"
        ],
        "oneLine": "全球bear flattening,10y 4.58%,real yields 2.30%新高,30s~2.90%,BEI rallies被卖",
        "evidence": [
          "GS: Global bear flattening. 1y1y sold off 7bps. 10y auction through at 4.58%",
          "MS: 2y+3.3bp,30y+1.6bp. Real yields highest since Apr 2025",
          "JEF: Wave III underway. Break above 4.61/63% confirms",
          "BMO: 10y real 2.30% highest since Apr 2025,30s~2.90%"
        ],
        "soWhat": "Real yields创15个月新高表明实际利率主导定价. Long-end仍脆弱. 10Y auction需求尚可但technical偏空",
        "priorState": "UST already under supply pressure. 10y~4.55%. Steepening trend",
        "quote": "10y real yields now 2.30%, the highest since April 2025",
        "sourceRefs": [
          "GS Global Credit Recap 9 Jul",
          "MS Global Macro Jul 8",
          "JEF Tue recap",
          "BMO TIPS 9 Jul"
        ],
        "threadId": "thread-ust"
      },
      {
        "id": "sig-20260709-tips",
        "date": "2026-07-09",
        "headline": "TIPS持续承压:BEI曲线扁平化,RM买盘vs FM卖盘拉锯",
        "topic": "TIPS/Breakevens",
        "assetClass": "Rates",
        "direction": "Bearish",
        "signalType": [
          "CONTINUATION",
          "MOMENTUM"
        ],
        "action": "WATCH",
        "impactScore": 72,
        "conviction": "Medium",
        "brokers": [
          "BMO",
          "Morgan Stanley",
          "Goldman Sachs"
        ],
        "oneLine": "10y real 2.30%,BEI rallies快速被卖,1y1y CPI~260杀跌,5y5y~238,RM buy vs FM sell",
        "evidence": [
          "BMO: Roundtrip BEI. TIPS struggle despite~6% crude. Tactical selling 1y1y/5y5y",
          "MS: 2y breakeven+5.9bp,5y+2.2bp. Energy could slow disinflation",
          "GS: Oil lifting inflation-risk premia. Vols spiked"
        ],
        "soWhat": "TIPS核心矛盾:油价涨但BEI不涨=real rate story主导. 若Iran升级TIPS继续underperform vs nominals",
        "priorState": "TIPS had been under supply pressure. BEI curve steepening",
        "quote": "Roundtrip in breakevens as TIPS continue to struggle despite nearly 6% jump in crude",
        "sourceRefs": [
          "BMO TIPS 9 Jul",
          "MS Global Macro Jul 8"
        ],
        "threadId": "thread-tips"
      },
      {
        "id": "sig-20260709-kospi",
        "date": "2026-07-09",
        "headline": "KOSPI-4.8% vs HSI+2.8%,亚股极度分化",
        "topic": "KOSPI/Asia Equities",
        "assetClass": "Equity",
        "direction": "Bearish",
        "signalType": [
          "NEW",
          "ALERT",
          "DIVERGENCE"
        ],
        "action": "RISK_FLAG",
        "impactScore": 88,
        "conviction": "High",
        "brokers": [
          "Goldman Sachs",
          "Barclays"
        ],
        "oneLine": "KOSPI-4.8% vs HSTECH+5%,Samsung暴跌18x利润仍被抛售,AI China ADRs outperformance",
        "evidence": [
          "GS: KOSPI-4.8%,HSI+2.8%. Samsung large drop despite 18x profit growth",
          "BARC: Tale of two worlds: KOSPI-5%,HSTECH+5%. ETF/passive selling"
        ],
        "soWhat": "KOSPI暴跌反映Korea特定卖压+地缘风险. Credit spreads稳定暗示非系统性. 关注外资流出持续性",
        "priorState": "Korea markets had been stable. No recent extreme divergence",
        "quote": "Tale of two worlds with KOSPI sinking 5% and HSTECH up 5%",
        "sourceRefs": [
          "GS Global Credit Recap 9 Jul",
          "Barclays EOD 8 Jul"
        ],
        "threadId": "thread-kospi"
      },
      {
        "id": "sig-20260709-indo",
        "date": "2026-07-09",
        "headline": "S&P继MSCI后发出印尼Frontier降级警告,Indon持续underperform",
        "topic": "Indonesia Index Watch",
        "assetClass": "EM Credit",
        "direction": "Bearish",
        "signalType": [
          "NEW",
          "ALERT",
          "CATALYST"
        ],
        "action": "RISK_FLAG",
        "impactScore": 82,
        "conviction": "High",
        "brokers": [
          "Goldman Sachs",
          "Morgan Stanley",
          "Barclays"
        ],
        "oneLine": "S&P warning potential Frontier downgrade,Indon CDS underperformer,IDR-0.2% to 18013.5,IndoGB+5bp",
        "evidence": [
          "GS: S&P warning downgrade to Frontier. Indon CDS underperformer",
          "MS: IDR-0.2%. Another provider put Indonesia on watchlist",
          "BARC: Indo HY underperforming with index eligibility headlines"
        ],
        "soWhat": "两家指数供应商warning=被动资金流出风险. Indon assets面临持续underperform. 关注MSCI/S&P正式决定",
        "priorState": "MSCI had earlier placed Indonesia on watchlist",
        "quote": "S&P issuing a warning of potential downgrade to Frontier market status",
        "sourceRefs": [
          "GS Global Credit Recap 9 Jul",
          "MS Global Macro Jul 8",
          "Barclays EOD 8 Jul"
        ],
        "threadId": "thread-indo"
      },
      {
        "id": "sig-20260709-asia-ig",
        "date": "2026-07-09",
        "headline": "Asia IG Credit intraday constructive但late-session地缘反转",
        "topic": "Asia IG Credit",
        "assetClass": "Credit",
        "direction": "Mixed",
        "signalType": [
          "CONTINUATION",
          "FLOW"
        ],
        "action": "WATCH",
        "impactScore": 65,
        "conviction": "Medium",
        "brokers": [
          "Barclays",
          "Citi",
          "HSBC",
          "Jefferies"
        ],
        "oneLine": "China IG+1-2bps on AY buying,Japan IG constructive,但Trump停火评论后IG/HY spread走阔1-3bps",
        "evidence": [
          "BARC: China IG 1-2bps tighter on AY buyers. Korea/Singapore IG stable",
          "Citi: TMT 1-5+ tighter. AMZN demand across hyperscalers",
          "HSBC: Japan IG+1-2bps till late wobble. HK carry demand",
          "JEF: Japan/Aus IG weaker 1-3bps after Trump"
        ],
        "soWhat": "亚洲IG展现韧性但地缘风险是尾端event risk. AY buyer支撑有效但若Iran继续升级credit可能面临更大卖压",
        "priorState": "Asia IG had been range-bound with AY buyer support",
        "quote": "Spreads anywhere from 1-5+ tighter as we saw performance across AMZN spur demand",
        "sourceRefs": [
          "Barclays EOD 8 Jul",
          "Citi IG Sector 7.8",
          "HSBC EOD 8 Jul",
          "JEF Asia EOD 8 Jul"
        ],
        "threadId": "thread-asia-ig"
      },
      {
        "id": "sig-20260709-asia-hy",
        "date": "2026-07-09",
        "headline": "Ex-China HY-0.25/-0.75pt,Iran headlines重创risk appetite",
        "topic": "Asia HY Credit",
        "assetClass": "EM Credit",
        "direction": "Bearish",
        "signalType": [
          "CONTINUATION",
          "ALERT"
        ],
        "action": "WATCH",
        "impactScore": 70,
        "conviction": "Medium",
        "brokers": [
          "Goldman Sachs",
          "HSBC",
          "Barclays"
        ],
        "oneLine": "Ex-China HY 0.25-0.75pt lower,Indo HY underperforms,PALPM+1pt then faded,broad-based selling",
        "evidence": [
          "GS: Markit HY 0.25-0.5pt lower. RM selling recent issues. PALPM+1pt pop",
          "HSBC: Ex-China HY-0.25pt. INDYIJ/RPVIN buying. IIFOIN/VEDLN selling",
          "BARC: Asia HY at lows. Cash-0.25/-0.75pt. Spreads+3/8bps. PAL faded"
        ],
        "soWhat": "HY仍是地缘风险最敏感资产. PALPM从+1pt到回落显示风险偏好脆弱. Indo HY双重压力(index+S&P)",
        "priorState": "Asia HY had been in light trading. Some recovery post-ceasefire",
        "quote": "Asia HY closing at the lows with Iran conflict headlines back at play",
        "sourceRefs": [
          "GS Global Credit Recap 9 Jul",
          "HSBC EOD 8 Jul",
          "Barclays EOD 8 Jul"
        ],
        "threadId": "thread-asia-hy"
      },
      {
        "id": "sig-20260709-japan-ig",
        "date": "2026-07-09",
        "headline": "Japan IG/TLAC需求稳健,Lifer持续买入20yr+FRN",
        "topic": "Japan IG TLAC",
        "assetClass": "Credit",
        "direction": "Constructive",
        "signalType": [
          "CONTINUATION",
          "FLOW"
        ],
        "action": "WATCH",
        "impactScore": 55,
        "conviction": "Medium",
        "brokers": [
          "Jefferies",
          "Barclays"
        ],
        "oneLine": "Japan IG constructive,TLAC 20yr+FRN活跃,lifer demand onshore+offshore,NTT 36s renewed,5y+10y~6bps tighter",
        "evidence": [
          "JEF: Japan/Aus IG busy. New issue X>+5bps. TLAC active esp 20yr+FRN. Lifer demand",
          "BARC: Japan Corp constructive. NTT 36s renewed. 5y+10y~6bps tighter. Held tight into close"
        ],
        "soWhat": "Japan IG持续有结构性需求. TLAC和corp在lifer买盘下强韧性. 即使equities selloff也不影响spreads",
        "priorState": "Japan IG had been constructive with buying flows skewed",
        "quote": "Japan Corp another constructive session, with flows remaining skewed towards buying",
        "sourceRefs": [
          "JEF Asia EOD 8 Jul",
          "Barclays EOD 8 Jul"
        ],
        "threadId": "thread-japan-ig"
      },
      {
        "id": "sig-20260709-us-hg",
        "date": "2026-07-09",
        "headline": "US HG信用质量创纪录:2Q net upgrades$179bn,BBB-占比历史最低7.1%",
        "topic": "US HG Credit Quality",
        "assetClass": "Credit",
        "direction": "Bullish",
        "signalType": [
          "CONFIRMED",
          "CONTINUATION"
        ],
        "action": "WATCH",
        "impactScore": 60,
        "conviction": "High",
        "brokers": [
          "J.P. Morgan"
        ],
        "oneLine": "2Q26 net upgrades$179bn最高自1Q24. U/D ratio 4.60x. BBB-7.1% record low. Rising Stars$7bn",
        "evidence": [
          "JPM:$227bn upgraded vs$49bn downgraded. Net+$179bn. BBB 43.1% lowest 2011",
          "JPM: A rated 46.1% near highest. AA+10.8% highest since 2018",
          "JPM:$28bn potential RS vs$88bn FA 2026/27"
        ],
        "soWhat": "US HG基本面处于近十年最佳状态. 但$88bn潜在FA vs$28bn RS意味着quality premium可能收窄",
        "priorState": "1Q26 upgrade/downgrade ratio near parity 1x",
        "quote": "In 2Q26, $227bn of debt was upgraded while just $49bn was downgraded",
        "sourceRefs": [
          "JPM US HG Credit Ratings Review 8 Jul"
        ],
        "threadId": "thread-us-hg"
      },
      {
        "id": "sig-20260709-aud",
        "date": "2026-07-09",
        "headline": "AUD Credit firm despite macro,亚洲买家期限延伸,一级NWIDE tight",
        "topic": "AUD Credit",
        "assetClass": "Credit",
        "direction": "Constructive",
        "signalType": [
          "CONTINUATION",
          "FLOW"
        ],
        "action": "WATCH",
        "impactScore": 50,
        "conviction": "Medium",
        "brokers": [
          "TD Securities",
          "HSBC",
          "Deutsche Bank"
        ],
        "oneLine": "AUD tone firm,Asian duration buying,NWIDE T+103bps,QUBAU takeover downside risk",
        "evidence": [
          "TD: AUD tone surprisingly firm. Asian duration buying. NWIDE T+103bps vs fair~100",
          "HSBC: AUD Corp constructive. Retail/PB buying high-yield subs+hybrids",
          "DB: QUBAU takeover effective. Risk/reward skewed downside. Bonds likely remain"
        ],
        "soWhat": "AUD credit展现脱钩韧性. QUBAU是特殊事件风险. 整体AUD在亚洲买家支撑下偏constructive",
        "priorState": "AUD credit had been range-bound",
        "quote": "Flows were on the lighter side, though we continued to see Asian buying interest in duration",
        "sourceRefs": [
          "TD AUD Credit 9 Jul",
          "HSBC EOD 8 Jul",
          "DB Aussie Credit 9 Jul"
        ],
        "threadId": "thread-aud-credit"
      }
    ],
    "brokerNotes": [
      {
        "broker": "Goldman Sachs",
        "emails": 2,
        "stance": "Neg/Cautious: Iran escalation驱动risk-off,全球bear flattening,FOMC hawkish",
        "sourceRefs": [
          "GS Global Credit Recap 9 Jul",
          "GS Asia Macro 9 Jul"
        ]
      },
      {
        "broker": "Morgan Stanley",
        "emails": 1,
        "stance": "Neg: Higher oil+hawkish FOMC,cyclicals underperforming,EM FX weakened",
        "sourceRefs": [
          "MS Global Macro Jul 8"
        ]
      },
      {
        "broker": "Jefferies",
        "emails": 2,
        "stance": "Cautious/Neg: Long-term bearish rates,steepening exhaustion,但Japan IG demand constructive",
        "sourceRefs": [
          "JEF Tue recap",
          "JEF Asia EOD 8 Jul"
        ]
      },
      {
        "broker": "Citi",
        "emails": 1,
        "stance": "Pos: IG credit bounce,TMT 1-5+ tighter,AMZN demand,hyperscaler buying",
        "sourceRefs": [
          "Citi IG Sector 7.8"
        ]
      },
      {
        "broker": "HSBC",
        "emails": 1,
        "stance": "Mixed: Asia IG constructive day but late wobble on headlines,HK carry demand",
        "sourceRefs": [
          "HSBC EOD 8 Jul"
        ]
      },
      {
        "broker": "Barclays",
        "emails": 1,
        "stance": "Mixed/Neg: China IG tighter on AY but HY at lows,KOSPI-5%,Indo underperform",
        "sourceRefs": [
          "Barclays EOD 8 Jul"
        ]
      },
      {
        "broker": "J.P. Morgan",
        "emails": 1,
        "stance": "Pos: US HG record net upgrades$179bn,BBB- record low,upgrade buffer provides shock absorption",
        "sourceRefs": [
          "JPM US HG Ratings 8 Jul"
        ]
      },
      {
        "broker": "BMO",
        "emails": 1,
        "stance": "Neg: TIPS struggling,10y real 2.30%最高,BEI rallies quickly sold",
        "sourceRefs": [
          "BMO TIPS 9 Jul"
        ]
      },
      {
        "broker": "Deutsche Bank",
        "emails": 1,
        "stance": "Cautious: QUBAU downside risk post-takeover,bonds likely remain outstanding",
        "sourceRefs": [
          "DB Aussie Credit 9 Jul"
        ]
      },
      {
        "broker": "TD Securities",
        "emails": 1,
        "stance": "Pos: AUD tone surprisingly firm,Asian duration buying,NWIDE performed well",
        "sourceRefs": [
          "TD AUD Credit 9 Jul"
        ]
      }
    ],
    "dataChecks": [
      {
        "id": "dc-1",
        "type": "硬数据核对",
        "subject": "Brent oil price",
        "status": "Resolved",
        "detail": "GS reports Brent $76,MS reports $78.02—MS uses NY close,GS uses Asia morning. Confirmed consistent."
      },
      {
        "id": "dc-2",
        "type": "硬数据核对",
        "subject": "10Y UST yield",
        "status": "Resolved",
        "detail": "GS/MS/BMO all consistent at 4.58%,10y auction stopped through 0.7bps"
      },
      {
        "id": "dc-3",
        "type": "观点分歧(opinion)",
        "subject": "Asia IG direction post-Iran",
        "status": "Open",
        "detail": "Intraday flows constructive (Citi/Barclays/HSBC) vs late-session selloff (Jefferies). Monitor Asia open Thu."
      },
      {
        "id": "dc-4",
        "type": "硬数据核对",
        "subject": "KOSPI close",
        "status": "Resolved",
        "detail": "GS reports -4.8%,Barclays reports -5%—confirmed consistent range"
      },
      {
        "id": "dc-5",
        "type": "来源标注修正",
        "subject": "JPM email broker field",
        "status": "Resolved",
        "detail": "Initial broker detection tagged as Goldman Sachs (subject pattern matching),corrected to J.P. Morgan based on from address jpmresearchmail.com"
      }
    ],
    "qualityLog": [
      "12封邮件来自10家券商: GSx2, JEFx2, MS, Citi, HSBC, Barclays, JPM, BMO, DB, TD",
      "去重: _fetch.py自动完成,12 unique broker+subject keys",
      "日期归属: all 12 emails effective_date=2026-07-09 (无周末问题)",
      "覆盖缺口: 无China onshore券商,CNH/人民币部分缺失",
      "数据质量: 所有报价/数字均已与原始邮件核对",
      "信号: 11个signals覆盖Macro/Rates/Credit/EM Credit/Equity/FX",
      "线程: 12条跨天追踪thread,5条含divergence分析"
    ]
  },
  {
    "reportDate": "2026-07-08",
    "coverage": {},
    "flow": {},
    "signals": [],
    "brokerNotes": [],
    "dataChecks": [],
    "qualityLog": []
  }
]
};
