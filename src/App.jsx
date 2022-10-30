import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="header">
        <a href="#" className="btn option">
          <span class="fa fa-list"></span>
        </a>
        <p class="header-name">potato</p>

        <a href="#" className="btn cart">
          <span class="fa fa-cart-plus"></span>
        </a>
      </div>

      <div className="main">
        <div className="item-container">
          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/CbZVccgXTZdqhfo0baoaYDkbq6x3G0xTWcRospyRF71LPJA2UTCPBRlwCgQExZWFvnC0_1vKVJDamjtbxar_TZod0ar250ZSycQnWtcaOVtTkaXjFD8fXuwux2uy7_T-WhBTMyHKlcpGd2kVwDiRk3QgPXD1agZc6WcNzVIbYX7ao_G-mhlozSNW3c2zWNoka-v23tZk1GYp2WO0FzyET5ggOqPTuz7uf-XrJySuiAIMKPeHUOld0EsQ06sJ_EtshSQjFZuAGh8EmKaogki3jFmSftIWdKTWC74ftBBa3wszOpRFk5K43q7tFWlzfNvaPewd45IIW6o-WNcYSJRe3hQsz278JslWbtWJvXVyfFO6K2y6AIU-qKFmqX7FAmlR6jpW0rtcUHyIf0qfW8JSFuXBvXS6T6PZGTrib_hGfdldXraA6Qo7YfIhGqyXJz4A6f5JfBTJkKp9cC-l_hot1F9uqoaRUwnoqgOEVE9ziBXzLmBhGW6Z98BGKQFB_GNREZMAOh8QICbDgJz3xmbK1PjJrsMeKLkGlJBqgx_AeOY66PbtZcFxigH7nbF-5qrBCTQn1_I0HhrhKy-9YclEtxg09ldShc2VRIzbx6BNQzZa3HO1RDCDhfvEmniKNe42S0XK-zHbtgrW1UQYqAoVvsIh6Pwj-p1buLWETZqnxBnlYtzIiFYKykjIggv7p2d-2PddMiBnHQkSOY6oDNv3RaVHvazjSD7HqLu6ydTelbtCUG1xAhVngLzarbN2wysxM19wq1SKd1d3L7mfdjAEmB54BskIfrz48uJ-udR54EmdTGGd2pbVTYsU84TBHvnfGMTm2eh4WycN5nn2WaXkhgP7AO8R6RDMuoefMAtxcAFSRwA2DdnE81MdlSG3YLv8e73Vj6x7_OWDfEC3wpJIFCSHoQF1pj6bMie0-mWJ16E=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】track jacket</p>
              <p>￥5,100</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/IuCW0gObm6NqmBb0FaMBKfPV1DF6t4-L4IU_K8O9CKcLN-UuhxzgBXcJYk4w8VAlS-KagbOk-M9siZFZBrZ5BS5-k_3JsLiZlFGCv6gzcTZslS8pp2m_Rl_YM_MZj95VuBoU1YW_anSwA6lWxixLsjpIgMkHwK3_PLOLkDsmYCB8CmOWHMCyyKfZzf-jFAWaqJTxXtE6UyTbyPmr43A72mIlSVIPtk2x5oGIQg4QDjjhM6acTe5Rn20jH-33HQgteHnofwq7NVEzwCf4Dnf1kR9sr5NYuD8GgxNA4KP5bxfJF0-TI4bDS6KOPu6RBVn8cewNVDBKIKbqp6j0XCW7ZfK1odeZgCcvjIFZUU_cAj3pQwsmj9YSua9T5jaL3w5KK4yXN72s9RQZkNgcaQeFnbbwIdMSG7vTH31XtWKHGD4f8Kmn3JQ1yICxUt79o0JRlEe4hFDggjDBnMMflC2esbFTzh47pZj8GCSBg4JAeCmL9zX_ssoZ-HYCuAhW1BoDWs7sQc3yYciF3wp1-g9xjGvL8qIpR2uDNnyH__Z0TBWpv_mOBEcL0wN64cKHfvNOwRHE8zO0sHimzVQ1D-NHaDcFkCgTWhsi-skHMw2Q4gRSRG1RHgDKHaxruPtrJtRGh29m8ZvaOYa-Lw3gFhvwnxjK5L7vnu0nej08k5V3biF4vC3wKdR0pTOO8lZfe7K-ASP4KW8DlSqfgqPeCBKH5mRDZqC8W2XnajYOKs5Kjr1KH93Pdj47IuhW9YArj68chP62Z937x1TAoJZP2If4loUIdynu6oxBKmgY3qSnxxQ3zcuPsv9RcIQUegplTbFDzP8X6H2LyArN_ESV5IhE-uPzmcehMw0dCO1MbuhkWhUQ0kR1J6BwI92TQFqcFwQa-wiJwLZi79Hd_KKVCdFmvBFOqudG5kUR8_KdsHVtXtA=s202-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】sweat Mickey</p>
              <p>￥7,900</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/ztGqcV3RRT24yNrifFk3zd1XwMDLPGq03KGw2fe7-DBGs6dh2zNn2xLy_ok1eVJbQsi8wyqlKrfqxMN94DshZIvbRa9hyJSUcqDd-oIEUhWZI_XW0KMOaIuli5wJ974Ee6eYw8n69OsIRjefNzRGxw9HT-phbWwIVoojTsdDKwxVTShes1bn3xygOngfk8LkghsdYCddmdWdE6uyBG6y6-vfOV_n4jtIjxcU-zViWt9pzSkudhjOKbLSHxSBU33q_hVNRIRJlipIJs6TVZ5WL2OesGxyM-Jrs7DIwoUXAFo2htDrBoG6vl2hKDXoATHZndFU8lUCLcYF8vfw1bwdbU74_MDQSulJTxBy7jq_xPFX9jM0tyhm1NsIMhrw4slXmDucSfNZrbvwuOObziSvlTsBYHG5gr57QrC5oPA_-rJfiEn1aZi7wdV3XxTZIj4cjj5Ub7HvLNE5MY2pZPo9eNEt20oCeG69Voh8tgQ99C09Afo7MawUgRS_blI9fjvhiBggr58nhc4l5xwxmfThfe2oSDkEjurpdYYQSSfHz1Ujt69mMCm_coD1AyquKFbYQWQcQd1RN7EaoCAUx1V-oVAxVc2L0wXo1JauuCZGhihqBYn-BQHTE2ISHnB-EWQGuerCj1c6uUbFGCqRnTCmiG_nG3Ig_JWqjlbliZ6b534-qMv_PbMGs8cFo7UxssAVb5Vq2yvntW131Wk4ZT6Yo12bOmOKVmLdX5l1CZ073VV4vDNS00Tmu3HfxjzIVcv35NnXNs2nJHIPBB4Z7G8EhPLQAe1YMYfmgmH4V7QM7qb-YEXr3pqDczdP58Oi8MzZh8wN3xG8Hq7x292hNKNJljWw-WhQ0TWkfb_9kbqoelPpxOHzIVM7ad0IDXjdxjyJkf21GTGkkqXbMBfUS4hMMiNxSjhYRMDotn8K5_l08LE=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】track jacket</p>
              <p>￥6,100</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/pHE8AYrMrRe8dAjQZg4VKrElngE9r0iE5mNsqq6siwMAgzUerWTqT7sOvIzDhrKvD-WVtqCmgamRaUCP1UrEjW-HcXl1MdtyM4-eaNb34drJYl9sg4rR4mgwq3fUASLsh--_jCXJRVq-H6HGRLgXvPIHQFOcZ8NILgxJHUFQPb_7SwoKNKINNc4a1RAMQZnNf4KEVTiyzE69RyCqSI0E_3jbaeFpTSQqOfiAvK98F6PzuNRRHPCcP84gm8amTOjjPDf-mEBAcQ7q3reKyNtlh2-yCyj6esYZU5ycM1dX09ZVoJ2ANUZvwwt8-Gc9QsoySsZpASOLt9osyLTFAR3wBnBbljNYOBeqOFauA1ZNziPadbO_CpvG1K6OpfwvIzJG5-02i7H2DOvPjVUDNaX0J-dooJsly-dFTCfxBfOH3avEuiFTQL7P7HY7lnkAFgl9_HdjiNTTb25gtJtYZeGwFphlx74psRFdmAl9Dh_Y3vYOIvDhjlMZbUmMiHOrZLXlz-Cj-odM4_G_CO-TcKYj8KjPFE0TX4LHwi9_WEtyOSMAzVwI1OgIt0GeRTBNk0HAwpR5np2iNjXxaDEW8p3riXMc_2cEGiU4SdFanFHPgubzqKBy6FHKQjEOjYVCqRMOjkDS2-W_ecFFiIwTZAC1h3U074GLfJwRS_HfFbUnkVwWvuqdxxcPERiDu6UzZlLfaavrcBiRz1k1HpqtU53ENDmXaIqRERDtTHDi7vgpfP5g75dMnfub7HVr3rI7bffeukpE6vzv8t9yPZi_CVr9AOdP_0ObHkMZt9byNTAM8HBKa-FuB_u09TaETS1AssDkhBNJSz0HKBJIXnG7CHBB7vN3D2cJfhznjRRy2Dd6A29VCWwCPCVcLsrI2lmikG3J3yZrbHLulxQaMQobJ5u5O1lU2_-a0NvY5z77GOAzwKU=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】truck pants</p>
              <p>￥13,800</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/pwtBp7b9zZUTK7TwuhAo814q_9qTdTuXLTaL4tcSi8NU3AaCL6lLnnLcvihFov0ekT8r76et7M546LE_wPcOG-y3cqWDebvaNL2TZZi7w1FUt4v760rL3PZvj6thDCNXARzox4tFIqxs-1FUSKBIhzktm96xU77K_OQ2e8XN8Etw5GwDmrfhLuQ9petBecNaxKIQO8u5ahLjBN-TExQPH7XzGs32dAofKTHz7jeGMZ9hl9RZRf6S3piRavetfjkKdDyPeR2aktQiWATM1P5oyCcdDw1NQciAHcL9QxpPn-YIDxu-FkXeeo1uOs2n-KF0lO11VE9uTthenJH-DYDvfGfAdpxc1FimpjRhBRr6hhRmkmr4MeXiPjsANDR4yRiXdmADs-m6ifSyNy-vm6EiAoDtY5afyRgx68h8rPg9NMQf3Ka8NEKeLzYdrV24JThfd6tCBHWSyzXGsBeRtdeBeAUtajZd8fs6pXETw-D8kJ11kAZGh0m3rsZ-VDUQdfR4DCuPGZoknEajkP1Gkb2ZwBaN6Slc_fSq1bMOpqyv2Oc5C30H25o-H3DkURW8SeGw1LiUE4j5_EFaDMNg5tOr_aPjBfSTxKjY6xxPNRh7s89TxhV8AsH_2G7Gu3moAEWew9Z4igPzxv9WoPuzQiAppFAwFzyh3n9NPpCOut_kY5_LBrEQsLFbyXwMgEF7etzyiIvYsZRja5lR24mDyjlknv1PqeqYE-Z8KTCC-xRMU2Vn-So2a4xHrnRYv-OS7Td7NdoUyI3vm9IvYm4g8yQY7yMx1CluMRCY-Wukp_9B5Rm8qeTxy-mEwiqzHmkbSjwTJppcwcq1YxKuUMwteA8YGkslLt-OccwnPwGM6gHzLY3nHttL54jxfMUwfXStc5ckwej5NDv00_5kx9nptSzLFwxxU_byJ9K2Bm_5rUDrKS0=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】paisley slacks</p>
              <p>￥8,200</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/Ea45vlyS0jPPIQX1pzK5fK4tTAp55W79maX37vRIuwBdvs283qdwhUUGdrqKwO0xWVAnh48mYRbCoB0y2RGm3dtJSmMMrvzKIXdwKnH3Ort4T62QD9XrNvWGv-QoqOOwdvGmr2RNSw9BUYEXc3uq-Jo5_rIc8VEe47ck4OXYUfUivAx-bgRAcjaYX9fQ3Fu6TFd_-GI2HixLe2wgUhkYDp7gQvw_JsmdHAMVqWX4Dk2JtcXxim82usV3tGoLbaLYQQ_PatgkWCj7MyP6usm945w_fcGoCQH16kHtueBZvnKHnyWwtXvBtc3xdlbshBSprlCRq5aJ4LUbu2sMYYJ2lkf_Gd-c0GSR_Q8saP1Zu3oXiccgIw7YxiJQYZ44GwJTf2uY2o6h3fchNlKTWkB_NFbO6djoEGkzCeUQSkbxJyUpQ4lP6_I50fCwEr6tXrgo06uXEO0_sr9B87iVxP8ZgX2HoTvBZuqT80s30jauUy9SrkosOAjSuzYXY-pJkd4NVd0-Z9919s622jSM6Akccx89V7ZT_J8WEu7GJqYsy8c6JU-Fu6u7JmtBnGkq-AtPPOxBBJzzQ6t5_Pd-lDeSdgAA3Lnp144FBpcyEbpvgjQ1j-c2FX6z1KiAGfADxt5lNtCOs74IEhKqxso9O8e3RO3vaJBf009JdHi4TPtwwwBO4cSucnEZFvyLAt1h6DeepTR1I3846hIlz5I4z6Pcs8g87FOs-aLK6lqcFZkz8B_df9AcdY5YE1tST3dLGPKh1kNFHTY9xguK7mltCi9VR-8OMx0_paqgj725P6dURTAEnMS05ggYrr4yIduiEdk8y4qKAqlbKRtws_8CbbNaeXYhCEAPjd7gkfU67I3WaPpXGkRKOFSRvcW-ANkHn733BL5NgE1a4F7A8F9J9IrZtJi55BwdrsVg-IH_3ddyteg=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【override】knit bucket</p>
              <p>￥9,900</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/PtqPLBvchXyFz4rnZrkxZPbYZdY3HQyEUnpte-ClOukRB1ss4DNvy_D1sOs2uzb7FiAwBGaLGZ8cDf0xyg7KRXS-wLUO97GUVAjK_xIkLEqeZfJWoWUOCeTnlwHUP-NHFnbvRZbngRz707-YzCCjq-zto8bNwQydj0xZj6xut_qAJRKbgJoR7DjgRfkQVDw6hVNL5KSX-BiAlaaX20WJ0U4T_x9R6Y9yeDdOy1TFVILbBY6swLsApWSej_PK3WOU10Gqrx2pThZHkzsEoQmPXzg5K87MvT5xKjlb5WBIl0Ny78uHqGc9aNdQzjR01fwHghwyD-8NNS9C0YPVul3tWh6A_8EeMiJDAofgJaVq9SgpNft_RJ-RBEHoNVBL3x419TVLPUCxFBvxu6310Yy-svjqTF8U2SCDBmntn6Q8CMx5BHnN9-72oC4wvmtRJ1yeplysgJ0gEomTIiHu7lWUWJiYm299WHZZzWQu6j_-jYP4CO8gZ0-YeA9xeRRLc8hlwVWAZ0Uyytz6zOQDXPeGSFCZ_v0ff-6-hELUjSAqA65Gk-w7YwhYGcGFKzR4YumxerXW4Pv91ivr6-46-RSkHPgocWrqZi8TSq97zZmH_zdnW5swXPjrMuf3teM4vK3GPlV4zbZFbgjv308vOWvzqz_g6ov9_1F-9ifCWJg8p7Qqj1xOImU0GdcBdzIU5qBONQEF1lZzHComsLnZZEG28ScXlECcySG008uG82DIbEbv9-MGqaXvzkmySZB9tZ_bJzbRlByoaZ-o9JM9PyF4nOUuB8ch2WPj4hJid_9SD4GTNPlNnBYB0OBYVSBc_KcTP38ap0nltmhVU1Qcxhgv_7Wfa79giY0jF37RKK-1t83qFbCakAZY_ZR_xJemdlwNExCilHVetMkfTjoiQWzq696eDseDrPD7r2QpWmEP1Ik=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【stussy】basic plaid bucket hat</p>
              <p>￥6,600</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/9hsdBVYkmqP9Rf1Qx9_RXjybSwu13CjBxoXRcJ3yIYBt_cnzkJBqVrsiH_ldnnKGaRJeGIgBTkltsfj8qcICJYNMUy5mJAg_CzuvabZ5cyMUgDljaQUFqqQLfJpsT8OcYYWX9zHdH_yaQKbQdGGdruLTCQbEyzu0WUgq-5W1mGjJ9lV2oxNWPKOPHPOqzKZzvM1A8hLjzZXhKErhDRLF-f8Aey-6Yy5SWO_6BzLv3d-2zItylVTjc58coYZ8Xgid1OkgWiwOOtofK93dcpiuef9SC5-FRYIyiEq2i5U9YFvmp3yx9IlM49rmoX1R0bM2YCbujaGooH9-QyWCbkAYH9emoN_8y0wYq6Q1DBrvgXlQ9jCkV8Cg2w3qfATLcgbCS26D52AnPTIJbK7gM2ohV_Hyv1ZN_0xzYjfjdEqG5ASlNmFNVupQIAq0wN3w0hYL5bYJ868cIdPyQO9dxIE4wYIioGyBXz88ywjSpt4qYUX16VmvT-y4YgkdUMDcfrls5mE_LCpOFJKDds2NVSF8vs2jeHZho5fv9EHUEIlzFn36m4bRAAespIHcBl8lqERz1S7kvBEl0SQ8vlKnmDJY21S6g36yOR7zp8kaTTGRnTlHw72meoV1n5RO1I8C-uHMICqoq1b111ooSYXisXELnUk26wNLfLO2KZ5tNANcVprsZ1OSh8iWlWFV756KDlYxMPYk7wiZ-5H57bxyv3hPvPmrpZEIdbAX7lil5167QVujL6kOlvmWTiY34vLD3S4e22qqlN23pgYGuvi3WcAwBMWAZLY2Gz2MfsIN1DL29vM5YRFc00X-MgPdcxR0mHh08iau-YWG2yeWjCnOwuADyJ67Hiym4b2Gw6COBhZTSXGOE312v693mZEI3V5KwjZ9ag_QuWyGXvLKojbyCR_dSMzulBhIvvvItLX1gDJX0eM=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【old stussy】knit hat</p>
              <p>￥14,500</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/pytG1Jo_a-j9d8iVONV1Ihbc42M9EFcrjft6z4W_nus77zFENrlcRqG1RjJ3Hbw7TvCEg57C8a3WHeQg3eUOlqF1Gru57si7sQm0zP3ztsCMXxusfGhZCjB0Xtf4InRw3FmsmEnqFkfAVg3TNuqrYVemk2lFEQ6PQDhVUaOOAXGiTg0lqZDVmAQMuICPV42ONf5ez5t-vcQV20eNh16QSBwdYoKzTvgJ4fF698EgN5C2ALv0uVbsIUuVrhcr7ThWniXLaHIiM7hKf4up-GNRl7DKONvpnhRJn9lZUEQX7DEb5OReUB8dy2CIinV6AIBMNIBuSNGg7lji-tCxwLy2IKBLOqOeNGFU_pH3tWE6VBpZcpmhYyHHWH4fbRcXsm-Hnnoi3ofTc-Thn9nvhbOAf_K7YCZPLz1VdHU1F0eC2kFp9sBGO7Lm9rfDgZWDjaWbomB-Q-O63imaPrmSvjHof3t8shYXCy1u9XSq0q4pcpVqCxA00LdxQP9-UVpWSGiC1VJexuJ8p7drttO5cuXEJOLY-WUQz8sAF8rJV3YgxgxfDPUivQp9eEv5DHGOPkQzJnrUgN7TBigGwhKICu7Uz2icrNG-_7TbgfTvdiP6kwrUNyIsmYsIWlZFwUefPR9GPiEFbNVlf6YJQoOpN2GFUcIPB_Vopqa9kvQhlRtT3Kngv526ZOci5YeifPt6LfLTtsH1r3oUydWJznhjNwZ6ffO9zqPDvWNUdIVEgi7-Y4pux24aRtJ_YPck5Bs0cBI5P067fpb-zfNBXTiE_-OQeTJsy0dlkrLibKnpis8iXMuDiLgaHX_2aRex5OlkjTcbRqcjFFujcjjMOgmXU-2SIXjx53hw7YFaTupGeu3n4NcmcTLoLFymCje0cNl_mFuI7VFuHb-_TVLAt8Fk7OeBpbElV4tn-KNrDsaiPD4ONO4=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【override】ang tulip</p>
              <p>￥7,100</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/91YQVUvjQjuek4h3cNaNU0BZCRB8xGbznfTCcpB9CRWMejuG7x1F6xCgV4XyhpIJOeW-2urJeQuuoLiRdqChdlyBW8-RcgwAlj7Vkjaa4jShRGEsVl3YBt82hU_2h1NJeTkoBuCP_DSgBrvGfbWcCd-MFHS-wQKNIAgAEklDo_ALPhNwmqv_PkNxWVRuilv9_7k0QqQEQjHJDT_fAV2xbjdoLblBgPEcwp0C-2xD7EvApEZICRXEyeeOdOPXTlXWUIh9ojHVlj7IMg0ajEITuYfOlr0_hbfPM9zxK3oxVdqJxdgCZ-7a52_C26r8ezU1imJwH3SUhySMXNUzLEPzg3L6Lgyys7Gj6q_PcrmUtaqXdXaJidq0M-4G6sGDqByF0hDE3n8kWqaVLJIRxErg1aN60SmwJg2iyTq3tfXoWV9y0_5CnNZA6AlwVPCoItZeuB0T5RNr-nUvIV_TOfty9s2ODHP-M6QZjoW5O7Xxc90ThtOWazzzrU3evnoppeQCRDpOAwQcvUMphVKNr5sJM1NP7jvSvS6QSlZ41p3smA9VQQTzLs8hYHel2-7s6h3G1_bW5u2Ow5DAnC9Izj6wW05pV2s897v-97A-EDM2Zitt1JAqGvm44gOE7c2vRpNyF_NwmSMoax2MIeFZkojQ51PUOhhQ6CJoGFB3HYcfLX5uEDjwS76DKu4ykD14DD5cxPZk3tFcyxCxPQSLITvaDboWPGgmKi0IzuwhI5tXudGeGWI46snKz37CBmPuqoDUt7dE82i0ymYI72C2cMJpoi6Ngg9XApiWoHWYArqeET-fezhuVKis0RQqFL6xdcUUjdB_TbQKz952plaEWvsEL1faag2dNImodddDDBSJwDgpbB4yI2z64JTEmO9TdIIOPy95XpZBaTijwknmtTpl-y6AlYaMOl39FAdzG5R1YUU=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【towncraft】souvenir jacket</p>
              <p>￥15,500</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/NHnJX4ZkG1uMr75auZB249vU2yLm1OC0q6IaxMVa7QhCCNMcNqpEtslSP20rJ_hDd2kookuDWAInvQHC-7dV8u8GZkqVV5az309V_wGwKPHSNqsZAgS6almbDB4K4BbpUF6tV3HAF9G2MYpx8Cki2663gAUTereZKCtbofAKieQqkmL-ySK84LxWFo40m5Dl_rECyn-8RUxcV3F9sMWLS8AUUclnZPI8sLLGwJTf1Zpsxi9HMzTa5tzgVKqagPyHUdDXhnkXGaSd-cZSE4RaP76PUBgUPhApTNE7Yh0JEwdvpgtSpivPQ2hJg_2YON3JO4hAkQRwsEEDckyqOPAV1nv-kpCqTldTL7lIS_-G_fvxR7UHPvc5Ly5jcqubCJtSDQulT1bqzsiXBOKDsTL3XuzjpKd4m8ZRJX4TMJmZ_qNUwGEARliNnyYu2g0da80k1hVcV3-qcTlQsVTXR3OH63MdXKlvzYv90CEj4JWuC2VRQ4U9Z-l9ndWgG9WLKJfNoc7-UsCp50oOZlOt44lqVTXNAreZbGhC1iBI0sa1y5uZChg14nqHFxTSdJMOAhqE_imUwuek4mKh_-f9T6A03jsehvR2Wmf3VESKkKxeuZmjp02hhboXCCpf1fnrXSRwF_1JhzA9rCw0gxFV22Ebpw0hl7glF8aaF-EwOczMdi4BMta431XiWuKyvlVUsPRsFr116TAINrjqV6VRKawFYhZYYokPU84WC0Nm6BOYAXq72I3yuFep-ZtKIBdc3dvGNT8KcgbzMc8tVTYFwXpSPnIxhr4oJCkRIo2I2zBj84Z-0_fHd_xCEwWtN8It-8rxA25mdBHW5-ybZCfUAhxdA7xQStS8bC2iHeFC6PbLLG8-RK3jGUvx-O6sb9b6uSx870YhOfTyCRefbf78WzMBi2IuxxQia27RhcmRQMVmhZM=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】track jacket</p>
              <p>￥9,800</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/gFBgxEsnF4ZukrOY2b5JC7PF62t97HwFXV6k36ws2cKMvQ0FxinC0Q3X4Rnh_0e2bURlziNxDRCwgdt3c5Fxu9PgnoYWAZNWHMK0yUHo6P76XLhHqr7x3vxbrEgyCLxl5M3j2RBPeUMXI36vQTDEPYAfYvtcPNMo3sruVaqzsffttmEBwf3WSTlH-Ss3KFiOYgrdVsdHy-58Qm7P3pbHsUo9DZUAB6KVo92UBz8rN_Yjblkx9dX5UbmUeSb9zx8jRehC4wtHYMpZ2y0ObP4erqyJSOgzt2peCmqEMEnqMNw852Oy2CmXOa8fxHlCbwiv3Klx_Z_UhZdIhaZXsoitET92MpC14bPROycJTw1I6_m6ZHZvg65UvjOdLCLlh-vfP57eUJ29QYwFMBpNBtOO0XBja_lObCjAm4IEhZ74qdeyFD6b-LL84ceEYEEZcGObILBxLBQAivaxZgfX8PYicWjfxOWs3HB84KfqpB4GefYtvkC5vfb170BL1geXTOGYPCJNdWPJ8jG9y84KmAVtl3pkJLfHxKcTYN_R_SkPuoI-EsTm8Ls63c1KR-S1WeRROGFuklOBH4jMDeIpl6zj5DQuWhmxZvNtQGIyhBexKiOcyGqRQYRR16bnnwRiAjZLe0NI3zZ4RmLayK3eOnJBP6Yvua_PQimW7lLWhXtKTJzdhdJRwGICGHyJiGpox5ER_emuZAMtXGAxDRJlLyH30UNFI0Fmzhg8sqz5PmjGMnwDNQBhSjVrJGefuVYNDyNfvdCP5bnIt2FBfewHS8gtKNroaDCUEzsrXQCBLXh8xVcgaMjHbchN8St7b_ue9-pMjWSefPRKgq-FfoiL9wFHg-ED_WR1DZPH2Fr4_p5542P2SHVhuCAOk5PrZR7guOHyNUiGLUOEN8XXnU22oEt6ZOr0gqFzX9nAhF7eSqmW68g=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】track jacket</p>
              <p>￥6,200</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/lD0ezLPItbvidx9fRIYO3QXHeQKAe8f8vAwp8zZ6MXTgRDpYK3z0luPbceS3ilJpr2JP5I2UY9b7o5VQBeNonzZuXkaLs_8LsG16mex2MswK1DYjW6kWzrw3IYbOPqynM8o78xk_Fo4jC9JxYQwP6G3H6v8qEPHGVoaC1d902Q0VHjS4lTJMxKSOwoyGXkTLF5XSRJvtWnJDEIJh7JDlraHXGgRTG168gv_rNfmglq2mR9fnOiTyDODhvOOmlqAGb0DBB-g3mHyaQkzJo_F5WpRb2e0zuSivD2A5qzxMTRl9XGfdH1OLIdiOBtPtUDpj9DcRhv9G5liEJNH2kyyPyExWzlnajPcc4FwvS2gf_CnZWmah4mqXBGXhR3QIyYQShW8jvZAmd84Id-K77_h7R3tEsV0J0mpgt6-j8hvcNk8NhDDr7AwUw7xZz2a0GsUGHKn0KH0oDTAWWkJGVyRwJ-4v_TM7BKRUvrpK5rQR1TkuE-1Ot0XU9fLdhimXa-yiKtUKjVF4DXpCgQYgpe-VDKGjjW7E0DmUjEJiyBQcLWv5po8Ch8McJW7hAEE9tdUui3z9jK0-t2T6sYG7EMfbTBEIzp6DjuEvo2GXBOaQD7dhHlkKECiZqrpDVpjEw48uv1VBDGFBqhzOwJ_riusNVYLBewRMuJ3TZLn8_94uROlQWdNfjTj1T9Izkh08MyGU-M9yQyuHiAjZGW5kPNPzeVOPIvN7Bi9Bsvjj3L_8-jeAaer6RSt5uG_mK7MhiUBWKb6s3_zJFek2lLZtCxCJpWQFX4ew0NQ94brGHahV9xGbt5w4-cPBlCKyeX_rnNhm3GxR761pGKzz9PIGgtXK-3yovoiRUzANKTcJs-vofvr0AYc1P_wcsSLrPTupZycOQtoP-IBSK157sNer6N3J6mKyX_38ZwNfTpUd8Kavc4Y=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】track jacket</p>
              <p>￥3,100</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/RQMRDOWt3WrZGFtrKQYVb86IXOcv-oT4KhoQ-R-emx-2SlzgxR9SQqGHZ65xOb2DQ6B84rw8LoK5GWmIBSfJoCmlGxWYO5kZ-nFrzxOGvQMfrduWljhlGgrUsa9JuUvezefUFu-6kwNxFGWH05GTXqshLBHBukRtpD4sDgj1tCQhPe6FjMcPeO9vn5W43Jc2eX9CBDZBn5Ldgywmja0kj8V66ivATeFjGPJBzEtLXE6p7ekxuMv5KOx_wju31JuZ0Qgf7hanxLFDvY6yjIffUxpYEWbV9AaRvzi0fqAzOUjPzlGmCHtn371-g5LT7b3oiFN8S37dRmt-r9jYqCrP3VJETQ2XCsadclMgipKpxK7lmlG19h0o2gDLXhiUdl8obfwCpS8hIIyGo6xcqGJ_KEUE-d0OBQVCr3oX08CgKttDpaGw8YK8BOMNr_KyVlewMayaD2UTuch6WEUJeCwzYem7_5mJFLpxmDkEWk3RWKo-AflBAE_10AUrmRCwjv_paxXPwIM-AU2bQQSffx-LRc4-lvbpSZZhoHnD5MWq6bqBljoWIWgRk6hJAJAyP4jl918nRdTnLgSSMBZdMVMCoTArirVA-MlCo6PJ4floD_SPrg-p15c-6UkHPV0WYtJG6QGnqmFrdZ4qjrMjTsZeTsPXKHuKQX0TJxORNFK_xHckJtCfxiqZ7ZJVctRpyDtUjUJIL5Yyaf9uV1M2QdXwKzmmea2jVjxs-7z_uLLHabMKYWE6rWft4Ta0eiLHHMmKAg1rdN5hpcZZ1jQ8h52LuRYpfCZ9sg8NwqA76w8itaGbm23QVAJoBrmxjlTeYxQ7iofM2jk1JMrOFphLfxaITVytg6taMwzHsGP6ipbMztpP0g8Dm7kkUBZfK1ltDVt_PQqmKkdWCayXnEExF9HjwpUU_BGe8WkzTRFAiffFBYY=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Carhartt】vest</p>
              <p>￥21,200</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/goLjqW306Y5rMyu5K5cWDXMfX77MMg9OEuhbW7YHCQwBbZKq4wihj8DDsQLV6wTdB4vMdJw_QXTIxuFHcREMD7ugSL0ps3Q7jK3rPZ0BfcZbOig_7fWRZSdiZcU0N3gXvIFFP74CH1kamebU_yT2CIZBU_YzGlPFgNpcPACZIOtoinMLinvBXwK20f52L8-s4p9lplsn3fVfkSXOtoH9kcmepIlXLp-wErDpCgQdc1hyobdS2QmZdAsDSZXQvllE-zBjM5MNVR-kMw_7E_Vc6nIPfJkIEHmuvzmbdwKQQJZQZ92a3fnfSj4IOvZT-wV0Bb6ptI5MK74aOrilvELpy99pRwzE9CYlM0XQlwUkyRIu_iWLU5-jQQ2M5byWdGpT5tz-uF4UUb8J-JPKcDAIQEm7UBQ2vwBk-sjHhV1u4hBUCz8sjvaiQjZMDW7aU8LdZndNQlD525Ou-lyhyl1CBR_LLHxVuCqwoNLjFNEF_xQdsD_a-JJYU14V1BAGzWA7uY2PP2t65rj8JXM6DZlVEUiAMfVmKwzSvGR73SfZ5wv2ce8FsNIWDVsH8SYC4AoFx7mHotxF-TalEafbspOkTHC-zaaiWhzL_OBesogHQ1O4lmwOH1SbF3JDV6g3QDjQHvFw5wwDB8_EMtYXJF7qbTF65pVxeK6w8ReHM1MT6N50FLhCHeO7npwHJdCq4f4VYNqtVphZUjIFBdKt_LvXMIv29vRNGXxxWQJGgsqBAFOAIWdEwAm4nnUMxoTRgA9M9Gt8F0Vb9Bg-1q7uDjoCUaYvnc9mhVR33FF7yn8e8f7PvEIJTyvqVxrZc3eQ6sRv3AjOz5xwvh819VkjNdD231rGKoPuvJ902QueIkuwPTeuBS06bGaZe4Yx1s5utJ89LI0TRFiKDwe1oN2Ti7t0SUMz_SY132VCnGNwx3RYTBI=s909-no?authuser=0"
              className="pic"
            />
            <div class="explain">
              <p className="title">【Vintage】nylon pullover</p>
              <p>￥5,900</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </>
  );
};
