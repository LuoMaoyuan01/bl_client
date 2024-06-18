// Stores statis dummy data to be used to display brt routes

const brtRouteInformation = () => {

    // Stores a immutable list of predefined brtRoutes
    const brtRouteInfo = {
        'Blue Route': {
            // 4 Stations Per Brt Route
            'Brt Stations': [
                {
                    'Station Code': '001',
                    'lat': '1.288109',
                    'lng': '103.846664',
                    'Full Name': 'Clarke Quay MRT Station \nBrt Station 001',
                },

                {
                    'Station Code': '002',
                    'lat': '1.338299',
                    'lng': '103.870444',
                    'Full Name': 'Woodleigh Station Exit B \nBrt Station Stop 002',
                },

                {
                    'Station Code': '003',
                    'lat': '1.359582',
                    'lng': '103.884182',
                    'Full Name': 'Kovan Mrt Station \nBrt Station 003',
                },

                {
                    'Station Code': '004',
                    'lat': '1.412513',
                    'lng': '103.910743',
                    'Full Name': 'SIT - Singapore Institute of Technology (Punggol) \nBrt Station 004',
                },
            ],
            'lineColour': 'Blue',
            'Distance': 20168,
            'Duration': 2120,
            'View Point': {lat: 1.290467, lng: 103.846966},
            'Decoded Polyline': ['arzFgpyxRUSm@g@QQ_@W[Wc@WEC_@WMKKIGE[UYUYSYU[WE\\EVCJGZOb@ITWf@EFOVCF{AfCa@n@IPWb@i@x@w@fAILY^EFKPU^UZGHGJW^UXW^GHCFGHEHOVSIk@YSI]MMEKCQEMAOCQAOAO?[?]@c@BW@[@oAHo@HaCNs@DG@C?m@DC?sDJ[@i@@eDDMTABOXCFINs@pAADM?E@C?CAC?i@I]EUEa@GiBWe@GMAQ@E@C@EBCBGFGDSXGPELCNIh@KNGJIPIJKJMNWVe@d@_A`A]\\a@b@ONIFE@GBI@e@b@_@VSLo@^e@Pi@N[Jc@HWDs@H]BY?_@@Y?UAc@C[Co@IGAw@Q_Aa@eAg@c@Y_@Wo@i@IKs@cAaBoCiCqCgAkAAA[[[Yk@o@SQa@YEEQOCACAQKCAGCGEECKCEAWIk@OaAUq@MUCi@IeBWqAQoAWw@Wg@Qc@Q_@O[Mq@YuAu@uBuAMKKK]We@c@c@a@g@k@GGc@k@Ya@a@q@y@iBe@iAs@qBgAaDeAeDM_@e@wA{@_CKWa@cAUm@KWCECICGYq@]{@IS_@u@g@_Ak@_ACGEGiAaByAcB_@_@i@m@aA}@a@YuAeAcFgEm@i@Ya@}@aAaEkE_DqD[]m@i@a@]UQQMKIKIIEQMIKQICAYO]QWKYK}@Yg@Ok@OUGc@I[E]EsAMY?UAG?I?CBGDE@E@I@U?_@BK?C?[@K@Q?u@Dm@BM?O@G@Q@ODG?E@CBC@EBGBKDIBGDEBMJKJEFINEJEN?N?NBJBJDNHJFHFFJDJDLDVBL@JANCNGPKFGHIHKFIHOJWDMH[F]HmA@I@S@E?CDg@BYF_@Ha@@GFY@EBMFQ@GBKNe@Nc@Zy@BGZy@@EBK\\w@L_@HUHUJYRs@Pu@@G@ELm@Lk@DUJw@RuABGH_@VaAHUAO?C@I@_@?G?ECGCECEKIc@OMCgAOiBUc@G{@OMAOCICc@GKCm@G]G_@Iw@My@Mw@SMCo@O_AQ}@O_@I[IOE]KGAm@OkA[e@OKCQEIAICGAa@GIAWCEAMAQAa@EWAq@GeCQw@E}@EYCI?[AWA_@EqAIe@CaAE}AOo@Gc@Aa@EqCBi@@a@?W@}@BQ?o@BU?c@BiCFgA@Q@s@@M?Y?]AKAO?U?UCa@EC?SCIAWEEAGAMEMCKAICm@OCAm@Um@Ua@M_@O{@[CA]M_@O[Me@QKEe@OOGk@SSIIEUIMG}@a@q@]KG[UGCsBaBy@q@m@_@KIIGGEKGIIm@k@[WYWYWWYa@c@W[QOUYYYWYOOIKWYGEQSGIMOY[WYWWKOg@k@GGWYGG[_@gCqCa@e@e@i@OQW]mA_B]c@W_@U[SW}@iAa@e@IO{@gAaAoACCwA_BCEGIg@k@k@m@eBmBCCYYoAuAEEGIw@w@sCuCCEk@k@GGcBiB]e@aAqAg@k@IM_@a@a@c@IKMKPUFOTa@HYDSBO?O?UASEeAAICc@CWEy@Es@AMG{@IeBKcBEo@MaCGy@GkAGeACc@Ew@Ce@GiAC}@CYIaAMoBCc@Ao@AWC_@A[A_@Cg@C[CQCYKsAIk@IYKY_@m@_@m@We@K[I[Gg@A_@?KBW?QBm@@S@QFyABgA@[DsAD_AGwAIy@UgDImAMoAM}AIsAGkAIy@KeAa@y@GKIKKMQKk@[_@QyDoBu@]WKQIw@WEC{@UmCm@UEqBa@a@O]Iy@QUGk@Ie@IcBUc@Ia@Gc@G[Ge@Ok@Q_@MWKEAQIGCCA_@MOEa@KOEg@McBg@g@OaCo@g@K[IgAYc@K}@YgAYmA_@MKoAYg@Qg@Uw@]_@Qe@Ww@e@e@[WQa@_@YW][UWSW]c@Ya@oAqBe@i@]q@w@uAw@mAIQGIEGU[]]USWOu@e@c@Se@Ki@Kg@GGAYCE?c@@C?iACw@CqAG[Be@Ea@Gi@Ku@S[GYEEAWEMA_@CYAO?c@Ac@@_@@cAJw@Pg@Lo@VKDm@X{@f@aAn@OJI@M@s@j@uBbBgEhDgA|@WRCBEDOL]XmAdAiA~@w@l@kEdDeAz@w@p@s@l@yBdBcA|@s@j@WXmAjAwBvBwA~A_AfAk@p@?F?DADAFCFUf@q@rA]x@QZKXQf@AB_@~@]j@SXKPGH]Kk@Se@QCC]Ok@S[Me@KoCeAaA[WKUKq@WCAYMQECA}@_@_@Ms@UmA_@]K_@Ma@MKCOGoA]CAq@Uq@UkA[g@S]KYIi@Q}CaAm@So@Sg@SeAc@WMe@OQIOGq@U]Sk@Ws@a@c@WYMSM_@QICi@W}@c@{@_@_@QECa@Si@Wg@Wy@[[MQKQKICQICAYOg@SIEg@UGC]O]Og@SwAo@_AWgCu@SG_@GGCQE'],
            'Brt': [
                {
                    'BRT ID': '01',
                    'lat': '1.294603',
                    'lng': '103.844056',
                },

                {
                    'BRT ID': '02',
                    'lat': '1.298661',
                    'lng': '103.843630',
                },
            ],
            'EMS': [
                {
                    'EMS ID': '01',
                    'lat': '1.291133',
                    'lng': '103.846173',
                    'EMS Type': 'Ambulance',
                },
            ]
        },
        'Yellow Route': {
            // 4 Stations Per Brt Route
            'Brt Stations': [
                {
                    'Station Code': '005',
                    'lat': '1.340427',
                    'lng': '103.705937',
                    'Full Name': '1 Jurong West Central 2 \nBrt Station 005',
                },

                {
                    'Station Code': '006',
                    'lat': '1.337969',
                    'lng': '103.755725',
                    'Full Name': '71 Bukit Batok Cres, Prestige Centre \nBrt Station Stop 006',
                },

                {
                    'Station Code': '007',
                    'lat': '1.322026',
                    'lng': '103.883847',
                    'Full Name': 'MacPherson Zone F Residents Committee \nBrt Station 007',
                },

                {
                    'Station Code': '008',
                    'lat': '1.359043',
                    'lng': '103.990666',
                    'Full Name': 'T1 Coach Stand \nBrt Station 008',
                },
            ],
            'lineColour': '#B09B12',
            'Distance': 39410,
            'Duration': 2609,
            'View Point': {lat: 1.340427, lng: 103.705937},
            'Decoded Polyline': ['wxdG_a~wRPp@Lb@BH@FZlABHRr@BFTp@DTNf@H\\OBmBNw@@a@@i@@W@C]Eq@Gq@AOAKAKAGAKAICICIEECEEEKGYKICoAYs@Q_@I_@Ie@MQEICKIOOIKOSMQS]qAmB[g@ICIACAOEOAMBYHCBsBhAm@^yA|@CBoC~A_@RMHw@d@OHOHULMWISGQKYMYOUU_@]e@m@gAy@uA_@u@]w@MYkBaDo@eAMQa@q@OYe@o@c@y@sCwEg@{@Ye@c@o@S_@S]MQKOq@s@cA}@i@a@u@q@a@_@oDqGq@_BGOK]Ok@IYg@aCIWIYQ_@Wa@EEKMOQ[YUUUOUKGCc@M{@SIOEMACAGCMNk@NmADYHcAFm@Fo@@OBe@?YBo@@[?O@I@E@CBEDGHsDJsED_ABs@De@Jq@Hc@Lq@TgB`AwFTy@v@aDVk@j@aBl@wAj@kAx@aBd@aAj@iApAmCXg@NYj@kAVe@Xc@R_@Zg@^g@h@q@j@u@XYzA{AxByBz@y@|ByBNMXUj@i@`C{BXWxCsC^c@VSb@i@Xa@X_@d@{@DG^u@b@iALWb@uAVoANeAHs@Bc@Bm@BaBBS@w@By@BUBaAH}@J{@J}@Ly@TeAXmAZkAjC}FrLoWP_@HON[N]hGsMNYrBmEZq@N]f@gAb@_An@sABCd@gAf@cAb@_AJUd@cAv@aB|@aBjC{FN[LYrBkEDKFMDKLUj@qAdA{Bv@_B`@}@BIb@_AVi@bCkF`AwBLWJYL]Ng@Ru@Z_BF_@LiAFq@B]FkA@u@?o@AeACe@Ce@MoAUwAGY_@iBYgAGQSu@Sm@Sq@_@mAyAoEi@}AM[Sk@Yq@oA{Be@y@S]}@{AKSc@s@MQIQECKOa@m@qAiBq@cAm@q@s@k@c@YgAm@k@Ue@Om@Y{@YoBq@UIUIgDmAsAe@eB_AYSQMMMKIQUGIIKQYMSCECECIOYEKGQGSCGAIGSAGEKCOAEMa@Gk@[}AWkA[qAMc@GYKc@Mg@I]Qy@G[AEEMI[Om@Me@g@cBs@yBY_AEKAEY{@q@wBK]Qe@KWUc@Q[W_@a@e@][UOOK]Uc@SUMCASIKEUIKCWKGC_@Ma@O_@M_@OGAGCaA]i@USIKG]SYSCAYWQOOQOOSU[e@Sk@KWKUGQIWGWEUOm@_@kBQwAEu@Gy@GaACc@FeCLsBLoAPaABKDW\\}ARs@Vq@HWJWJUZk@NYZk@b@s@f@w@HKl@o@l@k@l@s@JKFGtAoARQXWhAcATSzAwARSd@_@b@a@l@k@PQBCZYh@g@^_@d@c@rBoBfEmEzBsBn@k@`B}AbAgA^a@LMRSdBoBrBaCTUTUfD_EfAsAhAqANKNQ`DqDxFgGZ]V[PSDGDEHMFGLSFI`@q@NYHOJSDMFMRi@Rw@H]BUd@yBTqALq@Je@Jc@BIBEHYBEJYHSxAeDDIJUN]~@sBf@gADKHQN_@BGBEP]Vk@h@mA^{@Tg@zAaDHQHON]Re@Rc@\\aAf@}Ab@aBV_A\\qAV{@d@uAPa@\\u@Xi@d@s@Xc@V]PUpAsAt@q@f@e@XWPOLMHIHKNUNWNYL[Lc@J_@D]DU@K@M@S?S?G?KASAWC[KcAIw@]iDAO?MA[?S?K@Q@O@K@KDUDOFSJa@Ro@DOHWRe@`AuBHYJWFYBYDWD{@?U?S?IAWCSGc@GWGYKg@CM]yAG[WgAEOeA{Ek@oCUeAI[COG]_@mBI[M]K_@KUGQIQO]IOQ_@EKKQuCyF_@u@EICGCEEIOa@]eA[qAQaAGm@KwAEiAEeCAyASoKAgAEgDDaB@_A@c@@o@HqBBYViHDcABs@PkE@m@Bk@@gBFs@D}@BULwCDyAB}@Bq@@Y?O@a@A]Ak@Cc@AQCOAOEOEUKg@Ke@ESEMES{@yDe@oBw@iD]sAQy@Ii@AWEi@?]?]@QBc@JeAFe@BQDSJe@ZcAL_@r@mBTm@N_@N_@b@mALc@H[Ha@R{@X_Bb@{BP}@H[FWJ[H[\\_A\\}@Pa@JS\\y@FMXg@DGb@s@RWtAiBf@k@h@i@r@u@VU^[~@s@RK\\U\\SDCd@]r@e@|AgA~@o@tCoBbAu@VSn@e@ZURO`BiAn@c@bAu@JIHIRQZ[^e@NSFKDIP[NSHMN[NYJ]L[Ry@DSHm@Fi@FyF?_AAYCYG{@Gc@Ku@K]Q[{BcHY_AYaAuAwESs@_@qAGSGQKa@Om@Ms@CKEYIi@Eo@Eo@AMAc@K{I@SE_BGw@G}@AQIo@WgCCOESM_A[sBEWAECM?GCIAGAGIc@AKYgB]}BWqBCIQiAa@uCi@}DqAgLGa@g@mEuAcMc@qDc@wDUgBK}@Io@EYCSCMAECMESCQWqAm@mCEYCOAGAIGYQcA]cBo@{CCOq@}CEMWgAK]Qg@Qa@GOMQ{@iBo@qAWi@cBgDc@eAcBkEaAkCa@gAYy@iBeF}@aCgB}Eg@uASi@u@uB}AoEIUIYIS}@_Co@gBk@{AM_@Si@KWM_@Wo@wAwDe@wA]iAY}@}@yDEWKc@Ow@Ko@YmBYmCOoBKwBKcD?mEJaBFkBTwJ@c@@_@BcAVuINsHHyB?w@@s@Cy@Em@AUGYCMCIGMSg@Sg@MWMU[a@Y]{@gAs@}@k@s@EGOSk@q@W]_@g@m@u@c@i@U[m@u@aAkA{AiBcAqAiB_CcCyCQWc@k@oA{A{@gAeAqAm@u@mBaCcAqAUYiAuAsAcB_BmB}@iA{@mAmCiDSWm@w@k@u@wD{EmEmFOQg@m@OQiAuA}AwBe@u@k@gAEKSa@{AmDy@{BWkAIe@Iy@Gy@IaACu@Au@?m@@{@?Qz@kFXaBRaA^{AFQ`@gATm@l@oAVe@bAgBZo@HKNQj@k@dAgAr@m@`@[t@i@x@g@|@i@bB_ATMTQnE_CxBoArEgC`@UjDuBv@k@`@[r@o@v@y@^e@v@_Ab@m@Zg@^i@JQFWVs@d@sATq@Ni@d@gBb@sATq@b@sA^kAJc@La@t@{Bh@{Ad@kAL[r@cBVy@Vw@Nu@DcAEw@Mu@Wo@c@s@_@][W[Sk@Si@SOISQs@SuBs@gEsAOEECy@UMGQEi@QYIcA[_@MuAc@oAa@}Ag@{Ae@qBo@KEyAg@c@Oc@QWIIAOG[IWK{@Yy@Yk@O_A[q@SkA]e@Oi@Q{@[gA_@aBk@{Ai@sBo@gBe@[QIIMUEIU[MUMKKGQKYK}Aq@q@UyCaAUIeCw@a@MoD}@eDcAo@SoEwAoA_@CAk@QC?m@Mo@Sg@SQKIGIKEICMCKCMCOCOAKAK?K?I@KBK@ELq@ACCGEACCCAE?EAE?C@'],
            'Brt': [
                {
                    'BRT ID': '03',
                    'lat': '1.294603',
                    'lng': '103.844056',
                },

                {
                    'BRT ID': '04',
                    'lat': '1.298661',
                    'lng': '103.843630',
                },
            ],
            'EMS': [
                {
                    'EMS ID': '02',
                    'lat': '1.291133',
                    'lng': '103.846173',
                    'EMS Type': 'Ambulance',
                },
            ]
        }
    }

    return brtRouteInfo;

}

export default brtRouteInformation;