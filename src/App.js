import './index.less';

function App() {
  return (
    <div className="container">
      <div className="header">
        <img
          className={'bg'}
          src={'./bg.png'}
          width={'100%'}
          height={'592px'}
        />
        <div className="nav">
          <img src={'./logo.svg'} width={'150px'} height={'auto'} />
        </div>
        <div className="title">
          <img src={'./title.png'} width={'484px'} height={'auto'} />
          <div className="desc">Support all wallets on Sui</div>
          <div className="btn-group">
            <a className="primary" href={'/guide'}>
              Guide
            </a>
            <a className="secondary" href={'/'}>
              Github
            </a>
          </div>
        </div>
        <img
          className={'wallet'}
          src={'/wallet.png'}
          width={'360px'}
          height={'auto'}
        />
      </div>
      <section className={'benefit'}>
        <div className={'benefit-title'}>Benefits of kit</div>
        <div className={'benefit-items'}>
          <div className={'benefit-item'}>
            <img src={'./1.png'} width={'120px'} height={'auto'} />
            <div className={'benefit-content'}>
              <div className={'content-title'}>Component</div>
              <div className={'content-desc'}>
                Provides multiple UI components and context components for
                passing values
              </div>
            </div>
          </div>
          <div className={'benefit-item'}>
            <img src={'./2.png'} width={'120px'} height={'auto'} />
            <div className={'benefit-content'}>
              <div className={'content-title'}>Ecology</div>
              <div className={'content-desc'}>
                Supports the connection of all wallets in the Sui ecosystem
              </div>
            </div>
          </div>
          <div className={'benefit-item'}>
            <img src={'./3.png'} width={'120px'} height={'auto'} />
            <div className={'benefit-content'}>
              <div className={'content-title'}>Styling</div>
              <div className={'content-desc'}>
                Export style files separately, and support defining themes
                through variables
              </div>
            </div>
          </div>
          <div className={'benefit-item'}>
            <img src={'./4.png'} width={'120px'} height={'auto'} />
            <div className={'benefit-content'}>
              <div className={'content-title'}>Hooks</div>
              <div className={'content-desc'}>
                Provides multiple Hooks functions to directly obtain wallet
                list, account balance and so on
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={'dapp'}>
        <div className={'dapp-left'}>
          <img src={'./5.png'} width={'300px'} height={'auto'} />
          <img src={'./6.png'} width={'300px'} height={'auto'} />
        </div>
        <div className={'dapp-right'}>
          <div className={'title'}>Easily test Sui dApp</div>
          <div className={'desc'}>
            Can send SUI coins, swiftly create multiple wallets, and disconnect
            dApps directly from the wallet.
          </div>
        </div>
      </section>
      <section className={'compatible'}>
        <div className={'compatible-left'}>
          <div className={'title'}>Frameworks Compatible</div>
          <div className={'desc'}>
            Packaged into a common NPM package, which can be easily connected to
            any DAPP written by React or Vue on sui.
          </div>
        </div>
        <div className={'compatible-right'}>
          <img src={'./7.png'} width={'532px'} height={'auto'} />
        </div>
      </section>
      <section className={'join'}>
        <div className={'join-title'}>Join Our Community</div>
        <div className={'btn-group'}>
          <a href={'https://twitter.com/OpenSui'} target={'_blank'}>
            <img src={'./8.png'} width={'500px'} height={'auto'} />
          </a>
          <a href={'https://discord.gg/opensui'} target={'_blank'}>
            <img src={'./9.png'} width={'500px'} height={'auto'} />
          </a>
        </div>
      </section>
      <section className={'footer'}>
        <div className="logo">
          <img src={'./logo.svg'} alt="" />
          <p>© 2023 OpenSui. All rights reserved.</p>
        </div>
        <div className="a_list">
          <div className="item">
            <p>Product</p>
            <a href="">OpenSui Wallet</a>
          </div>
          <div className="item">
            <p>Company</p>
            <a href="">About</a>
            <a href="">Privacy Polic</a>
            <a href="">Terms of Use</a>
          </div>
          <div className="share">
            <a href="">Share 6</a>
            <a href="https://twitter.com/OpenSui">Twitter</a>
            <a href="https://discord.gg/opensui">discord</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
