/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    const editUrl = siteConfig.repoUrl + '/edit/master/website/siteConfig.js';
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who's using Mouselog?</h1>
              <p>Hundreds of projects are using Mouselog, from established Fortune 500 companies to hot new startups. If you&#x27;re curious to see what can be accomplished Mouselog, check out these apps!</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Is your project also using Mouselog?</p>
            <a href="https://github.com/microsoft/mouselog-website/edit/master/website/siteConfig.js" className="button">
              Add your company here
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
