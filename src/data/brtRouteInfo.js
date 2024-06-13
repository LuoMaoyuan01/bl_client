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
            'Distance': 20168,
            'Duration': 2120,
            'Decoded Polyline': ['arzFgpyxRUSm@g@QQ_@W[Wc@WEC_@WMKKIGE[UYUYSYU[WE\\EVCJGZOb@ITWf@EFOVCF{AfCa@n@IPWb@i@x@w@fAILY^EFKPU^UZGHGJW^UXW^GHCFGHEHOVSIk@YSI]MMEKCQEMAOCQAOAO?[?]@c@BW@[@oAHo@HaCNs@DG@C?m@DC?sDJ[@i@@eDDMTABOXCFINs@pAADM?E@C?CAC?i@I]EUEa@GiBWe@GMAQ@E@C@EBCBGFGDSXGPELCNIh@KNGJIPIJKJMNWVe@d@_A`A]\\a@b@ONIFE@GBI@e@b@_@VSLo@^e@Pi@N[Jc@HWDs@H]BY?_@@Y?UAc@C[Co@IGAw@Q_Aa@eAg@c@Y_@Wo@i@IKs@cAaBoCiCqCgAkAAA[[[Yk@o@SQa@YEEQOCACAQKCAGCGEECKCEAWIk@OaAUq@MUCi@IeBWqAQoAWw@Wg@Qc@Q_@O[Mq@YuAu@uBuAMKKK]We@c@c@a@g@k@GGc@k@Ya@a@q@y@iBe@iAs@qBgAaDeAeDM_@e@wA{@_CKWa@cAUm@KWCECICGYq@]{@IS_@u@g@_Ak@_ACGEGiAaByAcB_@_@i@m@aA}@a@YuAeAcFgEm@i@Ya@}@aAaEkE_DqD[]m@i@a@]UQQMKIKIIEQMIKQICAYO]QWKYK}@Yg@Ok@OUGc@I[E]EsAMY?UAG?I?CBGDE@E@I@U?_@BK?C?[@K@Q?u@Dm@BM?O@G@Q@ODG?E@CBC@EBGBKDIBGDEBMJKJEFINEJEN?N?NBJBJDNHJFHFFJDJDLDVBL@JANCNGPKFGHIHKFIHOJWDMH[F]HmA@I@S@E?CDg@BYF_@Ha@@GFY@EBMFQ@GBKNe@Nc@Zy@BGZy@@EBK\\w@L_@HUHUJYRs@Pu@@G@ELm@Lk@DUJw@RuABGH_@VaAHUAO?C@I@_@?G?ECGCECEKIc@OMCgAOiBUc@G{@OMAOCICc@GKCm@G]G_@Iw@My@Mw@SMCo@O_AQ}@O_@I[IOE]KGAm@OkA[e@OKCQEIAICGAa@GIAWCEAMAQAa@EWAq@GeCQw@E}@EYCI?[AWA_@EqAIe@CaAE}AOo@Gc@Aa@EqCBi@@a@?W@}@BQ?o@BU?c@BiCFgA@Q@s@@M?Y?]AKAO?U?UCa@EC?SCIAWEEAGAMEMCKAICm@OCAm@Um@Ua@M_@O{@[CA]M_@O[Me@QKEe@OOGk@SSIIEUIMG}@a@q@]KG[UGCsBaBy@q@m@_@KIIGGEKGIIm@k@[WYWYWWYa@c@W[QOUYYYWYOOIKWYGEQSGIMOY[WYWWKOg@k@GGWYGG[_@gCqCa@e@e@i@OQW]mA_B]c@W_@U[SW}@iAa@e@IO{@gAaAoACCwA_BCEGIg@k@k@m@eBmBCCYYoAuAEEGIw@w@sCuCCEk@k@GGcBiB]e@aAqAg@k@IM_@a@a@c@IKMKPUFOTa@HYDSBO?O?UASEeAAICc@CWEy@Es@AMG{@IeBKcBEo@MaCGy@GkAGeACc@Ew@Ce@GiAC}@CYIaAMoBCc@Ao@AWC_@A[A_@Cg@C[CQCYKsAIk@IYKY_@m@_@m@We@K[I[Gg@A_@?KBW?QBm@@S@QFyABgA@[DsAD_AGwAIy@UgDImAMoAM}AIsAGkAIy@KeAa@y@GKIKKMQKk@[_@QyDoBu@]WKQIw@WEC{@UmCm@UEqBa@a@O]Iy@QUGk@Ie@IcBUc@Ia@Gc@G[Ge@Ok@Q_@MWKEAQIGCCA_@MOEa@KOEg@McBg@g@OaCo@g@K[IgAYc@K}@YgAYmA_@MKoAYg@Qg@Uw@]_@Qe@Ww@e@e@[WQa@_@YW][UWSW]c@Ya@oAqBe@i@]q@w@uAw@mAIQGIEGU[]]USWOu@e@c@Se@Ki@Kg@GGAYCE?c@@C?iACw@CqAG[Be@Ea@Gi@Ku@S[GYEEAWEMA_@CYAO?c@Ac@@_@@cAJw@Pg@Lo@VKDm@X{@f@aAn@OJI@M@s@j@uBbBgEhDgA|@WRCBEDOL]XmAdAiA~@w@l@kEdDeAz@w@p@s@l@yBdBcA|@s@j@WXmAjAwBvBwA~A_AfAk@p@?F?DADAFCFUf@q@rA]x@QZKXQf@AB_@~@]j@SXKPGH]Kk@Se@QCC]Ok@S[Me@KoCeAaA[WKUKq@WCAYMQECA}@_@_@Ms@UmA_@]K_@Ma@MKCOGoA]CAq@Uq@UkA[g@S]KYIi@Q}CaAm@So@Sg@SeAc@WMe@OQIOGq@U]Sk@Ws@a@c@WYMSM_@QICi@W}@c@{@_@_@QECa@Si@Wg@Wy@[[MQKQKICQICAYOg@SIEg@UGC]O]Og@SwAo@_AWgCu@SG_@GGCQE'],
            'Brt': [
                {
                    'BRT ID': '01',
                    'lat': '1.294603',
                    'lng': '103.844056',
                },

                {
                    'BRT ID': '01',
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
        }
    }

    return brtRouteInfo;

}

export default brtRouteInformation;