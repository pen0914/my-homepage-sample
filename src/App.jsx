import React from "react";
import "./styles.css";

import { outer1 } from "./image/IMG_9650.JPG";
import { outer2 } from "./image/IMG_9651.JPG";
import { outer3 } from "./image/IMG_9652.JPG";
import { outer4 } from "./image/IMG_9653.JPG";
import { outer5 } from "./image/IMG_9656.JPG";
import { outer6 } from "./image/IMG_9657.JPG";
import { outer7 } from "./image/IMG_9660.JPG";
import { tops1 } from "./image/IMG_9654.JPG";
import { tops2 } from "./image/IMG_9667.JPG";
import { botoms1 } from "./image/IMG_9616.JPG";
import { botoms2 } from "./image/IMG_9618.JPG";
import { hat1 } from "./image/IMG_9615.JPG";
import { hat2 } from "./image/IMG_9617.JPG";
import { hat3 } from "./image/IMG_9619.JPG";
import { hat4 } from "./image/IMG_9620.JPG";

export const App = () => {
  return (
    <>
      <header>
        <div class="header">
          <a href="#" class="btn option">
            <span class="fa fa-list"></span>
          </a>

          <p class="header-name">potato</p>

          <a href="#" class="btn cart">
            <span class="fa fa-cart-plus"></span>
          </a>
        </div>
      </header>
      <div class="top">
        <h1 class="top-explain">新着アイテム</h1>

        <div id="like_button_container"></div>

        <div class="main">
          <li class="clothing">
            <a href="&">
              <p class="item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AL9nZEXwTUk0L_HG_lrTCIuALNSJqf2Er56CadHlM40fMZuQcDUWkHhwUl6r7ZADLnoCQF1UwHfPGfjkX9XMOYPuAwFSc9XwmHMgW9HTQxQHeFwEHByPcqD6mzw2sR4fP4YtBASjv1oxdUhCixtzh5p-gUg=s909-no?authuser=0"
                  alt=""
                  class="pic"
                />
                <div class="explain">
                  <p>【Vintage】track jacket</p>
                  <p>￥5,100</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer2 }} alt="" />
                <div class="explain">
                  <p>【Vintage】sweat Mickey</p>
                  <p>￥7,900</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer3 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】track jacket</p>
                  <p>￥6,100</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ botoms1 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】truck pants</p>
                  <p>￥13,800</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ botoms2 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】paisley slacks</p>
                  <p>￥8,200</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ hat4 }} class="pic" />
                <div class="explain">
                  <p>【override】knit bucket</p>
                  <p>￥9,900</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ hat1 }} class="pic" />
                <div class="explain">
                  <p>【stussy】basic plaid bucket hat</p>
                  <p>￥6,600</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ hat2 }} class="pic" />
                <div class="explain">
                  <p>【old stussy】knit hat</p>
                  <p>￥14,500</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ hat3 }} class="pic" />
                <div class="explain">
                  <p>【override】ang tulip</p>
                  <p>￥7,100</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer1 }} class="pic" />
                <div class="explain">
                  <p>【towncraft】souvenir jacket</p>
                  <p>￥15,500</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer2 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】track jacket</p>
                  <p>￥9,800</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer4 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】track jacket</p>
                  <p>￥6,200</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer2 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】track jacket</p>
                  <p>￥3,100</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer2 }} class="pic" />
                <div class="explain">
                  <p>【Carhartt】vest</p>
                  <p>￥21,200</p>
                </div>
              </p>
            </a>
          </li>

          <li class="clothing">
            <a href="&">
              <p class="item">
                <img src={{ outer1 }} class="pic" />
                <div class="explain">
                  <p>【Vintage】nylon pullover</p>
                  <p>￥5,900</p>
                </div>
              </p>
            </a>
          </li>
        </div>
      </div>
      <div class="middle"></div>
      <div class="under"></div>
      <footer></footer>
    </>
  );
};
