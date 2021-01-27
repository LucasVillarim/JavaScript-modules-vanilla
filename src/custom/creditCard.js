
const bgDarkBack = 'background: linear-gradient(to left, #040404, #000000, #656565);';
const bgDarkFront = 'background: linear-gradient(to right, #040404, #000000, #656565);';
const bgSilverFront = 'background: linear-gradient(-72deg,#dedede,#ffffff 16%,#dedede 21%,#ffffff 24%,#454545 27%,#dedede 36%,#ffffff 45%,#ffffff 60%,#dedede 72%,#ffffff 80%,#dedede 84%,#a1a1a1)';
const bgSilverBack = 'background: linear-gradient(72deg,#dedede,#ffffff 16%,#dedede 21%,#ffffff 24%,#454545 27%,#dedede 36%,#ffffff 45%,#ffffff 60%,#dedede 72%,#ffffff 80%,#dedede 84%,#a1a1a1)';
const bgGoldFront = 'background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);';
const bgGoldBack = 'background: linear-gradient(to left, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);';
const bgGoldYellow = 'background: linear-gradient(-72deg,#ffc373, #ffffff 16%, #ffc373 21%, #ffffff 24%,#a17434 27%, #ffc373 36%, #ffffff 45%, #ffffff 60%,#ffc373 72%,#ffffff 80%,#ffc373 84%,#a17434)';

export const creditCardBlack = `
  <div class="creditCard-body">
    <div class="creditCard-inner">
      <div class="creditCard-front" style="${bgDarkFront}">
        <h5 class="creditCard-title silver-text">Black</h5>
        <div class="creditCard-middle">
          <div class="creditCard-chip">
            <div class="creditCard-circuit">
            </div>
          </div>
          <p class="creditCard-text silver-text">Unlimited</p>
        </div>
      </div>
      <div class="creditCard-back" style="${bgDarkBack}">
      <div class="creditCard-back--line bg-dark"></div>
      <div class="creditCard-back--line light-bg text-end pe-2 pt-1 w-75">000</div>
        <h5 class="creditCard-back--title mt-2 ms-2">Número do Cartão</h5>
      </div>
    </div>
  </div>
`;

export const creditCardGold = `
  <div class="creditCard-body mx-3">
    <div class="creditCard-inner">
      <div class="creditCard-front" style="${bgGoldFront}">
        <h5 class="creditCard-title gold-text">Gold</h5>
        <div class="creditCard-middle">
          <div class="creditCard-chip">
          <div class="creditCard-circuit"></div>
        </div>
          <p class="creditCard-text gold-text">Platinum</p>
        </div>
      </div>
      <div class="creditCard-back" style="${bgGoldFront}">
      <div class="creditCard-back--line"></div>
      <div class="creditCard-back--line light-bg text-end w-75 pe-2 pt-1">000</div>
        <h5 class="creditCard-back--title gold-text">Número do Cartão</h5>
      </div>
    </div>
  </div>
`;

export const creditCardSilver = `
  <div class="creditCard-body">
    <div class="creditCard-inner">
      <div class="creditCard-front" style="${bgSilverFront}">
        <h5 class="creditCard-title text-dark">Silver</h5>
        <div class="creditCard-middle">
          <div class="creditCard-chip">
            <div class="creditCard-circuit"></div>
          </div>
          <p class="creditCard-text text-dark">Business</p>
        </div>
      </div>
      <div class="creditCard-back" style="${bgSilverBack}">
      <div class="creditCard-back--line"></div>
      <div class="creditCard-back--line light-bg text-end pe-2 pt-1 w-75">000</div>
        <h5 class="creditCard-back--title text-dark">Número do Cartão</h5>
      </div>
    </div>
  </div>
`;
